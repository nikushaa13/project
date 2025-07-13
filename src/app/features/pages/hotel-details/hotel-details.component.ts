import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../../core/services/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { HotelModel } from '../../../core/models/hotel.model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit{
  currentHotelId: any
  hotelDetails!: HotelModel

  constructor(private _hotelsService: HotelsService, private _route: ActivatedRoute) {
  }
  ngOnInit() {
    this.currentHotelId = this._route.snapshot.paramMap.get('id')
    console.log(121)
    this.getHotelsDetail()
  }

  getHotelsDetail() {
    this._hotelsService.hotelDetailsPage(this.currentHotelId).subscribe(res => {
      this.hotelDetails = res
    })

  }

}
