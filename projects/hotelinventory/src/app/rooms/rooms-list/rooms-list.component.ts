import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, DoCheck } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent implements OnInit{
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit(): void {} 

  // ngOnChanges(changes: SimpleChanges): void {
  //     //throw new Error('Method not implemented');
  //     console.log(changes);
  //     if(changes['title']){
  //       this.title = changes['title'].currentValue.toUpperCase();
  //     }
  // }

  // ngDoCheck(): void {
  //     console.log('on changes is called');
  // }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
