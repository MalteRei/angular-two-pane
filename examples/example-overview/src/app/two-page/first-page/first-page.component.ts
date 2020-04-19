import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import { BookService } from '../book.service';
import { IPoint } from '../models/IPoint';
import { Point } from '../models/Point';
import { IPage } from '../models/IPage';
import { trigger, transition, style, animate, keyframes, state, AnimationFactory, AnimationBuilder, query, stagger, group } from '@angular/animations';

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
    trigger('pagesTrigger', [
      transition(':increment', [
        group([
          animate('500ms 1s cubic-bezier(0.8, 0, 0.2, 1)',
              style({ transform: 'translateX(-100%)'})
          ),
          query(':enter', [
            style({transform: 'scale(0.9)'}),
            animate('500ms 1.5s cubic-bezier(0.8, 0, 0.2, 1)', style({transform: 'scale(1)'}))

          ], { optional: true }),
          query(':leave', [
            animate('500ms cubic-bezier(0.8, 0, 0.2, 1)', style({transform: 'scale(0.9)'})),
          ], { optional: true })
        ])

      ]),
      transition(':decrement', [
        group([
          animate('500ms 1s cubic-bezier(0.8, 0, 0.2, 1)',
              style({ transform: 'translateX(100%)'})
          ),
          query(':enter', [
            style({transform: 'scale(0.9) translateX(-220%)'}),
            
          ], { optional: true }),
          query(':leave', [
            animate('500ms cubic-bezier(0.8, 0, 0.2, 1)', style({transform: 'scale(0.9)'})),
          ], { optional: true })
        ])
      ]),
    ])
  ]
})
export class FirstPageComponent implements OnInit {



  public currentPages: IPage[] = [this.bookService.currentPage()];


  constructor(private bookService: BookService) { }

  ngOnInit(): void {

  }

  onAnimationEvent(event: AnimationEvent) {
    console.log('animation');
    console.dir(event);
  }

  public pageState(index: number) {
    if (index === this.bookService.currentPageIndex) {
      return 'current';
    } else if (index < this.bookService.currentPageIndex) {
      return 'previous';
    } else {
      return 'next';
    }
  }

  public next() {
    this.currentPages.pop();
    this.currentPages.push(this.bookService.currentPage());
  }

  public previous() {
    this.currentPages.unshift(this.bookService.currentPage());

    this.currentPages.pop();
    console.dir(this.currentPages);
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

  public currentPageIndex() {
    return this.bookService.currentPageIndex;
  }





}



