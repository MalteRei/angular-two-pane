import { Component, OnInit } from '@angular/core';
import { ControlService } from '../services/control.service';


@Component({
  selector: 'app-secondary-playground-ninja-cat',
  templateUrl: './secondary-playground-ninja-cat.component.html',
  styleUrls: ['./secondary-playground-ninja-cat.component.css']
})
export class SecondaryPlaygroundNinjaCatComponent implements OnInit {

  constructor(private controlService: ControlService) { }

  ngOnInit(): void {
  }

  public get ensureSecondaryPaneVisible(): boolean {
    return this.controlService.ensureSecondaryPaneVisible;
  }
  public set ensureSecondaryPaneVisible(value: boolean) {
    this.controlService.ensureSecondaryPaneVisible = value;
  }

  public toggleEnsureSecondaryPaneVisible(): void {
    this.ensureSecondaryPaneVisible = !this.ensureSecondaryPaneVisible;
  }

}
