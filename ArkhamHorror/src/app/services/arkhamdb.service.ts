import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../model/Card';

@Injectable({
  providedIn: 'root'
})
export class ArkhamdbService {

  private readonly basepath = 'https://arkhamdb.com/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${this.basepath}public/cards/`);
  }

}
