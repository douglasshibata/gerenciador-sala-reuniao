import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateRoomComponent } from './pages/room/create-room/create-room.component';
import { DetailsRoomComponent } from './pages/room/details-room/details-room.component';
import { ListRoomComponent } from './pages/room/list-room/list-room.component';
import { UpdateRoomComponent } from './pages/room/update-room/update-room.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    DetailsRoomComponent,
    ListRoomComponent,
    UpdateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
