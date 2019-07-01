import { Media } from './media';
import { Content } from './content';

export class Video implements Media, Content {
  source: string;
  title: string;
  description: string;
  position: number;
}
