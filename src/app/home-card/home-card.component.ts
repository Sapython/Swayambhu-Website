import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {
quote="Money wont create success, the freedom to make it will.";
name="Nelson Mandela";
  constructor() {}

  ngOnInit(): void {
  }


}
