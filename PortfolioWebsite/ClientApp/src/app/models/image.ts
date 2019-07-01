import { Media } from './media';
import { Content } from './content';

export class Image implements Media, Content {
  source: string;
  title: string;
  description: string;
  position: number;
}
