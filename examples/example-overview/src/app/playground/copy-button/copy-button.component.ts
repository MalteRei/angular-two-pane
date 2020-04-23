import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: [
    './copy-button.component.css'
  ],
  animations: [
    trigger('copyState', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.5s ease-in-out')
      ])
    ])

  ]
})
export class CopyButtonComponent implements OnInit {

  private IsCopied = false;
  @Input() public valueToCopy = '';

  constructor() { }

  ngOnInit(): void {
  }

  public get isCopied(): boolean {
    return this.IsCopied;
  }

  public successCopied(event: Event) {
    if (!this.IsCopied) {
      this.IsCopied = true;
      setTimeout(() => {
        this.IsCopied = false;
      }, 2000);
    }

  }

}
