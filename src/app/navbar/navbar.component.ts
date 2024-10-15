import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  
})
export class NavbarComponent {
  isSidebarOpen = false;

  // This listener checks for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }
  

  // Toggle the sidebar if the user is on mobile
  toggleSidebar() {
    if (this.isMobile()) {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }

  // Function to check if the user is on a mobile screen size
  isMobile(): boolean {
    return window.innerWidth <= 717 && window.innerWidth >= 200;
  }

  // Call this on component init to check the screen size initially
  checkScreenSize() {
    if (!this.isMobile() && this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }

  ngOnInit() {
    this.checkScreenSize(); // Check screen size when the component loads
  }
}
