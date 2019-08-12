import { Content } from './content';


export class Project
{
  id: number;
  title: string;
  description: string;
  featured: boolean;
  created: Date;
  modified: Date;
  thumb: string;
  content: Content[];
}
