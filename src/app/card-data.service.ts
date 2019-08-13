import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {CardData} from './card-data';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  private path: string;

  constructor(private http: HttpClient) {
    this.path = environment.serverURL + '/api/carddata/';
  }

  public index(): Observable<CardData[]> {
    return this.http.get<CardData[]>(this.path);
  }

  public get(id: number): Observable<CardData> {
    return this.http.get<CardData>(this.path + id);
  }

  public post(cardData: CardData, userId: number): Observable<CardData> {
    return this.http.post<CardData>(this.path + userId, cardData);
  }

  public put(id: number, cardData: CardData): Observable<CardData> {
    return this.http.put<CardData>(this.path + id, cardData);
  }

  public delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.path + id);
  }
}
