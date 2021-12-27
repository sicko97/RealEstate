import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRegComponent } from '../dialog-reg/dialog-reg.component';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { Router } from '@angular/router';


export interface DialogData{
  username  : String;
  password : String;
}



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  passedValues : object;
  username :String;
  password: String;

  constructor(public dialog: MatDialog , private router : Router) { }

  ngOnInit(): void {
  }

//Registration

  openRegistrationDialog(): void {
    const dialogRegRef = this.dialog.open(DialogRegComponent, {

    });

    dialogRegRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


//Login

openLoginDialog(): void {
  const dialogLoginRef = this.dialog.open(DialogLoginComponent, {
    
    data : {username: this.username , password : this.password}
  });

  dialogLoginRef.afterClosed().subscribe(result =>{
    console.log("The dialog was closed");
    this.username = result.username;
    this.password = result.password;
    alert(this.username);
  })

}



  openBuyer() :void {
      this.router.navigate(['buyer']);
  }

}


