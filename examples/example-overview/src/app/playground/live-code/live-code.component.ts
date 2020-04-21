import { Component, OnInit } from '@angular/core';
import { ControlService } from '../services/control.service';
import { SpanningMode } from 'duo-pane-library';



@Component({
  selector: 'app-live-code',
  templateUrl: './live-code.component.html',
  styleUrls: [
    './live-code.component.css',
    // Add office ui fabric core for icons: https://developer.microsoft.com/en-us/fabric#/styles/web/icons
    '../../../../node_modules/office-ui-fabric-core/dist/css/fabric.min.css'
  ]
})
export class LiveCodeComponent implements OnInit {

  public liveCodeValue = "<ng-template [duoPane]              [secondaryPane]=\"secondaryBlock\"              twoPaneMinWidthSingleSegment=" + this.twoPaneMinWidthSingleSegment + "              twoPaneMinHeightSingleSegment=" + this.twoPaneMinHeightSingleSegment + "              twoPaneSpanningModeSingleSegment=\"" + this.twoPaneSpanningModeSingleSegment + "\"              primaryPanePercentageSingleSegment=" + this.primaryPanePercentageSingleSegment + "              ensureSecondaryPaneVisible=\"" + this.ensureSecondaryPaneVisible + "\">                  <!-- The component you want to display inside primary pane. -->          </ng-template>          <ng-template>              <!-- The component you want to display inside secondary pane. (🐱‍👤) -->          </ng-template>";

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
    return this.controlService.twoPaneSpanningModeSingleSegment;
  }
}
