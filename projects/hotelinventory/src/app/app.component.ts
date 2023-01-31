import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hi there, from inline template!</h1>
  // <h2>sheesh</h2>`,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 {color: red}`]
})
export class AppComponent {
  title = 'hotelinventory';

  role = 'Admin';
}
