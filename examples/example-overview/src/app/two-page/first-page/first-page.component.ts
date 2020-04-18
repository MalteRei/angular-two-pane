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
    ])
  ]
})
export class FirstPageComponent implements OnInit {






  constructor(private bookService: BookService) { }

  ngOnInit(): void {

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

  public pages() {
    return this.bookService.book.pages;
  }
  public paragraphsToDisplay() {
    return this.bookService.currentPage().paragraphs;
  }

  public titleToDisplay(): string | undefined {
    return this.bookService.currentPage().title;
  }





}



