import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { APIResponse } from '../interfaces/common/ApiResponse';
import { User } from '../interfaces/auth/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/Authentication/Login';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<APIResponse<User>> {
    const body = { email, password };
    return this.http.post<APIResponse<User>>(this.apiUrl, body).pipe(
      map((response) => {
        if (response && response.data) {
          localStorage.setItem('currentUser', JSON.stringify(response.data));
          this.currentUserSubject.next(response);
          this.router.navigate(['/home']);
        }
        return response;
      }),
      catchError(this.handleError)
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    throw error;
  }
}
