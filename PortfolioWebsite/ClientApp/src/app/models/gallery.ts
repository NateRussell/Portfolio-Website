import { Content } from './content';
import { Media } from './media';

export class Gallery implements Content {
  id: number;
  media: Media[];
  position: number;
}
