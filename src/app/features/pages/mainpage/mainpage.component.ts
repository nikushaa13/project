import {  ChangeDetectionStrategy, Component,  OnInit } from '@angular/core';
import { HotelsService } from '../../../core/services/hotels.service';
import { BehaviorSubject,  tap } from 'rxjs';
import { HotelModel } from '../../../core/models/hotel.model';
import {  Router } from '@angular/router';
import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainpageComponent implements OnInit {
  hotels: BehaviorSubject<HotelModel[]> = new BehaviorSubject<HotelModel[]>([])
  currentImageIndex = 0;
  allHotels: HotelModel[] = [];
  sub: any
  totalSkeleton: number = 16
  isLoading: boolean = true

  constructor(private _hotelsService: HotelsService,
              private _route: Router,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this._hotelsService.getHotels().pipe(
      tap(res => {
        this.allHotels = res.map(hotel => ({ ...hotel, currentImageIndex: 0 }) );
        setTimeout(() => {
          this.hotels.next(this.allHotels);
        }, 1000)
        this.isLoading = false
      })
    ).subscribe();

     this._sharedService.selectedCategory.subscribe((selectedCategory: string) => {
      if (selectedCategory === 'All Categories') {
        this.hotels.next(this.allHotels)
      }else {
        const filteredHotels = this.allHotels.filter(hotel => hotel.category === selectedCategory)
        this.hotels.next(filteredHotels)
      }
    })

    this._sharedService.searchChanged.subscribe((searchText: string) => {
      this.filterHotels(searchText);
    });
  }

  openDetailsPage(id: number) {
    this._route.navigateByUrl(`/hotelDetails/${id}`).then()
  }

  filterHotels(searchText: string) {
    if (searchText.trim() === '') {
      this.hotels.next(this.allHotels);
    } else {
      const filteredHotels = this.allHotels.filter((hotel: HotelModel) =>
        hotel.title.toLowerCase().includes(searchText.toLowerCase())
      );

      this.hotels.next(filteredHotels);
    }
  }

  getImageUrl(item: HotelModel): string {
    const imageIndex = item.currentImageIndex;
    switch (imageIndex) {
      case 0:
        return item.imageUrl;
      case 1:
        return item.secondImage;
      case 2:
        return item.thirdImage;
      case 3:
        return item.fourthImage;
      case 4:
        return item.fifthImage;
      default:
        return item.imageUrl;
    }
  }
  changeImage(item: HotelModel, newIndex: number) {
    item.currentImageIndex = newIndex;
  }

  nextImage(item: HotelModel) {
    item.currentImageIndex = (item.currentImageIndex + 1) % 5;
  }

  prevImage(item: HotelModel) {
    item.currentImageIndex = (item.currentImageIndex - 1 + 5) % 5;
  }
}


