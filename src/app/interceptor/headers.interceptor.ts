import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router ,NavigationEnd} from '@angular/router';


@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  public logininfo: any=[]

  constructor(private router:Router) {


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          // console.log(event.urlAfterRedirects);
          this.logininfo = localStorage.getItem('adminlogin');
          this.logininfo = this.logininfo ? JSON.parse(this.logininfo) : null;
          if (this.logininfo) {
            this.logininfo.stdCourse = '';
          }
      }
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
