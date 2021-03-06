import { Component, OnInit } from '@angular/core';
import { ControlService } from '../services/control.service';
import { SpanningMode } from 'angular-duo-pane';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: [
    './control-panel.component.css'
  ]
})
export class ControlPanelComponent implements OnInit {

  public readonly spanningModeOptions = ['single-fold-horizontal', 'single-fold-vertical', 'none'];


  constructor(private controlService: ControlService) { }

  ngOnInit(): void {

  }

  public get primaryPanePercentageSingleSegment(): number {
    return this.controlService.primaryPanePercentageSingleSegment;
  }
  public set primaryPanePercentageSingleSegment(value: number) {
    this.controlService.primaryPanePercentageSingleSegment = value;
  }

  public get twoPaneMinWidthSingleSegment(): number {
    return this.controlService.twoPaneMinWidthSingleSegment;
  }
  public set twoPaneMinWidthSingleSegment(value: number) {
    this.controlService.twoPaneMinWidthSingleSegment = value;
  }


  public get twoPaneMinHeightSingleSegment(): number {
    return this.controlService.twoPaneMinHeightSingleSegment;
  }
  public set twoPaneMinHeightSingleSegment(value: number) {
    this.controlService.twoPaneMinHeightSingleSegment = value;
  }

  public get ensureSecondaryPaneVisible(): boolean {
    return this.controlService.ensureSecondaryPaneVisible;
  }
  public set ensureSecondaryPaneVisible(value: boolean) {
    this.controlService.ensureSecondaryPaneVisible = value;
  }

  public toggleEnsureSecondaryPaneVisible(): void {
    this.ensureSecondaryPaneVisible = !this.ensureSecondaryPaneVisible;
  }

  public get twoPaneSpanningModeSingleSegment(): SpanningMode {
    return this.controlService.twoPaneSpanningModeSingleSegment;
  }
  public set twoPaneSpanningModeSingleSegment(value: SpanningMode) {
    this.controlService.twoPaneSpanningModeSingleSegment = value;

  }
}
