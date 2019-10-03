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
        transform: 'scale(.85)'
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

export const rightSlideInAnimation = trigger('rightSlideIn', [
  state('false', style({
    opacity: 0,
    transform: "translateX(25px)"
  })),
  state('true', style({
    opacity: 1,
    transform: "translateX(0)"
  })),
  transition('false => true', [
    animate('.8s')
  ])
]);

export const leftSlideInAnimation = trigger('leftSlideIn', [
  state('false', style({
    opacity: 0,
    transform: "translateX(-25px)"
  })),
  state('true', style({
    opacity: 1,
    transform: "translateX(0)"
  })),
  transition('false => true', [
    animate('.8s')
  ])
]);
