import { Component, OnInit } from '@angular/core';
import { AppPatternsService } from '../app-patterns.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private appPatternService: AppPatternsService) { }

  ngOnInit(): void {
  }

  public getSelectedPattern() {
    console.dir(this.appPatternService.selectedAppPattern);
    return this.appPatternService.selectedAppPattern;
  }

  public closeDetail() {
    this.appPatternService.selectedAppPattern = undefined;
  }

}
