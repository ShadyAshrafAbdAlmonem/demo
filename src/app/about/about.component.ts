import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  fullText: string = `Hi, I'm Shady, I graduated from Cairo University from the Cairo Higher Institute and I love the web field, a front-end developer specializing in creating dynamic and responsive web applications using Angular, With a strong focus on user experience and performance, I aim to deliver high-quality digital solutions I have extensive experience with Angular (currently working with Angular 18), where I utilize my skills in HTML, CSS, and JavaScript to build intuitive user interfaces, Additionally, I'm adept at using tools like Postman and Swagger for API testing and documentation, In my previous role at Solace Company, I led the development of a project that streamlined the user onboarding process, resulting in a 30% increase in user engagement. My ability to collaborate with cross-functional teams helped deliver features that exceeded client expectations, My passion for technology and design sparked my journey into front-end development. I love the challenge of turning complex requirements into user-friendly interfaces and continually strive to enhance my skills through ongoing learning.
  I am keen on collaborating with professional corporations to work on projects that add value to the community, I believe in the power of technology to make a positive impact, and I actively seek opportunities to contribute to open-source projects,
  I am excited about the future of web development and look forward to connecting with like-minded professionals, If you're interested in discussing potential projects or collaborations, feel free to reach out
________________________________________________________

  My Gmail: shady.ghozais@gmail.com
  My Phone: 01017810025
  My linkedIn: https://www.linkedin.com/in/shady-ashraf-834353331/
  `;

  displayedText: string = '';
  typingSpeed: number = 10; 

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < this.fullText.length) {
        this.displayedText += this.fullText.charAt(currentIndex);
        currentIndex++;
        this.cdr.detectChanges(); 
      } else {
        clearInterval(interval); 
      }
    }, this.typingSpeed);
  }

}
