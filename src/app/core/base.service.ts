import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  endPoint = 'https://app.ticketmaster.com/discovery/v2/events';
  apiKeyLocale = 'apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*'

  constructor() {
  }

  httpError(error: { error: { message: string; }; status: any; message: any; }) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

  createCompleteUrl(page: number, id: string | null = null): string {
    if (id) {
      return this.endPoint + '/' + id + '?' + this.apiKeyLocale;
    }
    const partialUrl = this.endPoint + '?' + this.apiKeyLocale;
    return page !== 0 ? partialUrl + '&page=' + page : partialUrl;
  }
}
