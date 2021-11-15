import {Component, Injector, OnInit} from '@angular/core';
import {MonserviceService} from './monservice.service';
import {MonautreserviceService} from './monautreservice.service';
import {TranslateService} from '@ngx-translate/core';
import {from, interval, of, timer} from 'rxjs';
import {catchError, concatMap, finalize, map, mergeMap, retry, switchMap, take, tap} from 'rxjs/operators';

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
    window.location.reload()
  }

  ngOnInit(): void {
    //this.translationService.setDefaultLang('FR')
    let lang = localStorage.getItem('lang') || 'EN';
    this.translationService.use(lang)

    const fruits = ['Pomme', 'Poire', 'Cerises', 'Ananas', 'Prune']

    interval(1000).pipe(
      finalize(() => console.log('Test')),
      map(val => {
        if(val > 2) throw new Error('Mauvaise Valeur')
        return 'toto'+val;
      }),
      tap(val => {console.log('VALUE:', val)}),
      retry(2),
      catchError( e => {
        console.log('Error')
        return of()
      }),
    ).subscribe(
      val => console.log(val),
      error => console.log(error),
      () => console.log('Complete')
    )

  }
}
