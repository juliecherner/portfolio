import { Skill } from '@/types/skills'

export const stack: Skill[] = [
  {
    title: 'Languages',
    data: ['Typescript/Javascript', 'Python'],
  },

  {
    title: 'Frontend',
    data: [
      { title: 'React', data: ['Redux/Saga/Toolkit', 'MUI'] },
      { title: 'Angular', data: ['RxJS', 'Angular Material'] },
      { title: 'Next.js', data: [] },
      { title: '', data: ['Tailwind CSS', 'SCSS/SASS/CSS'] },
    ],
  },
  {
    title: 'Backend',
    data: [
      {
        title: 'Node.js',
        data: ['Express', 'Nest.js'],
      },
      {
        title: 'Django',
        data: [],
      },
    ],
  },
  {
    title: 'Databases',
    data: [
      { title: 'NoSQL', data: ['MongoDB', 'Redis', 'Firebase'] },
      { title: 'SQL', data: ['PostgreSQL', 'AWS Redshift'] },
      { title: 'Bucket', data: ['AWS S3', 'Firebase Storage'] },
    ],
  },

  {
    title: 'DevOps',
    data: [
      { title: 'Containers', data: ['Docker', 'Docker Swarm', 'Kubernetes'] },
      {
        title: 'CI/CD',
        data: ['Github Actions', 'Circle CI', 'Codefresh'],
      },
      {
        title: 'Cloud',
        data: ['AWS E2C', 'GCP'],
      },
    ],
  },
  {
    title: 'Tests',
    data: [
      {
        title: 'Unit/API',
        data: ['Jest'],
      },

      {
        title: 'E2E',
        data: ['Cypress', 'Puppeteer'],
      },
    ],
  },
  {
    title: 'Other',
    data: [
      { title: 'Tools', data: ['Linux', 'Git', 'Figma'] },
      { title: 'Methodologies', data: ['Agile', 'SCRUM'] },
    ],
  },
]
