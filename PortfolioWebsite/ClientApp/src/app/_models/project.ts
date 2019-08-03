import { Content } from './content';


export class Project
{
  id: number;
  title: string;
  description: string;
  created: Date;
  modified: Date;
  thumb: string;
  content: Content[];
}
