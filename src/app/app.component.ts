import { Component, Input, OnInit } from '@angular/core';
import { Directory } from 'src/models/MediaService';
import { Phone } from 'src/models/Phone';
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
  appPhone:Phone | null = null
  title = 'peoject';

  directory : Directory = data()
  newDirectory = {...this.directory}

  setEmail(email:string) {
    this.email = email
  }

  setPhone(phone: Phone) {
    this.appPhone = phone
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

  searchFnc(evt:any) {
    const q = evt.target.value.toLowerCase()
    const searchDirectories = this.directory.childrenUidDirectories
    const newsearchDirectories = searchDirectories.filter(item => item.label.toLocaleLowerCase().includes(q))
    this.newDirectory.childrenUidDirectories = newsearchDirectories

    const childrenMedias = this.directory.childrenMedias
    const newChildrenMedias = childrenMedias.filter(item => item.label.toLocaleLowerCase().includes(q))
    this.newDirectory.childrenMedias = newChildrenMedias
  }

  

}
