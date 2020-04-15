import { Component, OnInit } from '@angular/core';
import { AppPatternsService } from '../app-patterns.service';
import { IAppPattern } from '../models/IAppPattern';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private appPatternsService: AppPatternsService) { }

  ngOnInit(): void {
  }

  public listAppPatterns() {
    return this.appPatternsService.appPatterns;
  }

  public selectPattern(selectedPattern: IAppPattern) {
    console.dir(selectedPattern);
    this.appPatternsService.selectedAppPattern = selectedPattern;
  }

  public get selectedPattern() {
    return this.appPatternsService.selectedAppPattern;
  }

}
