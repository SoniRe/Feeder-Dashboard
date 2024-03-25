import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../homepage/header/header.component';
import { FeederlocationComponent } from './feederlocation/feederlocation.component';
import { AboutfeederComponent } from './aboutfeeder/aboutfeeder.component';
import { OutagechartsComponent } from './outagecharts/outagecharts.component';
import { EnergychartsComponent } from './energycharts/energycharts.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { OverviewComponent } from './overview/overview.component';

@Component({
  selector: 'app-feederpage',
  standalone: true,
  imports: [
    HeaderComponent,
    FeederlocationComponent,
    AboutfeederComponent,
    OverviewComponent,
    OutagechartsComponent,
    EnergychartsComponent,
    ContactdetailsComponent,
  ],
  templateUrl: './feederpage.component.html',
  styleUrl: './feederpage.component.css',
})
export class FeederpageComponent {
  feederId = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.feederId = this.route.snapshot.paramMap.get('feederId') || '';
  }
}
