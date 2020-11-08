import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }


  public isUsernameAvailable(username: string) {

    // own impl of service

    return of(username === 'test' ? false : true);
  }

}
