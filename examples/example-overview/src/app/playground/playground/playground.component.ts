import { Component, OnInit } from '@angular/core';
import { ControlService } from '../services/control.service';
import { SpanningMode } from 'angular-duo-pane';


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

  public get twoPaneMinWidthSingleSegment(): number {
    return this.controlService.twoPaneMinWidthSingleSegment;
  }

  public get twoPaneMinHeightSingleSegment(): number {
    return this.controlService.twoPaneMinHeightSingleSegment;

  }

  public get ensureSecondaryPaneVisible(): boolean {
    return this.controlService.ensureSecondaryPaneVisible;
  }


  public get twoPaneSpanningModeSingleSegment(): SpanningMode {
    console.dir(this.controlService.twoPaneSpanningModeSingleSegment);
    return this.controlService.twoPaneSpanningModeSingleSegment;
  }
}
