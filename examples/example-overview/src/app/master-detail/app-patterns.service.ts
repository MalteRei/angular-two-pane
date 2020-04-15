import { Injectable } from '@angular/core';
import { AppPattern } from './models/AppPattern';
import { IAppPattern } from './models/IAppPattern';

@Injectable({
  providedIn: 'root'
})
export class AppPatternsService {

  private AppPatterns = [new AppPattern('Master - detail', ["The master-detail pattern has a master pane (usually with a list view) and a details pane for content. When an item in the master list is selected, the details pane is updated. This pattern is naturally good for when you have a wider viewing area. It is frequently used for email and address books.", 
   "Taking advantage of the two distinct screens and snapping to the natural boundary, you could use one screen to show the 'items' list and the other to show details of the selected item."], new URL("https://docs.microsoft.com/en-us/dual-screen/images/master-detail.png"), '/master')];

  private SelectedAppPattern: IAppPattern =  this.AppPatterns[0];
  public get selectedAppPattern(): IAppPattern {
    return this.SelectedAppPattern;
  }
  public set selectedAppPattern(value: IAppPattern) {
    this.SelectedAppPattern = value;
  }

  constructor() { }


  public get appPatterns() {
    return this.AppPatterns;
  }
}
