import { Component, Input, OnInit } from '@angular/core';
import { Directory } from 'src/models/MediaService';
import { cal1, cal2, cal3 } from 'src/utils/Action';
import { data } from 'src/utils/Result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appDatas = {name : "Ali", surname: "Bilmem"}
  email:string = ""
  title = 'peoject';

  directory : Directory = data()

  setEmail(email:string) {
    this.email = email
  }

  constructor() {
    cal1().then(r1 => {
      cal2().then(r2 => {
        cal3().then(r3 => {
          console.log("All Call Finish!!")
        })
      })
    })
    console.log("this line call")
  }

  ngOnInit(): void {
    //console.log("Call - 2") 
  }

  

}
