import {
  trigger,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,

  state
} from '@angular/animations';

const time: string = '250ms';

export const exitLeftAnimation: AnimationTriggerMetadata = trigger('exitLeftAnimation', [
  state('true', style({ opacity: 0 })),

  transition('false => true', [
    style({ transform: 'translateX(0)', opacity: 1 }),
    animate(time, style({ transform: 'translateX(100%)' }))
  ]),
  
  transition('true => false', [
    style({ transform: 'translateX(-100%)' }),
    animate(time, style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const exitRightAnimation: AnimationTriggerMetadata = trigger('exitRightAnimation', [
  state('true', style({ opacity: 0 })),
  transition('false => true', [
    style({ transform: 'translateX(0)', opacity: 1 }),
    animate(time, style({ transform: 'translateX(-100%)' }))
  ]),
  transition('true => false', [
    style({ transform: 'translateX(100%)' }),
    animate(time, style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);
