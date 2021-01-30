import {Component, OnInit} from '@angular/core';
import {ApiService} from './core/api.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-filter';


  displayedColumns: string[] = ['position', 'category'];
  dataSource = new MatTableDataSource([]);


  constructor(
    public apiService: ApiService,
  ) {
    this.callApi();
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  callApi() {
    console.log('bs');
    this.apiService.getData().then((response) => {
      console.log(response);
      const listData = [];
      response.forEach((item, index) => {
        const data = {
          category: item,
          position: ++index,
        };
        listData.push(data);
      });

      this.dataSource = new MatTableDataSource(listData);

      console.log(this.dataSource.data);
    });
  }
}
