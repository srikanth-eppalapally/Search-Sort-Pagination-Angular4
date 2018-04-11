import { Component, OnInit, ViewChild } from '@angular/core';
import { AppCustomTableComponent } from './custom-table/custom-table.component';
import { ApiService } from './service/dataservice';
import { User } from './shared/users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(AppCustomTableComponent) tableComponent: AppCustomTableComponent;
  public math = Math;
  public nextBtn = false;
  public filter: String = 'Johnny Applessed';
  public tab: String = 'Johnny Applessed';
  public customTableOptions = {
    columnDefs: [
      { name: 'requistion', value: 'Requistion' },
      { name: 'requistionId', value: 'Requistion Id' },
      { name: 'recruiter', value: 'Recruiter' },
      { name: 'hiringManager', value: 'HiringManager' },
      { name: 'privacy', value: 'Privacy' }],
    selectedRows: [],
    filterString: 'Johnny Applessed',
    sortWith: '',
    sortDirection: false,
    enableFilter: true,
    filteredData: [],
    data: [],
  };
  constructor(public apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getDataList().subscribe((res) => {
      this.customTableOptions.data = res['data'];
      this.customTableOptions.filteredData = res['data'];
      this.tableComponent.onTableSearch();
    });
  }



  selectTab(name, tabType) {
    if (name === 'Johnny Applessed') {
      this.customTableOptions.filterString = 'Johnny Applessed';
      this.tab = 'Johnny Applessed';
      this.nextBtn = false;
    } else {
      this.customTableOptions.filterString = '';
      this.tab = 'allRequisitions';
      this.nextBtn = true;
    }
    this.tableComponent.onTableSearch();
  }


}
