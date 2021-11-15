import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BreweryService} from '../brewery.service';
import {delay, takeUntil, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.css']
})
export class BreweryListComponent implements OnInit {
  breweries!: Observable<any>
  brewerieList: any[] = []

  isAlive = true;

  constructor(private bs: BreweryService) { }

  async ngOnInit(): Promise<void> {
    this.brewerieList = await this.bs.all()

  }
}
