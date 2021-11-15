import {Component, Injector, OnInit} from '@angular/core';
import {MonserviceService} from './monservice.service';
import {MonautreserviceService} from './monautreservice.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'testag';

  constructor(private translationService: TranslateService) {
  }

  changeLang(target: any) {
    let lang = target.value;
    localStorage.setItem('lang', lang)
    this.translationService.use(lang)
  }

  ngOnInit(): void {
    this.translationService.setDefaultLang('FR')
    let lang = localStorage.getItem('lang') || 'EN';
    this.translationService.use(lang)
  }
}
