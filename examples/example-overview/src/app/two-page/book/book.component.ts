import { Component, OnInit, ElementRef, ViewChild, HostListener, Renderer2, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { BookService } from '../book.service';
import { IPoint } from '../models/IPoint';
import { Point } from '../models/Point';
import { animate, AnimationFactory, AnimationBuilder, style, trigger, animation, keyframes, transition, useAnimation, state, sequence, query, group, animateChild } from '@angular/animations';
import { FirstPageComponent } from '../first-page/first-page.component';


export const pageSwipeAnimation = animation([
  animate('500ms 1s cubic-bezier(0.8, 0, 0.2, 1)',
    style({
      transform: 'translateX(-{{ pageIndex }}%)'
    })
  )
]);

export const pageZoomOutAnimation = animation([
  animate('5s 1s cubic-bezier(0.8, 0, 0.2, 1)',
    style({
      transform: 'scale(0.9)'
    })
  )
]);

export const pageZoomInAnimation = animation([
  animate('5s 1s cubic-bezier(0.8, 0, 0.2, 1)',
    style({
      transform: 'scale(1) translateX(-{{ pageIndex }}'
    })
  )
]);


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [
    trigger('pageChangeTrigger', [
      state('*', style({
        transform: `translateX(-{{ pageIndex }}%)`,

      }), { params: { pageIndex: 1 } }),
      transition(':increment', [
        group([
          useAnimation(pageSwipeAnimation),
          query('@pageTrigger', animateChild())
        ])
          
          
      ])
    ]

    )
  ]
})
export class BookComponent implements OnInit, AfterViewInit {


  //@ViewChild('firstPage') public swipeElement: ElementRef;

  @ViewChildren(FirstPageComponent, { read: ElementRef }) public pages: QueryList<ElementRef>;

  private rafPending = false;
  private initialTouchPos: IPoint = null;
  private lastTouchPos: IPoint = null;
  private currentState = SwipeState.STATE_DEFAULT;
  private slopValue = 0;


  constructor(private bookService: BookService, private renderer: Renderer2, private builder: AnimationBuilder) { }

  ngOnInit(): void {

  }

  public pageNumber() {
    return this.bookService.currentPageIndex;
  }

  public pageOffsetPercentage() {
    return this.pageNumber() * 100;
  }
  public disableNextPageButton() {
    return !this.bookService.hasNextPage();
  }

  public disablePreviousPageButton() {
    return !this.bookService.hasPreviousPage();
  }



  public nextPage() {

    this.bookService.nextPage();

    /* const myAnimation: AnimationFactory = this.builder.build([
       animate('500ms 1s cubic-bezier(0.8, 0, 0.2, 1)', style({ transform: `translateX(-${100 * this.bookService.currentPageIndex}%)` }))
     ]);
 
     let player;
     for (const page of this.pages) {
       player = myAnimation.create(page.nativeElement);
       player.play();
     }
 */

  }


  public previousPage() {
    this.bookService.previousPage();
    /* const myAnimation: AnimationFactory = this.builder.build([
       animate('500ms 1s cubic-bezier(0.8, 0, 0.2, 1)', style({ transform: `translateX(-${100 * this.bookService.currentPageIndex}%)` }))
     ]);
 
     let player;
     for (const page of this.pages) {
       player = myAnimation.create(page.nativeElement);
       player.play();
     }*/


  }



  ngAfterViewInit() {
    this.updateSwipeItemWidth();
    /* // [START addlisteners] */
    // Check if pointer events are supported.
    if (window.PointerEvent) {
      // Add Pointer Event Listener
      //TODO: destroy event listeners: https://stackoverflow.com/a/47106904 + add render listen for the other event listeners.
      for (const page of this.pages) {
        this.renderer.listen(page.nativeElement, 'pointerdown', (event) => this.handleGestureStart(event));
        this.renderer.listen(page.nativeElement, 'pointermove', (event) => this.handleGestureMove(event));
        this.renderer.listen(page.nativeElement, 'pointerup', (event) => this.handleGestureEnd(event));
        this.renderer.listen(page.nativeElement, 'pointercancel', (event) => this.handleGestureEnd(event));
      }


    } else {
      // Add Touch Listener
      for (const page of this.pages) {
        this.renderer.listen(page.nativeElement, 'touchstart', (event) => this.handleGestureStart(event));
        this.renderer.listen(page.nativeElement, 'touchmove', (event) => this.handleGestureMove(event));
        this.renderer.listen(page.nativeElement, 'touchend', (event) => this.handleGestureEnd(event));
        this.renderer.listen(page.nativeElement, 'touchcancel', (event) => this.handleGestureEnd(event));


        // Add Mouse Listener
        this.renderer.listen(page.nativeElement, 'mousedown', (event) => this.handleGestureStart(event));
      }


    }
    /* // [END addlisteners] */
  }

  /*Swipe gestures source: https://github.com/google/WebFundamentals/blob/master/src/content/en/fundamentals/design-and-ux/input/touch/_code/touch-demo-1.html#L179*/
  @HostListener('window:resize', ['$event'])
  public resize(event: Event) {
    this.updateSwipeItemWidth();
  }

  private updateSwipeItemWidth() {
    const firstPage = this.pages.first;
    if (firstPage) {
      this.slopValue = firstPage.nativeElement.clientWidth * (1 / 4);
    }

  }


  // Handle the start of gestures
  public handleGestureStart(event: MouseEvent | TouchEvent | PointerEvent) {
    event.preventDefault();

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

  }

  private changeState(newState: SwipeState) {
    switch (newState) {
      case SwipeState.STATE_DEFAULT:
        break;
      case SwipeState.STATE_LEFT_SIDE:
        console.log('state: left side');
        if (this.bookService.hasNextPage()) {
          this.nextPage();
        }
        newState = SwipeState.STATE_DEFAULT;
        this.changeState(newState);


        break;
      case SwipeState.STATE_RIGHT_SIDE:
        console.log('state: right side');
        if (this.bookService.hasPreviousPage()) {
          this.previousPage();
        }

        newState = SwipeState.STATE_DEFAULT;
        this.changeState(newState);

        break;
    }

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

  }


}


enum SwipeState {
  STATE_DEFAULT,
  STATE_LEFT_SIDE,
  STATE_RIGHT_SIDE,
}