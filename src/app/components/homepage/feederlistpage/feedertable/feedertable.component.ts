import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedertable',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feedertable.component.html',
  styleUrl: './feedertable.component.css',
})
export class FeedertableComponent {}
