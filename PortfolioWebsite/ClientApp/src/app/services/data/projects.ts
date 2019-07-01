import { Project } from 'src/app/models/project';
import { Text } from 'src/app/models/text';


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Furniture Design',
    description: 'A fresh take on an old friend. What started as an entry for a furniture design competition devoloped into much more.',
    created: new Date('3/16/2010'),
    modified: new Date('5/16/2019'),
    thumb: '../../assets/project files/furniture design/Furniture Design Thumb.jpg',
    content: [
      Object.assign(new Text(), {
        id: 1,
        header: 'test',
        text: 'test',
        position: 1
      }) 
    ]
  },
  {
    id: 2,
    title: 'Drone',
    description: 'The primary CG character for a short film.',
    created: new Date('4/5/2010'),
    modified: null,
    thumb: '../../assets/project files/drone/DroneThumb.jpg',
    content: []
  },
  {
    id: 3,
    title: 'Goliath',
    description: 'An organic model created using the main character of the Disney cartoon Gargoyles as reference. Originally, I modeled it as a low polygon model, and colored it using cartoon shaders. I Later brought it into Z-Brush to detail it and give it greater sense of realism and mass.',
    created: new Date('10/21/2009'),
    modified: new Date('5/10/2011'),
    thumb: '../../assets/project files/goliath/GoliathThumb.jpg',
    content: []
  }
].sort(function (a: Project, b: Project) { return Number((b.modified || b.created)) - Number((a.modified || a.created)); });
