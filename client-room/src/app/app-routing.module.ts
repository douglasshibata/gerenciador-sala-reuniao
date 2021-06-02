import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './pages/room/create-room/create-room.component';
import { DetailsRoomComponent } from './pages/room/details-room/details-room.component';
import { ListRoomComponent } from './pages/room/list-room/list-room.component';
import { UpdateRoomComponent } from './pages/room/update-room/update-room.component';


const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  { path: 'rooms', component: ListRoomComponent },
  { path: 'add', component: CreateRoomComponent },
  { path: 'update/:id', component: UpdateRoomComponent },
  { path: 'details/:id', component: DetailsRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
