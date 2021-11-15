import {Component, Injector, OnInit} from '@angular/core';
import {MonserviceService} from '../../monservice.service';
import {MonautreserviceService} from '../../monautreservice.service';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const injector = Injector.create({providers: [{provide: MonserviceService, useClass: MonautreserviceService}]})
    const s =  injector.get(MonserviceService)
    s.message = 'Hello'
    console.log('b', s.message)
  }

}
