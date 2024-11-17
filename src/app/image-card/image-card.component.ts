import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input() title:string="Default Value";
  @Input() subtitle:string="Default subtitle with text";
  @Input() url:string="./coming-soon"
  constructor() { }

  ngOnInit(): void {
  }

}
