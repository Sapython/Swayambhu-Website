import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {
  @Input() title:string="Default Value";
  @Input() subtitle:string="Default subtitle with text";
  @Input() url:string="./coming-soon"
  constructor() { }

  ngOnInit(): void {
  }

}
