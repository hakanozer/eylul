import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  fncSend(email: string) {
    console.log(this.datas.name)
    console.log(email)
    this.sendEvent.emit(email)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
