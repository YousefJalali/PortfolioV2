import { projectsData } from './projects'

export const sections = ['home', 'about', 'projects', 'contact']

export const sectionsWithProjects = [
  'home',
  'about',
  ...new Array(projectsData.length).fill(0).map((p, i) => `project${i}`),
  'contact',
]
