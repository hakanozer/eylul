import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phone } from 'src/models/Phone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  datas!: {name: string, surname: string}

  @Output()
  sendEvent = new EventEmitter<string>()

  @Output()
  phoneEvent = new EventEmitter<Phone>()

  fncSend(email: string) {
    console.log(this.datas.name)
    console.log(email)
    this.sendEvent.emit(email)
  }

  constructor() { }

  ngOnInit(): void {
    const phone:Phone = {
      id: parseInt(""+Math.random() * 100),
      tel: 'iPhone X'
    }
    this.phoneEvent.emit(phone)
  }

}
