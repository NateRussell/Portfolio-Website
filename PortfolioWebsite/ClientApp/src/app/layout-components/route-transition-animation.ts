import {
  trigger,
  style,
  animate,
  transition,
  animateChild,
  query,
  group,
  animation
} from '@angular/animations';

export const routeTransitionAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        height: '100%',
        left: 0,
        right: 0
      })
    ], { optional: true }),
    query(':enter',
      [
        style({
          opacity: 0
        })
      ], { optional: true }
    ),
    query(':leave',
      [
        style({ opacity: 1 }),
        animate('0.4s', style({
          opacity: 0,
          //display: 'none'
        }))
      ], { optional: true }
    ),
    query(':enter', [
      query('@*', [animateChild()], { optional: true })
      ], { optional: true }
    )
    
    /* uncomment to add fade-in animation to route transitions
    query(':enter',
      [
        style({ opacity: 0 }),
        animate('0.2s', style({ opacity: 1 }))
      ],
      { optional: true }
    )
    */
  ])
]);
