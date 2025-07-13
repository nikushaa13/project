import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelModel } from '../models/hotel.model';
import { AddHotelModel } from '../models/add-hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private baseUrl = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  public getHotels(): Observable<HotelModel[]> {
    return this._http.get<HotelModel[]>(`${this.baseUrl}/hotels`)
  }

  public getCategories(): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}/categories`)
  }

  public hotelDetailsPage(id:number): Observable<HotelModel> {
    return this._http.get<HotelModel>(`${this.baseUrl}/hotels/${id}`)
  }

  public deleteHotels(id: number): Observable<HotelModel[]> {
    return this._http.delete<HotelModel[]>(`${this.baseUrl}/hotels/${id}`)
  }

  public addHotel(hotel: HotelModel): Observable<HotelModel[]> {
    return this._http.post<HotelModel[]>(`${this.baseUrl}/hotels`, hotel)
  }

  public updateHotels(id:number, hotel: HotelModel): Observable<HotelModel> {
    return this._http.put<HotelModel>(`${this.baseUrl}/hotels/${id}`, hotel)
  }
}
