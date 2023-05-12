import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AutoService } from '../app/auto-complete2/auto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'auto-complete';
  customerCode: any;
  toggleChildDisabled: boolean = false;

  emittedData: any;

  constructor(private autoSer: AutoService) {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}

  data = [
    {
      companyType: 'CUS',
      companyCode: 'JKHDK',
      companyName: 'AHJK Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'OPEJOSJED',
      companyName: 'NJKSD Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'SUDG',
      companyName: 'NCJKDSNSF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'NKLDSN',
      companyName: 'OIJDSIO Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'OISD',
      companyName: 'BHJSDBF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'PSDJOF',
      companyName: 'ZHISDHFI Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'YUSDGFUD',
      companyName: 'PODJSP Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'NMDSLKFN',
      companyName: 'WEIOHER Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'OISDI',
      companyName: 'PJSDF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'NDSKFN',
      companyName: 'POIDDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'UIDGS',
      companyName: 'YUEWGF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'BVDHSJKFB',
      companyName: 'MKDSOFD Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'OIJSDF',
      companyName: 'LKSDJKLDFSJ Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'WEOE',
      companyName: 'EWYUGDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'QCGH',
      companyName: 'MOSDKF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'XMDKLJFDS',
      companyName: 'ZRDTXSRD Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'POISD',
      companyName: 'LKDSL Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ZBJKDSBF',
      companyName: 'MKODSNIJD Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'POJPDSJF',
      companyName: 'CFTEDCYGS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ABJBSD',
      companyName: 'BHUDBHUSD Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'LKDJF',
      companyName: 'EWUYGF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'POSDIF',
      companyName: 'MKOSDFNO Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ZNJKSDF',
      companyName: 'WQAESRDX Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'TDFJSVDF',
      companyName: 'JKBHDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'MJSDNB',
      companyName: 'JDNKSBNF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ZHJDHSK',
      companyName: 'OIHSDO Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'PKSDJ',
      companyName: 'NJKDSNJDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ALFKODS',
      companyName: 'ZSEXDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'MKDSIBF',
      companyName: 'LKJDKJDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'PODOPJDFS',
      companyName: 'UIEHUF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ZHJDHSJKFS',
      companyName: 'MKODNIOD Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'LOPDSK',
      companyName: 'GYUSDY Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
  ];
  medData = [
    {
      companyType: 'CUS',
      companyCode: 'LKDJF',
      companyName: 'EWUYGF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'POSDIF',
      companyName: 'MKOSDFNO Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ZNJKSDF',
      companyName: 'WQAESRDX Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'TDFJSVDF',
      companyName: 'JKBHDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'MJSDNB',
      companyName: 'JDNKSBNF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ZHJDHSK',
      companyName: 'OIHSDO Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'PKSDJ',
      companyName: 'NJKDSNJDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ALFKODS',
      companyName: 'ZSEXDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'MKDSIBF',
      companyName: 'LKJDKJDS Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'PODOPJDFS',
      companyName: 'UIEHUF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'ZHJDHSJKFS',
      companyName: 'MKODNIOD Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
    {
      companyType: 'CUS',
      companyCode: 'LOPDSK',
      companyName: 'GYUSDY Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
  ];
  smallData = [
    {
      companyType: 'CUS',
      companyCode: 'PODOPJDFS',
      companyName: 'UIEHUF Engineering Solutions Limited',
      hierarchyLevel: '2',
    },
  ];

  pushAll() {
    this.autoSer.changeAutoCompleteData(this.data);
  }

  onCustomerSelect($event: any) {
    console.log('Inside parent');
    console.log($event);
    this.emittedData = $event;
  }

  pushMed() {
    this.autoSer.changeAutoCompleteData(this.medData);
  }

  pushSmall() {
    this.autoSer.changeAutoCompleteData(this.smallData);
  }
  toggleDisbled() {
    this.toggleChildDisabled = !this.toggleChildDisabled;
  }

  getFilteredValue(value: any) {
    if (value) {
      let filData = this.data.filter((element: any) => {
        return (
          element.companyCode.toLowerCase().indexOf(value.toLowerCase()) >= 0
        );
      });
      this.autoSer.changeAutoCompleteData(filData);
    }
  }

  getChangedData($event: any) {
    this.getFilteredValue($event);
  }
}
