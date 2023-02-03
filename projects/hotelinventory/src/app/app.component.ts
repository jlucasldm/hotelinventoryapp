import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hi there, from inline template!</h1>
  // <h2>sheesh</h2>`,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 {color: red}`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventory';

  @ViewChild('name', {static: true}) name !: ElementRef;

  ngOnInit(){
    console.log(this.name.nativeElement.innerText = "Hilton Hotel");
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
