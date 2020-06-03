import { Component, OnInit } from '@angular/core';
import { ArkhamdbService } from '../services/arkhamdb.service';
import { Card } from '../model/Card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less']
})
export class CardsComponent implements OnInit {

  cards: Card[];

  constructor(
    private arkhamdbService: ArkhamdbService
  ) { }

  async ngOnInit(): Promise<void> {
    this.cards = await this.arkhamdbService.getAllCards().toPromise();
  }

}
