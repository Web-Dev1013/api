import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SerpModel } from './serp-model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerpService {

  constructor(private http: HttpClient) { }

  API_URL = "https://app.zenserp.com/api/v2/search";
  // volume_API = "https://api.keywordseverywhere.com/v1/get_keyword_data";
  public search(keywords: string) {
    console.log("KKKKKKKK", keywords)
    return this.http.get(this.API_URL + "?q=" + keywords, {params: {'apikey': 'f4841b90-5b34-11eb-9f41-4d4592980e58'}
    });
    //   var header = new HttpHeaders({
    //     "Authorization": "Bearer cc23ba58d6c57c226454",
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   });
    //   var params = new HttpParams()
    //     .set("dataSource", "gkp")
    //     .set("county", "us")
    //     .set("currency", "usd")
    //     .set("kw[]", "keywords Tools");
    //   return this.http.post(this.volume_API, { headers: header });
    // }
  }
}


//keyword everywhere f72fab49255be89c28ee
// yours Bearer "cc23ba58d6c57c226454"