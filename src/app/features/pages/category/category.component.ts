import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../../core/services/hotels.service';
import { HotelModel } from '../../../core/models/hotel.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  category: any
  categories: HotelModel[] = []
  constructor(private _hotelsService: HotelsService, private _route: ActivatedRoute) {
  }
  ngOnInit() {

  }

}
