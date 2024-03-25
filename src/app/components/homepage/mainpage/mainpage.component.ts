import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { FeederchartComponent } from './feederchart/feederchart.component';
import { MapchartComponent } from './mapchart/mapchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    CardComponent,
    FeederchartComponent,
    MapchartComponent,
    LinechartComponent,
    BarchartComponent,
  ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css',
})
export class MainpageComponent {
  zone = 'All';
  circle = 'All';
  division = 'All';
  subDivision = 'All';
  subStation = 'All';
}
