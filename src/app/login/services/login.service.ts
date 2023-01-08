import { Observable } from 'rxjs';
import { LocalService } from '../../shared/services/local.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private localService: LocalService) {}

  signIn(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/sign-in', {
      username: email,
      password: password,
    });
  }
}
