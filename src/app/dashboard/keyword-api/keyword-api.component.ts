import { Component, OnInit } from '@angular/core';

interface Results {
  id?: number;
  name: string;
  volume: number;
  difficulty: number;
}

const searchResults: Results[] = [
  {
    name: 'Russia', volume: 23,difficulty: 46
  },
  {
    name: 'France', volume: 23,difficulty: 46
  },
  {
    name: 'Germany', volume: 23,difficulty: 46
  },
  {
    name: 'Portugal', volume: 23,difficulty: 46
  },
  {
    name: 'Canada', volume: 23,difficulty: 46
  },
  {
    name: 'Vietnam', volume: 23,difficulty: 46
  }
];


@Component({
  selector: 'app-keyword-api',
  templateUrl: './keyword-api.component.html',
  styleUrls: ['./keyword-api.component.css']
})
export class KeywordApiComponent implements OnInit {
  
  page = 1;
  pageSize = 4;
  collectionSize = searchResults.length;
  results: Results[] = [];

  constructor() { 
    this.refreshCountries();
  }

  
  refreshCountries() {
    this.results = searchResults
      .map((result, i) => ({id: i + 1, ...result}))
      // .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
  }

}
