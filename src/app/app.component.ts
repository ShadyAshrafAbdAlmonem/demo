import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routerAnimation', [
      transition(':enter', [
        style({ opacity: 0 }), // Start from invisible
        animate('2.0s', style({ opacity: 1 })) // Fade in
      ]),
      transition(':leave', [
        style({ opacity: 1 }), // Start visible
        animate('2.0s', style({ opacity: 0 })) // Fade out
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular17_without_standalone';

  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd) // Type guard for NavigationEnd
    ).subscribe((event) => {
      this.currentRoute = event.url; // Now TypeScript knows event is NavigationEnd
      console.log('Navigated to:', this.currentRoute); // Debugging output
    });
  }
  
}
