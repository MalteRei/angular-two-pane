import { AfterViewInit, ChangeDetectorRef, Component, EmbeddedViewRef, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ISegment, Segment } from '../../services/duo-pane-information.service';

@Component({
  selector: 'duo-pane',
  templateUrl: './duo-pane.component.html',
  styleUrls: ['./duo-pane.component.css']
})
export class DuoPaneComponent implements AfterViewInit {

  @ViewChild('viewContainer', {read: ViewContainerRef, static: true}) viewContainerRef: ViewContainerRef;

  private embeddedViewRef: EmbeddedViewRef<any> = null;

  private Segment: ISegment = new Segment(0, 0, 0, 0);
  public get segment(): ISegment {
    return this.Segment;
  }
  @Input() public set segment(value: ISegment) {
    this.Segment = value;
  }

  private ContentTemplateRef: TemplateRef<any> = undefined;
  public get contentTemplateRef(): TemplateRef<any> {
    return this.ContentTemplateRef;
  }
  @Input() public set contentTemplateRef(value: TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.ContentTemplateRef = value;
      this.renderView();
    }

  }
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.renderView();
  }

  private renderView() {
    if (this.ContentTemplateRef && this.viewContainerRef) {
      if (this.embeddedViewRef) {
        this.embeddedViewRef.destroy();
      }
      this.viewContainerRef.clear();
      this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.ContentTemplateRef);
      this.changeDetectorRef.detectChanges();
    }
  }

}
