import { Component, OnInit } from '@angular/core';
import { AppPatternsService } from '../app-patterns.service';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {

  constructor(private appPatternsService: AppPatternsService) { }

  ngOnInit(): void {
  }

  public ensureDetailPaneVisible() {
    return this.appPatternsService.selectedAppPattern != null && this.appPatternsService != undefined;
  }

}
