import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  private autoCompleteData = new BehaviorSubject([]);
  currentAutoCompleteData = this.autoCompleteData.asObservable();
  changeAutoCompleteData(value: any) {
    this.autoCompleteData.next(value);
  }
}
