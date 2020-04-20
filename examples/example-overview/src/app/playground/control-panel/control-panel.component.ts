import { Component, OnInit } from '@angular/core';
import { ControlService } from '../services/control.service';
import { SpanningMode } from 'duo-pane-library';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: [
    './control-panel.component.css',
    // Add office ui fabric core for icons: https://developer.microsoft.com/en-us/fabric#/styles/web/icons
    '../../../../node_modules/office-ui-fabric-core/dist/css/fabric.min.css'
  ]
})
export class ControlPanelComponent implements OnInit {

  public spanningModeOptions = ['single-fold-horizontal', 'single-fold-vertical', 'none'];

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
    console.dir(value);
    this.controlService.twoPaneSpanningModeSingleSegment = value;

  }

  public logSuccess(e: any){
    console.log('success');
  }

  public logError(e: any){
    console.log('error');
  }
}
