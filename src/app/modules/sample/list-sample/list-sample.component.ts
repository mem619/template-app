import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../../core/services/sample.service';
import { UserSampleModel } from 'src/app/core/models/user-sample-model';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-list-sample',
  templateUrl: './list-sample.component.html',
  styleUrls: ['./list-sample.component.scss']
})
export class ListSampleComponent implements OnInit {

  sizeItems: any = AppConfig.pageSizeItems;
  total: number = 0;
  filters: any  = {
    _start: 0,
    _limit: AppConfig.pagination.limit
  };
  loading: boolean = false;
  users: UserSampleModel[] = [];
  filterOpen:any =  {};

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.loading = true;

    this.sampleService.getUsers(this.filters)
      .subscribe(response => {
        this.users = response.data;
        this.total = response.count;
        this.loading = false;
      });
  }

  changePageSize(event: any): void {
    this.filters._limit = event.target.value;
    this.getUser();
  }

  get pageSize(): number {
    return (this.filters._start / this.filters._limit) + 1;
  }

  set pageSize(value: number) {
    this.filters._start = (value - 1) * this.filters._limit;
    this.getUser();
  }

  filter(prop: string, event: any): void {
    this.filterOpen[prop] = false;
    this.filters[prop] = event.target.value;
    this.getUser();
  }

  clear(prop: string, event: any): void {
    delete this.filterOpen[prop];
    delete this.filters[prop];
    this.getUser();
  }

}
