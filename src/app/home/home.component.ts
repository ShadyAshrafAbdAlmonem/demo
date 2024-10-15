import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.applyTypingEffect();
  }

  applyTypingEffect() {
    const typingTexts = document.querySelectorAll('.typing-text');
    typingTexts.forEach((textElement: any, index) => {
      const text = textElement.innerText;
      textElement.innerText = ''; 
      setTimeout(() => {
        this.typeWriter(textElement, text);
      }, index * 2000); 
    });
  }

  typeWriter(textElement: any, text: string, i = 0) {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      setTimeout(() => this.typeWriter(textElement, text, i + 1), 100);
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = './assets/Shady Ashraf-CV.pdf'; 
    link.download = 'My_CV_Shady.pdf'; 
    link.click();
  }

}
