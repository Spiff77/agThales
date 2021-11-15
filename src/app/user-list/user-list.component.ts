import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: Observable<any>

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.users = this.http.get('http://localhost:8086/learn/api/products')
  }

}
