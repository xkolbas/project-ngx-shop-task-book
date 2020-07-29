import { HttpHandler } from '@angular/common/http';
import {
  HttpEvent,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { filter, map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

export interface IRes<T> {
  data: T;
  error?: string;
}
export class InterceptorService implements HttpInterceptor {
  public intercept<T extends IRes<T>>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpResponse<T>> {
    const baseUrl = 'assets/';

    const jsonReq: HttpRequest<T> = req.clone({});
    return next.handle(jsonReq).pipe(
      filter((event: HttpEvent<IRes<T>>): event is HttpResponse<IRes<T>> => {
        if (event instanceof HttpResponse) {
          return true;
        }
        return false;
      }),
      // tslint:disable-next-line:typedef
      map((res: HttpResponse<IRes<T>>) => {
        return res.clone({ body: res.body && res.body.data });
      }),
      catchError(
        (): Observable<never> => {
          return EMPTY;
        }
      )
    );
  }
}
