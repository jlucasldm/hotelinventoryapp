import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

  // rooms : Room = {};

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  hideRooms = false;

  roomList: RoomList[] = []
  
  constructor() {}

  ngOnInit(): void{
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'placeholder',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5  
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'placeholder',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.44897414561546  
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1500,
        photos: 'placeholder',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 2.6   
      }
    ]
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
