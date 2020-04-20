import { Component, OnInit } from '@angular/core';
import { ControlService } from '../services/control.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(private controlService: ControlService) { }

  ngOnInit(): void {
    
  }

  public get primaryPanePercentageSingleSegment(): number {
    return this.controlService.primaryPanePercentageSingleSegment;
  }
  public set primaryPanePercentageSingleSegment(value: number) {
      this.controlService.primaryPanePercentageSingleSegment = value;
  }

}
