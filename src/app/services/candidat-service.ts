
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../core/model/candidat';

class User {
}

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  getURL = 'http://localhost:8080/GetCandidacy';
 deleteURL = 'http://localhost:8080/deleteCandidacy';
  constructor(private http: HttpClient) { }

  getCandidacy(): Observable<Candidat[]>{
    return this.http.get<Candidat[]>(this.getURL);
  }
  /////////////////////////////
  SerachMultiple(key: string): Observable<Candidat[]>
  {
    return this.http.get<Candidat[]>('http://localhost:8080/SearchCandidacy/' + key);
  }
 }

