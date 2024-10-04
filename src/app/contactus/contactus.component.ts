import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SendmailService } from '../Service/sendmail.service';
declare let $: any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


  constructor(public mainserv:SendmailService) { }

  ngOnInit(): void {
  }

  swal(title:any, text:any, icon:any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text
    });
  }

  onsubmit(){
    let name=$('#name').val();
    let mobile=$('#phone').val();
    let email=$('#email').val();
    let message=$('#message').val();
    let object ={
      name:name,
      email:email,
      phone:mobile,
      message:message
    }
    this.mainserv.sendmail(object).subscribe((data:any) => {
      this.swal('Success', 'Tahnk You !!', 'success');
    },(error:any)=>{
      this.swal('Oops !!', 'Something Wnnt Wrong', 'error');
    });
  }

}
