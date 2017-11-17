import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { ClinicListService } from './clinic-list.service';
@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ClinicListService]
})
export class ClinicListComponent implements OnInit {

  @Output() visitId = new EventEmitter<any>()
  @Input() customerId = "";
  list: Array<any> = [];
  constructor(private clinicListService: ClinicListService) { }

  ngOnInit() {
    this.getRecords()
  }

  fired(num) {
    this.visitId.emit(num);
  }
  getRecords() {
    let data = {
      customerId: this.customerId
    }
    this.clinicListService.getList(data).subscribe((res) => {
      if (res) {
        this.list = res.data
      }
    })
  }
}
