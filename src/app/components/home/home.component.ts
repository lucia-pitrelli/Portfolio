import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //coloco modo oscuro
  toggleSwitch(): void {
    document.body.classList.toggle('dark-theme');
  }
}
