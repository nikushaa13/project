import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../../core/services/hotels.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HotelModel } from '../../../core/models/hotel.model';
import {CommentsModel} from "../../../core/models/comments.model";
import {FormControl, FormGroup} from "@angular/forms";
import {CommentsService} from "../../../core/services/comments.service";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit{
  currentHotelId: any
  hotelDetails!: HotelModel
  comments: CommentsModel[] = []
  username = localStorage.getItem('username');
  commentFormGroup!: FormGroup;

  get comment() {
    return this.commentFormGroup.get('comment');
  }

  constructor(private _hotelsService: HotelsService,
              private _route: ActivatedRoute,
              private _router: Router,
              private commentService: CommentsService) {
  }
  ngOnInit() {
    this.currentHotelId = this._route.snapshot.paramMap.get('id')
    this.getHotelsDetail()
    this.getComments()

    this.commentFormGroup = new FormGroup({
      comment: new FormControl('')
    })
    this.commentFormGroup.valueChanges.subscribe((value) => {
    })
  }


  createComment() {
    const commentBody = this.comment?.value;
    this.commentService.createComment({
      body: commentBody,
      commentId: this.currentHotelId,
      userName: this.username,
    }).subscribe(() => {
      this.getComments()
      this.commentFormGroup.reset()
    })
  }

  getComments() {
    this.commentService.getComment().subscribe(comments => {
      this.comments = comments.filter((comment: CommentsModel) => comment.commentId == this.currentHotelId);
    });
  }

  openTransportDetailsPage(id: number) {
    this._router.navigateByUrl(`/transports/${id}`).then()
  }

  getHotelsDetail() {
    this._hotelsService.hotelDetailsPage(this.currentHotelId).subscribe(res => {
      this.hotelDetails = res
    })

  }

}
