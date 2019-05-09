import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const slideAngularExampleAnimations =
    trigger('slideAngularAnimations', [
        transition('HomePage <=> AboutPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> FilterPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);


export const slideMyAnimation =
    trigger('myAnimation', [
        transition('* => *', [
            query(
                ':enter',
                [style({ opacity: 0 })],
                { optional: true }
            ),
            query(
                ':leave',
                [style({ opacity: 1 }), animate('1s', style({ opacity: 0 }))],
                { optional: true }
            ),
            query(
                ':enter',
                [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))],
                { optional: true }
            )
        ])
    ]);