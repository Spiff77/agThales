import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor(private http:HttpClient) { }

  all(): Promise<any> {
    return this.http.get('https://api.openbrewerydb.org/breweries').toPromise()
  }
}
