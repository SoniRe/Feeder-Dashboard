import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MainpageComponent } from './components/homepage/mainpage/mainpage.component';
import { FeederlistpageComponent } from './components/homepage/feederlistpage/feederlistpage.component';
import { FeederpageComponent } from './components/feederpage/feederpage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'feeder/:feederId',
    component: FeederpageComponent,
  },
  {
    path: 'dashboard',
    component: HomepageComponent,
    children: [
      {
        path: '',
        redirectTo: 'mainpage',
        pathMatch: 'full',
      },
      {
        path: 'mainpage',
        component: MainpageComponent,
      },
      {
        path: 'feederlistpage',
        component: FeederlistpageComponent,
      },
    ],
  },
];
