import { Content } from './content';

export class Text implements Content
{
  id: number;
  header: string;
  text: string;
  position: number
}
