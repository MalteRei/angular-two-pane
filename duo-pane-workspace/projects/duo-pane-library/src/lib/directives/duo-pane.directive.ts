import { ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { DuoPaneComponent } from '../components/duo-pane/duo-pane.component';
import { DuoPaneInformationService } from '../services/duo-pane-information.service';
import { SpanningMode } from '../models/SpanningMode';
import { ISegment } from '../models/ISegment';
import { Segment } from '../models/Segment';

@Directive({
  selector: '[duoPane]'
})
export class DuoPaneDirective {

  private secondaryPaneTemplateRef: TemplateRef<any> = null;
  private EnsureSecondaryPaneVisible = false;

  /* Variables set to control two pane if only one window segment is available-*/
  private TwoPaneMinWidthSingleSegment = 0;
  private TwoPaneMinHeightSingleSegment = 0;
  private TwoPaneSpanningModeSingleSegment = 'none';
  private PrimaryPanePercentageSingleSegment = 50;
  public get primaryPanePercentageSingleSegment() {
    return this.PrimaryPanePercentageSingleSegment;
  }
  @Input() public set primaryPanePercentageSingleSegment(value: number) {
    if (typeof value === 'string') {
      const fractionValue = Number(value);
      if (!isNaN(fractionValue) && fractionValue >= 0 && fractionValue <= 100) {
        this.PrimaryPanePercentageSingleSegment = fractionValue;
        this.updateView();

      }

    } else if (typeof value === 'number') {
      if (value >= 0 && value <= 100) {
        this.PrimaryPanePercentageSingleSegment = value;
        this.updateView();

      }
    }
  }
  private readonly paneFactory = this.componentfactoryResolver.resolveComponentFactory(DuoPaneComponent);
  private primaryPaneRef: ComponentRef<DuoPaneComponent> = null;
  private secondaryPaneRef: ComponentRef<DuoPaneComponent> = null;


  constructor(
    private componentfactoryResolver: ComponentFactoryResolver,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private dualScreenInformationService: DuoPaneInformationService) {
    dualScreenInformationService.addEventListener('change', () => {
      this.updateView();
    });

    this.updateView();

  }

  @Output() public secondaryPaneVisibilityHandler = new EventEmitter<boolean>();



  private secondaryPaneVisible: boolean = undefined;



  @Input() set secondaryPane(secondaryPane: TemplateRef<any>) {
    this.secondaryPaneTemplateRef = secondaryPane;
    this.destroySecondaryPaneRef();
    this.updateView();
  }

  private destroySecondaryPaneRef() {
    if (this.secondaryPaneRef) {
      const secondaryPaneIndex = this.viewContainer.indexOf(this.secondaryPaneRef.hostView);
      if (secondaryPaneIndex >= 0) {
        this.viewContainer.remove(secondaryPaneIndex);
      }
      this.secondaryPaneRef.destroy();
      this.secondaryPaneRef = null;
    }
  }

  private destroyPrimaryPaneRef() {
    if (this.primaryPaneRef) {
      const primaryPaneIndex = this.viewContainer.indexOf(this.primaryPaneRef.hostView);
      if (primaryPaneIndex >= 0) {
        this.viewContainer.remove(primaryPaneIndex);
      }
      this.primaryPaneRef.destroy();
      this.primaryPaneRef = null;
    }
  }

  @Input() set ensureSecondaryPaneVisible(value: boolean) {
    this.EnsureSecondaryPaneVisible = value;
    this.updateView();
  }

  @Input() set twoPaneMinWidthSingleSegment(minWidth: number) {
    if (typeof minWidth === 'string') {
      const minWidthValue = Number(minWidth);
      if (minWidthValue >= 0 && !isNaN(minWidthValue)) {
        this.TwoPaneMinWidthSingleSegment = minWidthValue;
        this.updateView();

      }
    } else if (typeof minWidth === 'number' && minWidth >= 0) {
      this.TwoPaneMinWidthSingleSegment = minWidth;
      this.updateView();
    }

  }

  @Input() set twoPaneMinHeightSingleSegment(minHeight: number) {
    if (typeof minHeight === 'string') {
      const minHeightValue = Number(minHeight);
      if (minHeightValue >= 0 && !isNaN(minHeightValue)) {
        this.TwoPaneMinHeightSingleSegment = minHeightValue;
        this.updateView();

      }
    } else if (typeof minHeight === 'number' && minHeight >= 0) {
      this.TwoPaneMinHeightSingleSegment = minHeight;
      this.updateView();
    }
  }



  @Input() set twoPaneSpanningModeSingleSegment(spanningMode: SpanningMode) {
    if (spanningMode) {
      this.TwoPaneSpanningModeSingleSegment = spanningMode;
      this.updateView();
    }
  }

  private emitSecondaryPaneVisibility(visible: boolean) {
    if (this.secondaryPaneVisible === undefined || this.secondaryPaneVisible === null || visible !== this.secondaryPaneVisible) {
      this.secondaryPaneVisible = visible;
      this.secondaryPaneVisibilityHandler.emit(visible);
    }
  }



  private updateView() {

    /*this.viewContainer.createEmbeddedView(this.templateRef);
    if(this.secondaryPaneTemplateRef != null) {
        this.viewContainer.createEmbeddedView(this.secondaryPaneTemplateRef);
    }*/
    const windowSegements = this.dualScreenInformationService.windowSegments;
    if (windowSegements.length > 0) {
      if (windowSegements.length > 1) {

        this.renderDualPanes(this.dualScreenInformationService.getTwoLargestSegments());

      } else if (windowSegements[0].height >= this.TwoPaneMinHeightSingleSegment
        && windowSegements[0].width >= this.TwoPaneMinWidthSingleSegment
        && this.TwoPaneSpanningModeSingleSegment !== 'none') {
        this.renderBothPanes(windowSegements[0]);
      } else {
        if (this.EnsureSecondaryPaneVisible) {
          this.destroyPrimaryPaneRef();
          this.renderSecondaryPane(windowSegements[0]);
        } else {

          this.destroySecondaryPaneRef();
          this.renderPrimaryPane(windowSegements[0]);
          this.emitSecondaryPaneVisibility(false);
        }
      }
    }

  }

  private renderBothPanes(windowSegment: ISegment) {
    let primarySegment: ISegment;
    let secondarySegment: ISegment;
    if (this.TwoPaneSpanningModeSingleSegment === 'single-fold-horizontal') {
      const fraction = this.PrimaryPanePercentageSingleSegment / 100;
      primarySegment = new Segment(windowSegment.width, windowSegment.height * fraction, 0, 0);
      secondarySegment = new Segment(windowSegment.width, windowSegment.height * (1 - fraction), windowSegment.height * fraction, 0);
    } else if (this.TwoPaneSpanningModeSingleSegment === 'single-fold-vertical') {
      const fraction = this.PrimaryPanePercentageSingleSegment / 100;
      primarySegment = new Segment(windowSegment.width * fraction, windowSegment.height, 0, 0);
      secondarySegment = new Segment(windowSegment.width * (1 - fraction), windowSegment.height, 0, windowSegment.width * fraction);
    } else {
      return;
    }

    this.renderDualPanes([primarySegment, secondarySegment]);

  }

  private renderDualPanes(windowSegments: ISegment[]) {
    if (windowSegments.length > 0) {
      this.renderPrimaryPane(windowSegments[0]);
    }

    if (windowSegments.length > 1) {
      this.renderSecondaryPane(windowSegments[1]);
    }
  }

  private renderPrimaryPane(segment: ISegment) {
    // const paneFactory = this.componentfactoryResolver.resolveComponentFactory(PrimaryPaneComponent);
    if (!this.primaryPaneRef) {
      this.primaryPaneRef = this.viewContainer.createComponent(this.paneFactory);

    }

    this.primaryPaneRef.instance.segment = segment;
    this.primaryPaneRef.instance.contentTemplateRef = this.templateRef;

  }

  private renderSecondaryPane(segment: ISegment) {
    if (this.secondaryPaneTemplateRef !== null && this.secondaryPaneTemplateRef !== undefined) {
      // const paneFactory = this.componentfactoryResolver.resolveComponentFactory(PrimaryPaneComponent);
      if (!this.secondaryPaneRef) {
        this.secondaryPaneRef = this.viewContainer.createComponent(this.paneFactory);
      }
      this.secondaryPaneRef.instance.segment = segment;
      this.secondaryPaneRef.instance.contentTemplateRef = this.secondaryPaneTemplateRef;
      this.emitSecondaryPaneVisibility(true);
    }
  }



}
