import { Component, OnInit } from '@angular/core';
import {MonserviceService} from '../../monservice.service';

@Component({
  selector: 'app-b1comp',
  templateUrl: './b1comp.component.html',
  styleUrls: ['./b1comp.component.css']
})
export class B1compComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //console.log('B1:', this.monService.message)
  }

}
