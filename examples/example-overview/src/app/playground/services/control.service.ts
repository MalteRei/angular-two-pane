import { Injectable } from '@angular/core';
import { DuoPaneProperties } from '../models/DuoPaneProperties';
import {SpanningMode} from 'duo-pane-library';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private currentDuoPaneProperties = new DuoPaneProperties(50, false, 1000, 500, 'single-fold-vertical');

  constructor() { }

  public get primaryPanePercentageSingleSegment(): number {
    return this.currentDuoPaneProperties.primaryPanePercentageSingleSegment;
  }
  public set primaryPanePercentageSingleSegment(value: number) {
      this.currentDuoPaneProperties.primaryPanePercentageSingleSegment = value;
  }
}
