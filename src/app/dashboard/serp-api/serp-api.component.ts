import { Component, OnInit, Input } from '@angular/core';
import { FileUploadService } from '../../service/fileUpload/file-upload.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { SerpService } from '../../service/search/serp.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-serp-api',
  templateUrl: './serp-api.component.html',
  styleUrls: ['./serp-api.component.css']
})
export class SerpApiComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService, public serpService: SerpService) {
  }

  ngOnInit(): void {
    this.fileInfos = this.fileUploadService.getFiles();
  }

  fileInfos?: Observable<any>;
  selectedFiles?: FileList;
  currentFile?: File;
  gridApi: any;
  gridColumnApi: any;
  rowData: any;
  loading:boolean = false;

  upload(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
        this.fileInfos = this.fileUploadService.getFiles();
    console.log(this.fileInfos)
      }

      this.selectedFiles = undefined;
    }
  }
  ///////////////////////////
  defaultColDef = {
    editable: false,
    sortable: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
  };
  columnDefs = [
    { field: 'sr' },
    { field: 'keyword' },
    { field: 'volume' },
    { field: 'results' },
    { field: 'ratio' }
  ];

  onBtnExport() {
    var params = getParams();
    this.gridApi.exportDataAsCsv(params);
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  
  temp: any[] = [];
  search(keywords: string) {
    var serp_service: any = this
    var result_count: number;
    var query: any;
    if(keywords == ""){
      Swal.fire(
        'Failed!',
        'Please input your keywords.',
        'warning'
      )
      return;
    }
    query = keywords.split(",");
    this.loading = true;
    query.forEach(function (queryItem: any, index: any) {
      serp_service.serpService.search(queryItem).subscribe((response: any) => {
        if (response) {
          result_count = response.number_of_results;
          serp_service.temp.push({
            sr: index + 1,
            keyword: "inalltitle:" + response.query.q,
            volume: result_count,
            results: response.number_of_results,
            ratio: ((result_count) * 100 / result_count).toFixed()
          });
          if (serp_service.temp.length == query.length) {
            serp_service.loading = false;
            serp_service.rowData = serp_service.temp;
          }
        }
      })
    })
  }

}
function getParams() {
  return {
    suppressQuotes: false,
    columnSeparator: false,
    customHeader: false,
    customFooter: false,
  };
}