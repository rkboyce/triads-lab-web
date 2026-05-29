export type Publication = {
  title: string;
  meta: string;
  label: string;
  tags: string[];
  links: [string, string][];
};

export const publications: Publication[] = [
  {
    title:
      'Large-scale adverse effects related to treatment evidence standardization (LAERTES)',
    meta:
      'Boyce RD et al. J Biomed Semantics. 2017;8(1):11. Open scalable system linking pharmacovigilance evidence sources with clinical data.',
    label: '2017',
    tags: ['Pharmacovigilance', 'OHDSI', 'Evidence integration'],
    links: [
      ['DOI', 'https://doi.org/10.1186/s13326-017-0115-3'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/28270198/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5341176/']
    ]
  },
  {
    title: 'Designing and evaluating contextualized drug-drug interaction algorithms',
    meta:
      'Chou E, Boyce RD et al. JAMIA Open. 2021;4(1):ooab023. Evaluation of tailored drug-drug interaction logic for clinical decision support.',
    label: '2021',
    tags: ['CDS', 'Drug-drug interactions', 'Algorithms'],
    links: [
      ['DOI', 'https://doi.org/10.1093/jamiaopen/ooab023'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/33763631/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7976224/']
    ]
  },
  {
    title: 'Developing a knowledge graph for pharmacokinetic natural product-drug interactions',
    meta:
      'Taneja SB, Callahan TJ, Paine MF, Kane-Gill SL, Kilicoglu H, Joachimiak MP, Boyce RD. J Biomed Inform. 2023;140:104341.',
    label: '2023',
    tags: ['Natural products', 'Knowledge graphs', 'Drug interactions'],
    links: [
      ['DOI', 'https://doi.org/10.1016/j.jbi.2023.104341'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/36933632/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10150409/']
    ]
  },
  {
    title: 'Adverse drug reactions and outcomes attributed to kratom in FAERS',
    meta:
      'Li X, Ndungu P, Taneja SB et al. Clin Transl Sci. 2023;16(6):1002-1011. Analysis of kratom adverse event reports in FAERS.',
    label: '2023',
    tags: ['Natural products', 'FAERS', 'Pharmacovigilance'],
    links: [
      ['DOI', 'https://doi.org/10.1111/cts.13505'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/36861661/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10264943/']
    ]
  },
  {
    title: 'An open source knowledge graph ecosystem for the life sciences',
    meta:
      'Callahan TJ, Tripodi IJ, Stefanski AL et al. Sci Data. 2024;11(1):363. Ecosystem-level work for reusable biomedical knowledge graphs.',
    label: '2024',
    tags: ['Knowledge graphs', 'Open science', 'Biomedical AI'],
    links: [
      ['DOI', 'https://doi.org/10.1038/s41597-024-03171-w'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/38605048/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11009265/']
    ]
  },
  {
    title: 'Toward a complete dataset of drug-drug interaction information from publicly available sources',
    meta:
      'Ayvaz S, Horn J, Hassanzadeh O et al. J Biomed Inform. 2015;55:206-217. Public-source foundation for DDI knowledge infrastructure.',
    label: '2015',
    tags: ['Drug-drug interactions', 'Knowledge bases', 'CDS'],
    links: [
      ['DOI', 'https://doi.org/10.1016/j.jbi.2015.04.006'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/25917055/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4464899/']
    ]
  },
  {
    title: 'Consensus recommendations for systematic evaluation of drug-drug interaction evidence for CDS',
    meta:
      'Scheife RT, Hines LE, Boyce RD et al. Drug Saf. 2015;38(2):197-206. Consensus process for evidence evaluation in clinical decision support.',
    label: '2015',
    tags: ['CDS', 'Evidence evaluation', 'Drug safety'],
    links: [
      ['DOI', 'https://doi.org/10.1007/s40264-014-0262-8'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/25556085/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4624322/']
    ]
  },
  {
    title: 'Dynamic enhancement of drug product labels to support drug safety, efficacy, and effectiveness',
    meta:
      'Boyce RD, Horn JR, Hassanzadeh O et al. J Biomed Semantics. 2013;4(1):5. Structured drug-label enhancement for safety knowledge use.',
    label: '2013',
    tags: ['Drug labels', 'Knowledge representation', 'Medication safety'],
    links: [
      ['DOI', 'https://doi.org/10.1186/2041-1480-4-5'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/23351881/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3698101/']
    ]
  },
  {
    title: 'Automated screening of emergency department notes for drug-associated bleeding adverse events',
    meta:
      'Boyce RD, Jao J, Miller T, Kane-Gill SL. Appl Clin Inform. 2017;8(4):1022-1030. NLP screening for adverse drug events in older adults.',
    label: '2017',
    tags: ['Older adults', 'NLP', 'Adverse events'],
    links: [
      ['DOI', 'https://doi.org/10.4338/ACI-2017-02-RA-0036'],
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/29241242/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5802315/']
    ]
  },
  {
    title: 'Predicting natural product-drug interactions with knowledge graph embeddings',
    meta:
      'Taneja SB, Dilan-Pantojas IO, Boyce RD. AMIA Jt Summits Transl Sci Proc. 2025;2025:556-565. Best Student Paper Award.',
    label: '2025',
    tags: ['Natural products', 'Knowledge graph embeddings', 'AI'],
    links: [
      ['PubMed', 'https://pubmed.ncbi.nlm.nih.gov/40502231/'],
      ['PMC', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12150722/']
    ]
  }
];

export const featuredPublications = publications.slice(0, 4);
