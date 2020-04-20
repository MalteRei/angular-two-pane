import { Component, OnInit } from '@angular/core';
import { ControlService } from '../services/control.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor(private controlService: ControlService) { }

  ngOnInit(): void {
  }

  public get primaryPanePercentageSingleSegment(): number {
    return this.controlService.primaryPanePercentageSingleSegment;
  }

}
