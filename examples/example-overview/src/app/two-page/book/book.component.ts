import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

  }

  public currentPageIndexFirst(){
    return this.bookService.currentPageIndex;
  }


  public currentPageIndexSecond(){
    return this.bookService.currentPageIndex + 1;
  }

  public disableNextPageButton() {
    return !this.bookService.hasNextPage();
  }

  public disablePreviousPageButton() {
    return !this.bookService.hasPreviousPage();
  }

  public nextPage() {
    if (!this.disableNextPageButton()){
      this.bookService.nextPage();

    }
  }

  public previousPage() {
    if(!this.disablePreviousPageButton()) {
      this.bookService.previousPage();
    }
  }
}
