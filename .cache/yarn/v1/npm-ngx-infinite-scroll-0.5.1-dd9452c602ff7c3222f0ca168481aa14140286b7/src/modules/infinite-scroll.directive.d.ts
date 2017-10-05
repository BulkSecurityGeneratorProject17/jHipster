import { InfiniteScrollEvent, IPositionStats } from '../models';
import { ElementRef, EventEmitter, OnDestroy, OnInit, NgZone } from '@angular/core';
import { PositionResolver } from '../services/position-resolver';
import { ScrollRegister } from '../services/scroll-register';
import { ScrollResolver } from '../services/scroll-resolver';
export declare class InfiniteScrollDirective implements OnDestroy, OnInit {
    private element;
    private zone;
    private positionResolver;
    private scrollRegister;
    private scrollerResolver;
    scrolled: EventEmitter<InfiniteScrollEvent>;
    scrolledUp: EventEmitter<InfiniteScrollEvent>;
    infiniteScrollDistance: number;
    infiniteScrollUpDistance: number;
    infiniteScrollThrottle: number;
    infiniteScrollDisabled: boolean;
    infiniteScrollContainer: any;
    scrollWindow: boolean;
    immediateCheck: boolean;
    horizontal: boolean;
    alwaysCallback: boolean;
    private disposeScroller;
    constructor(element: ElementRef, zone: NgZone, positionResolver: PositionResolver, scrollRegister: ScrollRegister, scrollerResolver: ScrollResolver);
    ngOnInit(): void;
    handleOnScroll(container: IPositionStats): void;
    shouldTriggerEvents(shouldScroll: boolean): boolean;
    ngOnDestroy(): void;
    onScrollDown(data?: InfiniteScrollEvent): void;
    onScrollUp(data?: InfiniteScrollEvent): void;
    private resolveContainerElement();
}
