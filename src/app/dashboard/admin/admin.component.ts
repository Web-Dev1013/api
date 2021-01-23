import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('agGrid')
  agGrid!: AgGridAngular;
  constructor(
    public authService: AuthService,
    public fb: FormBuilder,
  ) {
    this.authService.getUsers().subscribe((res: any) => {
      this.rowData = [];
      for (var x in res) {
        this.rowData.push({
          No: Number(x) + 1,
          Name: res[x].name,
          Email: res[x].email,
          Password: res[x].password,
          Credit: res[x].credit,
          id: res[x]._id
        });
      }
    });
    this.authService.getApis().subscribe((res: any) => {
      this.APIData = [];
      for (var x in res) {
        this.APIData.push({
          ID: Number(x) + 1,
          API: res[x].apiName
        })
      }
    })
  }

  gridApi: any;
  gridColumnApi: any;
  rowData: any;
  APIData: any;

  ngOnInit(): void {
  }

  defaultColDef = {
    sortable: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
  };
  columnDefs = [
    { field: '#', maxWidth: 70, checkboxSelection: true },
    { field: 'No', maxWidth: 100 },
    { field: 'Name', maxWidth: 150, editable: true },
    { field: 'Email', maxWidth: 250, editable: true },
    { field: 'Password', editable: true },
    { field: 'Credit', maxWidth: 100, editable: true }
  ];
  APIColDef = {
    editable: false,
    sortable: true,
    resizable: false,
    minWidth: 100,
    flex: 1,
  };
  APIColDefs = [
    { field: 'ID', maxWidth: 200 },
    { field: 'API' }
  ];
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  addNewApi(e: any, temp: any) {
    e.preventDefault();
    if (temp) {
      this.authService.addNewApi(temp).subscribe((res: any) => {
        console.log(res);
      });
    }
  }

  changeUser(data: any) {
    console.log(data.columnDefs)
  }

  deleteUser() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    for (var x in selectedData) {
      this.authService.deleteUser(selectedData[x].id);
    }
  }
}

