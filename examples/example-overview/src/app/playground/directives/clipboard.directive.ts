// Import the core angular services.
import { Directive, HostListener, EventEmitter, Input, Output } from '@angular/core';

// Import the application components and services.
import { ClipboardService } from '../services/clipboard.service';

// This directive acts as a simple glue layer between the given [clipboard] property
// and the underlying ClipboardService. Upon the (click) event, the [clipboard] value
// will be copied to the ClipboardService and a (clipboardCopy) event will be emitted.
@Directive({
  selector: '[appClipboard]'
})
/*
* @author https://www.bennadel.com/blog/3235-creating-a-simple-copy-to-clipboard-directive-in-angular-2-4-9.htm
*/
export class ClipboardDirective {

  @Output() public copyEvent: EventEmitter<string>;
  @Output() public errorEvent: EventEmitter<Error>;
  @Input() public clipboardValue: string;

  private clipboardService: ClipboardService;


  // I initialize the clipboard directive.
  constructor(clipboardService: ClipboardService) {

    this.clipboardService = clipboardService;
    this.copyEvent = new EventEmitter();
    this.errorEvent = new EventEmitter();
    this.clipboardValue = '';

  }


  // ---
  // PUBLIC METODS.
  // ---


  // I copy the value-input to the Clipboard. Emits success or error event.
  @HostListener('click') public copyToClipboard(): void {

    this.clipboardService
      .copy(this.clipboardValue)
      .then(
        (value: string): void => {
          console.log('success');
          this.copyEvent.emit(value);

        }
      )
      .catch(
        (error: Error): void => {
          console.log('error');

          this.errorEvent.emit(error);

        }
      )
      ;

  }

}
