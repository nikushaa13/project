import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TransportsModel} from "../models/transports.model";

@Injectable({
  providedIn: 'root'
})
export class TransportsService {
  private baseUrl = 'http://localhost:3000'

  constructor(private _http: HttpClient) {
  }


  getTransports(): Observable<TransportsModel[]> {
    return this._http.get<TransportsModel[]>(`${this.baseUrl}/transports`, )
  }
}
