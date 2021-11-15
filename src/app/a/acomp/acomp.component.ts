import {Component, Injector, OnInit} from '@angular/core';
import {MonserviceService} from '../../monservice.service';
import {MonautreserviceService} from '../../monautreservice.service';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css'],
})
export class AcompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const injector = Injector.create({providers: [{provide: MonserviceService, useClass: MonautreserviceService}]})
    const s =  injector.get(MonserviceService)
    s.message = 'World'
    console.log('a', s.message)
  }

}
