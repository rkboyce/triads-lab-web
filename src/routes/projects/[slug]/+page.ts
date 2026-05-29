import { error } from '@sveltejs/kit';
import { getProject } from '$lib/data/projects';

export function load({ params }) {
  const project = getProject(params.slug);

  if (!project) {
    error(404, 'Project not found');
  }

  return { project };
}
