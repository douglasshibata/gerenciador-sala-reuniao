import { Room } from './../../../shared/model/room';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrls: ['./details-room.component.css']
})
export class DetailsRoomComponent implements OnInit {

  id!: number;
  room: Room = new Room();

  constructor(private route: ActivatedRoute,private router: Router,
    private roomService: RoomService) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data)
        this.room = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['rooms']);
  }
}
