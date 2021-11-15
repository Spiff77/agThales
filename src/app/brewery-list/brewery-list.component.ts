import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BreweryService} from '../brewery.service';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.css']
})
export class BreweryListComponent implements OnInit {
  breweries!: Observable<any>

  constructor(private bs: BreweryService) { }

  ngOnInit(): void {
    this.breweries = this.bs.all()
  }
}
