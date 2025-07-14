import {Component, OnInit} from '@angular/core';
import {TransportsService} from "../../../core/services/transports.service";
import {TransportsModel} from "../../../core/models/transports.model";
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {ActivatedRoute} from "@angular/router";
import {HotelsService} from "../../../core/services/hotels.service";
import {HotelModel} from "../../../core/models/hotel.model";
import {
  logBuilderStatusWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/builder-status-warnings";


@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.scss']
})
export class TransportsComponent implements OnInit {
  transports: TransportsModel[] = [];
  dataSource = new MatTableDataSource<TransportsModel>();
  selection = new SelectionModel<TransportsModel>(true, []);
  displayedColumns: string[] = ['select', 'id', 'image', 'title', 'description', 'route', 'price'];
  currentHotelId: any
  hotelDetails!: HotelModel

  constructor(private transportsService: TransportsService,
              private _route: ActivatedRoute,
              private hotelService: HotelsService
              ) {}

  ngOnInit() {
    this.currentHotelId = this._route.snapshot.paramMap.get('transportsId')
    this.getHotelsDetail()
    this.getTransports();
  }

  getTransports() {
    this.transportsService.getTransports().subscribe((data) => {
      console.log(data)
      console.log(this.currentHotelId)
      this.transports = data.filter(transport => transport.hotelId == this.currentHotelId);
      this.dataSource.data = this.transports;
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource.data);
    }
  }
  getHotelsDetail() {
    this.hotelService.hotelDetailsPage(this.currentHotelId).subscribe(res => {
      this.hotelDetails = res
    })

  }


  onRowClick(event: MouseEvent, row: TransportsModel) {
    event.stopPropagation();
    this.selection.toggle(row);
  }
}
