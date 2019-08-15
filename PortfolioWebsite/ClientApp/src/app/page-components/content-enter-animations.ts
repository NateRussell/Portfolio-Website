import {
  trigger,
  style,
  animate,
  transition,
  animateChild,
  query,
  group,
  animation,

  stagger,
  state,
  sequence
} from '@angular/animations';

export const scaleInAnimation = trigger('scaleIn', [
  state('false', style({
    opacity: 0
  })),
  transition('false => true', [
    style({
      opacity: 1
      
    }),
    query('.project', [
      style({
        opacity: 0,
        transform: 'scale(.8)'
      }),
      stagger('.2s', [
        animate('.4s', style({
          opacity: 1,
          transform: 'scale(1)'
        }))
      ])
    ])
  ])
]);

export const fadeInAnimation = trigger('fadeIn', [
  state('false', style({
    opacity: 0
  })),
  state('true', style({
    opacity: 1
  })),
  transition('false => true', [
        animate('.4s')
  ])
]);
