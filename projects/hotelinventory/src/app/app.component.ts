import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hi there, from inline template!</h1>
  // <h2>sheesh</h2>`,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 {color: red}`]
})
export class AppComponent implements AfterViewInit {
  title = 'hotelinventory';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }
}
