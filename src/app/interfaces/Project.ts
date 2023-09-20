import { Image } from './Image';

export interface Project {
    title: string;
    startDate: string;
    endDate: string;
    programmingLanguages: string[];
    description: string;
    projectLink: string;
    githubLink: string;
    images: Image[];
}