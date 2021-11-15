import {Component, Injector} from '@angular/core';
import {MonserviceService} from './monservice.service';
import {MonautreserviceService} from './monautreservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testag';

  constructor() {
  }
}
