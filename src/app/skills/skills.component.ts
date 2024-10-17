import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  chart: any;

  constructor() { }
  ngOnInit(): void {
  }

  // Use ngAfterViewInit to ensure that the DOM elements are rendered before initializing the charts
  ngAfterViewInit(): void {
    this.createChartUi();
    this.createChartWeb();
    this.createChartFrameWork();
    this.createChartApp();
  }

  createChartUi() {
    const uiCanvas = document.getElementById("expertiseChartUi") as HTMLCanvasElement;
    if (uiCanvas) { // Ensure the element exists before creating the chart
      this.chart = new Chart(uiCanvas, {
        type: 'doughnut',
        data: {
          labels: ['UI/UX Expertise', 'Other Skills'],
          datasets: [
            {
              label: 'My Expertise in UI/UX',
              data: [70, 30],
              backgroundColor: ['#0000dd', '#000085'],
              hoverOffset: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true
            }
          }
        }
      });
    }
  }

  createChartWeb() {
    const webCanvas = document.getElementById("expertiseChartWeb") as HTMLCanvasElement;
    if (webCanvas) {
      this.chart = new Chart(webCanvas, {
        type: 'doughnut',
        data: {
          labels: ['HTML', 'CSS', 'JS'],
          datasets: [
            {
              label: 'My Expertise Web',
              data: [30, 20, 80],
              backgroundColor: ['#0000dd', '#000085', '#000048'],
              hoverOffset: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true
            }
          }
        }
      });
    }
  }

  createChartFrameWork() {
    const frameWorkCanvas = document.getElementById("expertiseChartFrameWork") as HTMLCanvasElement;
    if (frameWorkCanvas) {
      this.chart = new Chart(frameWorkCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Angular', 'React', 'Vue'],
          datasets: [
            {
              label: 'My Expertise in FrameWork',
              data: [60, 30, 10],
              backgroundColor: ['#0000dd', '#000085', '#000048'],
              hoverOffset: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true
            }
          }
        }
      });
    }
  }

  createChartApp() {
    const appCanvas = document.getElementById("expertiseChartApp") as HTMLCanvasElement;
    if (appCanvas) {
      this.chart = new Chart(appCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Front', 'Back', 'DB'],
          datasets: [
            {
              label: 'My Expertise in app',
              data: [60, 30, 10],
              backgroundColor: ['#0000dd', '#000085', '#000048'],
              hoverOffset: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true
            }
          }
        }
      });
    }
  }


  createChartApps() {
    const appCanvas = document.getElementById("expertiseChartApps") as HTMLCanvasElement;
    if (appCanvas) {
      this.chart = new Chart(appCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Front'],
          datasets: [
            {
              label: 'My Expertise in app',
              data: [1],
              backgroundColor: ['#0000dd'],
              hoverOffset: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true
            }
          }
        }
      });
    }
  }
}
