import { Injectable } from '@angular/core';
import { DuoPaneProperties } from '../models/DuoPaneProperties';
import { SpanningMode } from 'angular-duo-pane';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private currentDuoPaneProperties = new DuoPaneProperties(50, false, 0, 0, 'none');

  constructor() { }

  public get primaryPanePercentageSingleSegment(): number {
    return this.currentDuoPaneProperties.primaryPanePercentageSingleSegment;
  }
  public set primaryPanePercentageSingleSegment(value: number) {
    this.currentDuoPaneProperties.primaryPanePercentageSingleSegment = value;
  }

  public get twoPaneMinWidthSingleSegment(): number {
    return this.currentDuoPaneProperties.twoPaneMinWidthSingleSegment;
  }
  public set twoPaneMinWidthSingleSegment(value: number) {
    this.currentDuoPaneProperties.twoPaneMinWidthSingleSegment = value;
  }

  public get twoPaneMinHeightSingleSegment(): number {
    return this.currentDuoPaneProperties.twoPaneMinHeightSingleSegment;
  }
  public set twoPaneMinHeightSingleSegment(value: number) {
    this.currentDuoPaneProperties.twoPaneMinHeightSingleSegment = value;
  }

  public get ensureSecondaryPaneVisible(): boolean {
    return this.currentDuoPaneProperties.ensureSecondaryPaneVisible;
  }
  public set ensureSecondaryPaneVisible(value: boolean) {
    this.currentDuoPaneProperties.ensureSecondaryPaneVisible = value;
  }


  public get twoPaneSpanningModeSingleSegment(): SpanningMode {
    return this.currentDuoPaneProperties.twoPaneSpanningModeSingleSegment;
  }
  public set twoPaneSpanningModeSingleSegment(value: SpanningMode) {
    console.dir(value);
    this.currentDuoPaneProperties.twoPaneSpanningModeSingleSegment = value;
    console.dir(this.currentDuoPaneProperties.twoPaneSpanningModeSingleSegment);
  }
}
