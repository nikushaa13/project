import { Component, Inject, OnInit } from '@angular/core';
import { HotelsService } from '../../../core/services/hotels.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HotelModel } from '../../../core/models/hotel.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) private hotel: HotelModel,
              private _hotelsService: HotelsService,
              private  _dialogRef: MatDialogRef<any>,
              private dialog: MatDialog
              ) {
    console.log(this.hotel)
  }
  ngOnInit() {
  }
  deleteItem() {
    this._hotelsService.deleteHotels(this.hotel.id).subscribe(() => {
      this._dialogRef.close(true)
    })
  }
  cancelDelete() {
    this._dialogRef.close(false);
  }
}
