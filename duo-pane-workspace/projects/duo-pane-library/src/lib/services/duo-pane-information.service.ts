import { Injectable } from '@angular/core';
import { SpanningMode } from '../models/SpanningMode';
import { ISegment } from '../models/ISegment';
import { Segment } from '../models/Segment';

@Injectable({
  providedIn: 'root'
})
export class DuoPaneInformationService {

  public static readonly ns = '__foldables__';
  private Spanning: SpanningMode = SpanningMode.None;
  private FoldSize = 0;
  private BrowserShellSize = 0;
  private Segments: ISegment[] = null;
  private needsDispatch = false;
  private eventTarget: DocumentFragment;


  constructor() {

    this.Spanning = sessionStorage.getItem(`${DuoPaneInformationService.ns}-spanning`) as SpanningMode || SpanningMode.None;
    this.FoldSize = +sessionStorage.getItem(`${DuoPaneInformationService.ns}-fold-size`) || 0;
    this.BrowserShellSize = +sessionStorage.getItem(`${DuoPaneInformationService.ns}-browser-shell-size`) || 0;

    this.eventTarget = document.createDocumentFragment();

    // Web-based emulator runs this polyfill in an iframe, we need to
    // communicate emulator state changes to the site.
    // Should only be registered once (in CSS or JS polyfill, not both).
    window.addEventListener('message', ev => {
      if (ev.data.action === 'update') {
        Object.assign(this, ev.data.value);
      }
    });
    window.addEventListener('resize', () => this.debounce(this.invalidate(), 200));

  }


  public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
    this.eventTarget.addEventListener(type, listener, options);
  }

  public removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
    this.eventTarget.removeEventListener(type, callback, options);
  }



  public dispatchEvent(event: Event): boolean {
    if (event.type !== 'change') {
      return;
    }
    const methodName = `on${event.type}`;
    if (typeof this[methodName] === 'function') {
      this[methodName](event);
    }
    return this.eventTarget.dispatchEvent(event);
  }

  public get foldSize(): number {
    return this.FoldSize;
  }

  public set foldSize(foldSize: number) {
    sessionStorage.setItem(`${DuoPaneInformationService.ns}-fold-size`, foldSize.toString());
    this.FoldSize = foldSize;
    this.invalidate();

  }

  public get browserShellSize(): number {
    return this.BrowserShellSize;
  }

  public set browserShellSize(browserShellSize: number) {
    sessionStorage.setItem(`${DuoPaneInformationService.ns}-browser-shell-size`, browserShellSize.toString());
    this.BrowserShellSize = browserShellSize;
    this.invalidate();
  }

  public get spanning(): SpanningMode {
    return this.Spanning;
  }

  public set spanning(spanning: SpanningMode) {
    sessionStorage.setItem(`${DuoPaneInformationService.ns}-spanning`, spanning);
    this.Spanning = spanning;
    this.invalidate();
  }


  public set segments(segments: ISegment[]) {
    this.Segments = segments;
  }

  public getTwoLargestSegments(): ISegment[] {
    const segments = this.windowSegments;
    if (segments.length > 2) {
      const twoLargestSegments = [null, null];
      let largestSize = 0;
      for (const segment of segments) {
        const segmentSize = segment.height * segment.width;
        if (segmentSize >= largestSize) {
          largestSize = segmentSize;
          twoLargestSegments[0] = twoLargestSegments[1];
          twoLargestSegments[1] = segment;
        }
      }
      return twoLargestSegments;
    } else {
      return segments;
    }
  }

  public get windowSegments(): ISegment[] {
    // TODO: replace with window.getWindowSegments() once it is a web standard
    if (this.Segments !== null && this.Segments.length > 0) {
      return this.Segments;
    }
    if (this.spanning === SpanningMode.None) {
      return [
        new Segment(window.innerWidth, window.innerHeight, 0, 0)
      ];
    }
    if (this.spanning === SpanningMode.SingleFoldHorizontal) {
      const screenCenter = (window.innerHeight - this.browserShellSize) / 2;
      const width = window.innerWidth;
      return [
        new Segment(width, screenCenter - this.foldSize / 2, 0, 0),
        new Segment(width, this.foldSize, screenCenter - this.foldSize / 2, 0),
        new Segment(width, window.innerHeight, screenCenter + this.foldSize / 2, 0)
      ];
    }
    if (this.spanning === SpanningMode.SingleFoldVertical) {
      const width = window.innerWidth / 2 - this.foldSize / 2;
      const height = window.innerHeight;
      return [
        new Segment(width, height, 0, 0),
        new Segment(this.foldSize, height, 0, width),
        new Segment(width, height, 0, window.innerWidth / 2 + this.foldSize / 2)
      ];
    }
  }


  /**
   * Returns a function that won't call `fn` if it was invoked at a
   * faster interval than `wait`.
   */
  public debounce(fn: any, wait: number) {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        fn.apply(this, arguments);
      }, wait);
    };
  }
  public async invalidate() {
    if (!this.needsDispatch) {
      this.needsDispatch = true;
      this.needsDispatch = await Promise.resolve(false);
      this.dispatchEvent(new Event('change'));
    }
  }

}
