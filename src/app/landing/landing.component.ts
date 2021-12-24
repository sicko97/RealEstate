import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegComponent } from '../dialog-reg/dialog-reg.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog , private router : Router) { }

  ngOnInit(): void {
  }


  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(DialogRegComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openBuyer() :void {
      this.router.navigate(['buyer']);
  }

}


