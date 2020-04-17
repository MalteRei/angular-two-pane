import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import { BookService } from '../book.service';
import { IPoint } from '../models/IPoint';
import { Point } from '../models/Point';
import { IPage } from '../models/IPage';
import { trigger, transition, style, animate, keyframes, state, AnimationFactory, AnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  animations: [
    // animation triggers go here
    trigger('pageTrigger', [
      state('previous', style({
        transform: 'scale(0.9)'
      })),
      state('current', style({
        transform: 'scale(1)'
      })),
      state('next', style({
        transform: 'scale(0.9)'
      })),
      transition('current => *', [
        animate('500ms cubic-bezier(0.8, 0, 0.2, 1)')
      ]),
      transition('* => current', [
        animate('500ms 1.5s cubic-bezier(0.8, 0, 0.2, 1)')
      ])
    ]),
    trigger('changePageTrigger', [

      transition(':increment', [
        transition(':leave', animate('500ms', keyframes([
          style({ transform: 'scale(1) translateX(0)', offset: 0 }),
          style({ transform: 'scale(0.9) translateX(0)', offset: 0.25 }),
          style({ transform: 'scale(0.9) translateX(-160%)', offset: 1.0 })
        ]))),
        transition(':enter',
          animate('500ms', keyframes([
            style({ transform: 'scale(0.9) translateX(160%)', offset: 0 }),
            style({ transform: 'scale(0.9) translateX(0)', offset: 0.75 }),
            style({ transform: 'scale(1) translateX(0)', offset: 1.0 })
          ])))
      ]),
      transition(':decrement', [
        transition(':enter', animate('500ms', keyframes([
          style({ transform: 'scale(0.9) translateX(-160%)', offset: 0 }),
          style({ transform: 'scale(0.9) translateX(0)', offset: 0.75 }),
          style({ transform: 'scale(1) translateX(0)', offset: 1.0 })
        ]))),
        transition(':leave',
          animate('500ms', keyframes([
            style({ transform: 'scale(1) translateX(0)', offset: 0 }),
            style({ transform: 'scale(0.9) translateX(0)', offset: 0.25 }),
            style({ transform: 'scale(0.9) translateX(160%)', offset: 1.0 })
          ])))
      ])

    ]),
  ]
})
export class FirstPageComponent implements OnInit, AfterViewInit {

  @ViewChild('firstPage') swipeElement: ElementRef;

  private rafPending = false;
  private initialTouchPos: IPoint = null;
  private lastTouchPos: IPoint = null;
  private currentXPosition = 0;
  private currentState = SwipeState.STATE_DEFAULT;
  public transition = 'initial';
  public transformStyle = '';
  private itemWidth = 0;
  private slopValue = 0;
  private handleSize = 10;


  constructor(private bookService: BookService, private renderer: Renderer2, private builder: AnimationBuilder) { }

  ngOnInit(): void {

  }

  public pageState(index: number){
    if(index === this.bookService.currentPageIndex) {
      return 'current';
    } else if(index < this.bookService.currentPageIndex) {
      return 'previous';
    } else {
      return 'next';
    }
  }

  public pages() {
    return this.bookService.book.pages;
  }
  public paragraphsToDisplay() {
    return this.bookService.currentPage().paragraphs;
  }

  public titleToDisplay(): string | undefined {
    return this.bookService.currentPage().title;
  }

  public pageNumber() {
    return this.bookService.currentPageIndex;
  }

  public nextPage() {

    this.bookService.nextPage();

    const myAnimation: AnimationFactory = this.builder.build([
      animate('500ms 1s cubic-bezier(0.8, 0, 0.2, 1)', style({ transform: `translateX(-${100 * this.bookService.currentPageIndex}%)` }))
    ]);

    const player = myAnimation.create(this.swipeElement.nativeElement);
    player.play();

  }


  public previousPage() {
    this.bookService.previousPage();
    const myAnimation: AnimationFactory = this.builder.build([
      animate('500ms 1s cubic-bezier(0.8, 0, 0.2, 1)', style({ transform: `translateX(-${100 * this.bookService.currentPageIndex}%)` }))
    ]);

    const player = myAnimation.create(this.swipeElement.nativeElement);
    player.play();


  }

  public disableNextPageButton() {
    return !this.bookService.hasNextPage();
  }

  public disablePreviousPageButton() {
    return !this.bookService.hasPreviousPage();
  }

  ngAfterViewInit() {
    this.updateSwipeItemWidth();
    /* // [START addlisteners] */
    // Check if pointer events are supported.
    if (window.PointerEvent) {
      // Add Pointer Event Listener
      //TODO: destroy event listeners: https://stackoverflow.com/a/47106904 + add render listen for the other event listeners.
      this.renderer.listen(this.swipeElement.nativeElement, 'pointerdown', (event) => this.handleGestureStart(event));
      this.renderer.listen(this.swipeElement.nativeElement, 'pointermove', (event) => this.handleGestureMove(event));
      this.renderer.listen(this.swipeElement.nativeElement, 'pointerup', (event) => this.handleGestureEnd(event));
      this.renderer.listen(this.swipeElement.nativeElement, 'pointercancel', (event) => this.handleGestureEnd(event));

      /* this.swipeElement.nativeElement.addEventListener('pointerdown', this.handleGestureStart.bind(this), true);
       this.swipeElement.nativeElement.addEventListener('pointermove', this.handleGestureMove.bind(this), true);
       this.swipeElement.nativeElement.addEventListener('pointerup', this.handleGestureEnd.bind(this), true);
       this.swipeElement.nativeElement.addEventListener('pointercancel', this.handleGestureEnd.bind(this), true);*/
    } else {
      // Add Touch Listener
      this.renderer.listen(this.swipeElement.nativeElement, 'touchstart', (event) => this.handleGestureStart(event));
      this.renderer.listen(this.swipeElement.nativeElement, 'touchmove', (event) => this.handleGestureMove(event));
      this.renderer.listen(this.swipeElement.nativeElement, 'touchend', (event) => this.handleGestureEnd(event));
      this.renderer.listen(this.swipeElement.nativeElement, 'touchcancel', (event) => this.handleGestureEnd(event));
      /*this.swipeElement.nativeElement.addEventListener('touchstart', this.handleGestureStart.bind(this), true);
      this.swipeElement.nativeElement.addEventListener('touchmove', this.handleGestureMove.bind(this), true);
      this.swipeElement.nativeElement.addEventListener('touchend', this.handleGestureEnd.bind(this), true);
      this.swipeElement.nativeElement.addEventListener('touchcancel', this.handleGestureEnd.bind(this), true);*/

      // Add Mouse Listener
      this.renderer.listen(this.swipeElement.nativeElement, 'mousedown', (event) => this.handleGestureStart(event));

    }
    /* // [END addlisteners] */
  }

  /*Swipe gestures source: https://github.com/google/WebFundamentals/blob/master/src/content/en/fundamentals/design-and-ux/input/touch/_code/touch-demo-1.html#L179*/
  @HostListener('window:resize', ['$event'])
  public resize(event: Event) {
    this.updateSwipeItemWidth();
  }

  private updateSwipeItemWidth() {
    if (this.swipeElement) {
      this.itemWidth = this.swipeElement.nativeElement.clientWidth;
      this.slopValue = this.itemWidth * (1 / 4);
    }
  }


  // Handle the start of gestures
  public handleGestureStart(event: MouseEvent | TouchEvent | PointerEvent) {
    event.preventDefault();
    console.log('handle gesture start');

    if (event instanceof TouchEvent && event.touches && event.touches.length > 1) {
      return;
    }

    // Add the move and end listeners
    if (event instanceof PointerEvent) {
      (event.target as Element).setPointerCapture(event.pointerId);
    } else {
      // Add Mouse Listeners

      document.addEventListener('mousemove', this.handleGestureMove.bind(this), true);
      document.addEventListener('mouseup', this.handleGestureEnd.bind(this), true);
    }

    this.initialTouchPos = this.getGesturePointFromEvent(event);
    // swipeFrontElement.style.transition = 'initial';
    this.transition = 'initial';
  }

  // Handle end gestures
  public handleGestureEnd(event: MouseEvent | TouchEvent | PointerEvent) {
    event.preventDefault();

    if (event instanceof TouchEvent && event.touches && event.touches.length > 0) {
      return;
    }

    this.rafPending = false;

    // Remove Event Listeners
    if (event instanceof PointerEvent) {
      (event.target as Element).releasePointerCapture(event.pointerId);
    } else {
      // Remove Mouse Listeners
      document.removeEventListener('mousemove', this.handleGestureMove.bind(this), true);
      document.removeEventListener('mouseup', this.handleGestureEnd.bind(this), true);
    }

    this.updateSwipeRestPosition();

    this.initialTouchPos = null;
  }

  public updateSwipeRestPosition() {
    const differenceInX = this.initialTouchPos.x - this.lastTouchPos.x;
    this.currentXPosition = this.currentXPosition - differenceInX;

    // Go to the default state and change
    let newState = SwipeState.STATE_DEFAULT;

    // Check if we need to change state to left or right based on slop value
    if (Math.abs(differenceInX) > this.slopValue) {
      if (this.currentState === SwipeState.STATE_DEFAULT) {
        if (differenceInX > 0) {
          newState = SwipeState.STATE_LEFT_SIDE;
        } else {
          newState = SwipeState.STATE_RIGHT_SIDE;
        }
      } else {
        if (this.currentState === SwipeState.STATE_LEFT_SIDE && differenceInX > 0) {
          newState = SwipeState.STATE_DEFAULT;
        } else if (this.currentState === SwipeState.STATE_RIGHT_SIDE && differenceInX < 0) {
          newState = SwipeState.STATE_DEFAULT;
        }
      }
    } else {
      newState = this.currentState;
    }

    this.changeState(newState);

    // swipeFrontElement.style.transition = 'all 150ms ease-out';
    this.transition = 'all 150ms ease-out';
  }

  private changeState(newState: SwipeState) {
    switch (newState) {
      case SwipeState.STATE_DEFAULT:
        this.currentXPosition = 0;
        break;
      case SwipeState.STATE_LEFT_SIDE:
        console.log('state: left side');
        if (this.bookService.hasNextPage()) {
          this.nextPage();
          //this.currentXPosition = -(this.itemWidth - this.handleSize);
        }
        newState = SwipeState.STATE_DEFAULT;
        this.changeState(newState);


        // this.currentXPosition = -(this.itemWidth - this.handleSize);
        break;
      case SwipeState.STATE_RIGHT_SIDE:
        console.log('state: right side');
        if (this.bookService.hasPreviousPage()) {
          this.previousPage();
          //this.currentXPosition = this.itemWidth - this.handleSize;
        }

        newState = SwipeState.STATE_DEFAULT;
        this.changeState(newState);

        break;
    }

    this.transformStyle = 'translateX(' + this.currentXPosition + 'px)';

    /*swipeFrontElement.style.msTransform = transformStyle;
    swipeFrontElement.style.MozTransform = transformStyle;
    swipeFrontElement.style.webkitTransform = transformStyle;
    swipeFrontElement.style.transform = transformStyle;
*/
    this.currentState = newState;
  }

  public getGesturePointFromEvent(event: MouseEvent | TouchEvent | PointerEvent): IPoint {
    const point = new Point(0, 0);

    if (event instanceof TouchEvent) {
      // Prefer Touch Events
      point.x = event.targetTouches[0].clientX;
      point.y = event.targetTouches[0].clientY;
    } else {
      // Either Mouse event or Pointer Event
      point.x = event.clientX;
      point.y = event.clientY;
    }

    return point;
  }



  public handleGestureMove(event: MouseEvent | TouchEvent | PointerEvent) {
    event.preventDefault();
    if (!this.initialTouchPos) {
      return;
    }

    this.lastTouchPos = this.getGesturePointFromEvent(event);

    if (this.rafPending) {
      return;
    }

    this.rafPending = true;

    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(this.onAnimFrame.bind(this));
    } else if (window.webkitRequestAnimationFrame) {
      window.webkitRequestAnimationFrame(this.onAnimFrame.bind(this));
    } else {
      window.setTimeout(this.onAnimFrame.bind(this), 1000 / 60);
    }
  }

  public onAnimFrame() {
    if (!this.rafPending) {
      return;
    }

    const differenceInX = this.initialTouchPos.x - this.lastTouchPos.x;

    const newXTransform = (this.currentXPosition - differenceInX) + 'px';
    this.transformStyle = 'translateX(' + newXTransform + ')';
    /*swipeFrontElement.style.webkitTransform = transformStyle;
    swipeFrontElement.style.MozTransform = transformStyle;
    swipeFrontElement.style.msTransform = transformStyle;
    swipeFrontElement.style.transform = transformStyle;*/

    this.rafPending = false;
  }



}


enum SwipeState {
  STATE_DEFAULT,
  STATE_LEFT_SIDE,
  STATE_RIGHT_SIDE,
}
