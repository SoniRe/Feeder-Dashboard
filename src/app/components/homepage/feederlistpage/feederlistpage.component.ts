import { Component } from '@angular/core';
import { PiechartComponent } from './piechart/piechart.component';
import { FeedertableComponent } from './feedertable/feedertable.component';

@Component({
  selector: 'app-feederlistpage',
  standalone: true,
  imports: [PiechartComponent, FeedertableComponent],
  templateUrl: './feederlistpage.component.html',
  styleUrl: './feederlistpage.component.css',
})
export class FeederlistpageComponent {}
