import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedCategory: Subject<any> = new Subject<any>()
  searchChanged: EventEmitter<string> = new EventEmitter<string>()

  constructor(private _router: Router) { }

  emitSearchChanged(title: string): void {
    this.searchChanged.emit(title)
  }

  emitSelectedCategory(category: string) {
    this.selectedCategory.next(category)
    console.log('sksk')
    this._router.navigateByUrl('hotels').then()
  }


}
