# Contact Workflow Suggestion: Power Automate

## Assumption

The lab can obtain a shared Pitt mailbox such as `triads-lab@pitt.edu`, and Pitt/DBMI IT allows a Power Automate flow to receive public website form submissions.

## Recommended Approach

Use the website contact form as the public interface, then send submissions to a Power Automate flow.

Workflow:

1. Visitor submits the contact form on the TrIADS website.
2. The static SvelteKit site posts form data to a Power Automate HTTP trigger.
3. Power Automate validates the submission fields.
4. Power Automate sends a formatted email from `triads-lab@pitt.edu`.
5. Richard can whitelist `triads-lab@pitt.edu` or the consistent Pitt sender.

## Why This Fits

- Keeps Richard's personal email off the public website.
- Gives the lab a stable sender that can be whitelisted.
- Lets the site keep a real embedded form instead of a `mailto:` link.
- Keeps the workflow inside Pitt/Microsoft 365 if IT approves it.
- Works with static hosting because the email logic runs in Power Automate, not GitHub Pages.

## Form Fields

Minimum launch fields:

- Inquiry type
- Visitor name
- Visitor email
- Message

Optional fields:

- Organization
- Project or topic
- Preferred response timeline

## Implementation Notes

- Trigger: Power Automate `When an HTTP request is received`.
- Email action: `Send an email from a shared mailbox (V2)` if allowed.
- Sender: `triads-lab@pitt.edu` or the approved shared mailbox.
- Recipient: Richard, a lab admin, or a shared triage group.
- Website form should include basic validation before submission.
- Power Automate should include server-side validation before sending email.

## Safety and Spam Controls

Recommended controls:

- Honeypot field hidden from human users.
- Required fields in both frontend and Power Automate.
- Simple submission success/error messages.
- No sensitive health information requested.
- Optional shared secret or token in the request if Pitt IT recommends it.

## Questions for Pitt/DBMI IT

- Can the lab create `triads-lab@pitt.edu` or a similar shared mailbox?
- Can Power Automate receive public HTTP requests for this use case?
- Does the HTTP trigger require a premium license in Pitt's tenant?
- Can the flow send from the shared mailbox?
- Are there Pitt security, privacy, or branding requirements for public contact forms?

## Big Picture Summary

The best launch path is a static website form backed by Power Automate and a shared Pitt mailbox. The website stays simple, the email sender is consistent, Richard can whitelist it, and contact handling remains institutionally controlled.

## Brief Alternatives

- Microsoft Forms: easiest Pitt/M365 path, less polished website experience.
- Pitt-managed form: best compliance path if DBMI already has one.
- Static form service: easiest non-Pitt setup, weaker institutional control.
- Mailto link: simplest fallback, no embedded form.
- Serverless function plus email service: most flexible, more setup and maintenance.
