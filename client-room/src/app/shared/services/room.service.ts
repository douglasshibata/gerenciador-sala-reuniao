import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/room/${id}`);
  }

  createRoom(room: Object): Observable<Object> {
    return this.http.post(`${environment.baseUrl}/room`, room);
  }

  updateRoom(id: number, value: any): Observable<Object> {
    return this.http.put(`${environment.baseUrl}/room/${id}`, value);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/room/${id}`, { responseType: 'text' });
  }

  getRoomsList(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/room`);
  }
}
