import { Injectable } from '@angular/core';
import { AppPattern } from './models/AppPattern';
import { IAppPattern } from './models/IAppPattern';
import { Icons } from './models/Icons';

@Injectable({
  providedIn: 'root'
})
export class AppPatternsService {

  private readonly playground = new AppPattern('Playground', ['There is no better way than learning by doing. With this example we want you to understand the available options to customize duo pane. This also provides you code you can literally copy & paste into your application.'], new URL('https://docs.microsoft.com/en-us/dual-screen/images/hero-devices.png'), '/playground', undefined);

  private readonly masterDetailPattern = new AppPattern('Master - detail', ['Hey, is this pattern familiar to you? You have been looking at it the entire time. Master-detail is found across a wide range of applications. You should definitely look at your application to see if you can spot it.','The master-detail pattern has a master pane (usually with a list view) and a details pane for content. When an item in the master list is selected, the details pane is updated. This pattern is naturally good for when you have a wider viewing area. It is frequently used for email and address books.',
    'Taking advantage of the two distinct screens and snapping to the natural boundary, you could use one screen to show the \'items\' list and the other to show details of the selected item.'], new URL('https://docs.microsoft.com/en-us/dual-screen/images/master-detail.png'), undefined, Icons.MasterDetail);

  private readonly twoPagePattern = new AppPattern('Two Page', ['Some apps naturally tend to a book-like paging experience. You can use the natural boundary to show several items from a collection—like pages or pictures—which otherwise might have required the user to view one at a time.', 'Depending on your app, you could decide to paginate per 2 pages or advance one page at a time.', 'Keep in mind that the book example is not a complete eReader. It could be improved on by showing only as much text as fits on one page.'], new URL('https://docs.microsoft.com/en-us/dual-screen/images/two-page-1.png'), '/book', Icons.TwoPage);

  private AppPatterns = [this.playground, this.masterDetailPattern, this.twoPagePattern];

  private SelectedAppPattern: IAppPattern = this.AppPatterns[0];
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
