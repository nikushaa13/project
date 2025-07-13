import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../../partials/register/register.component';
import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../core/services/shared.service';
import { HotelModel } from '../../../core/models/hotel.model';
import { HotelsService } from '../../../core/services/hotels.service';
import { Route, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  categories: any[] = []
  searchText!: string
  totalSkeleton: number = 16
  isLoading = true

  constructor(public _dialog: MatDialog,
              private _authService: AuthService,
              private _toastr: ToastrService,
              private _sharedService: SharedService,
              private _hotelsService: HotelsService,
              private _router: Router) {
  }

  ngOnInit() {
    this._hotelsService.getCategories().pipe(
      tap((categories) => {
        setTimeout(() => {
          this.categories = categories
          this.isLoading = false
        }, 2000)
      })
    ).subscribe()
  }

  // onCategoryClick(selectedCategory: string) {
  //   this._hotelsService.getHotels().subscribe((hotels) => {
  //     this.categories = hotels.filter((hotel) => hotel.category === selectedCategory);
  //   });
  // }
  chooseCategory(category: string) {
    this._sharedService.emitSelectedCategory(category)
  }


  get loggedIn() {
    return this._authService.isLoggedIn
  }

  public openRegisterDialog() {
    const dialogRef = this._dialog.open(RegisterComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(() => {});
  }

  logOut() {
    this._authService.logOutUser()
    this._toastr.info('successfully log out')
  }

  onSearch() {
    this._sharedService.emitSearchChanged(this.searchText)
  }
}
