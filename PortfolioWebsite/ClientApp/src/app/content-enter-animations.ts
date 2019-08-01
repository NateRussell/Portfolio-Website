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

export const shiftInAnimation = trigger('shiftIn', [
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
        transform: 'translateY(20px)'
      }),
      stagger('.2s', [
        animate('.4s', style({
          opacity: 1,
          transform: 'translateY(0px)'
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
