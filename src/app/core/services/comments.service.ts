import { Injectable } from '@angular/core';
import {CommentsModel} from "../models/comments.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private baseUrl = 'http://localhost:3000'

  constructor(private _http: HttpClient) {
  }

  createComment(comment: CommentsModel): Observable<CommentsModel> {
    return this._http.post<CommentsModel>(`${this.baseUrl}/comments`, comment)
  }
  getComment(): Observable<CommentsModel[]> {
    return this._http.get<CommentsModel[]>(`${this.baseUrl}/comments`, )
  }

}
