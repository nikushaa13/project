import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelsService } from '../../../core/services/hotels.service';
import { HotelModel } from '../../../core/models/hotel.model';
import { AddHotelModel } from '../../../core/models/add-hotel.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-form-dialog',
  templateUrl: './add-form-dialog.component.html',
  styleUrls: ['./add-form-dialog.component.scss']
})
export class AddFormDialogComponent implements OnInit{

  formGroup = new FormGroup<any>('')
  public username = localStorage.getItem('username')


  constructor(private _hotelsService: HotelsService, private dialogRef: MatDialogRef<any>) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl ('',Validators.required),
      title: new FormControl('', [Validators.required] ),
      price: new FormControl( '', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10)] ),
      imageUrl: new FormControl('', [Validators.required] ),
      area: new FormControl('', [Validators.required]),
      actions: new FormControl('', [Validators.required]),
      owner: new FormControl(this.username)

    })

  }

  addHotel(): void {
    this._hotelsService.addHotel(this.formGroup.value as HotelModel).subscribe(res => {
      this.dialogRef.close(res)
      console.log(res)
    })
  }

}
