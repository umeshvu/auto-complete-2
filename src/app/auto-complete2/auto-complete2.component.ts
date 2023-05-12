import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AutoService } from './auto.service';
@Component({
  selector: 'app-auto-complete2',
  templateUrl: './auto-complete2.component.html',
  styleUrls: ['./auto-complete2.component.scss'],
})
export class AutoComplete2Component implements OnInit, OnChanges {
  resultSet: any = [];
  resultSetTemp: any = [];

  @ViewChild('searchAuto')
  searchElement!: ElementRef;

  @Input() autoCompleteValue: string = ''; //search value
  @Input() isAutoFirstEnabled: boolean = false; //toggling first value auto select
  @Input() isLoadMoreEnabled: boolean = false; //toggling load more feature
  @Input() loadMoreSize: number = 10; //load more page size
  @Input() isDisabled: boolean = false; //is component disabled toggle

  @Output() autoCompleteValueChange: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() selectOption: EventEmitter<any> = new EventEmitter();
  @Output() isDisabledValueChange: EventEmitter<any> = new EventEmitter();

  constructor(private autoSer: AutoService) {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.autoSer.currentAutoCompleteData.subscribe((data) => {
      if (!this.isDisabled) {
        this.resultSet = data;
      }
      //Handling the single item condition
      if (Object.keys(this.resultSet).length == 1 && this.isAutoFirstEnabled) {
        this.select(this.resultSet[0]);
      } else {
        //Handling mutliple items condition
        if (this.isLoadMoreEnabled) {
          //Mulitiple item with load more feature
        } else {
          //without load more feature
        }
      }
    });
  }

  handleLoadMore() {}

  lostFocus($event: FocusEvent) {
    //Removing the auto complete list
    this.clearResultSet();
    //Emit the blur event for parent
  }

  inFocus($event: FocusEvent) {
    //emit the focus event for the parent
    if ($event) this.searchKeyChange('');
  }

  searchKeyChange($event: any) {
    //emitting autocomplete search string change
    this.autoCompleteValueChange.emit(this.autoCompleteValue);
  }

  emitSelection($event: any) {
    //emitting selected item
    this.selectOption.emit($event);
  }

  removeSearchKey($event: MouseEvent) {
    //clearing search key
    this.autoCompleteValue = '';
    this.searchKeyChange('');
    this.clearResultSet();
    this.getFocus();
  }

  itemClickSelect($event: any) {
    const obj = JSON.parse($event.target.dataset.sectionvalue);
    this.select(obj);
    this.clearResultSet();
  }

  select($event: any) {
    this.autoCompleteValue = $event.companyName;
    this.searchKeyChange('');
    this.emitSelection($event);
    this.clearResultSet();
  }

  clearResultSet() {
    this.resultSet = [];
  }

  getFocus() {
    this.searchElement.nativeElement.focus();
  }

  loadMoreItems() {
    console.log('Load more items');
  }
}
