import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegComponent } from '../dialog-reg/dialog-reg.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }


  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(DialogRegComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
 
    });
  }
}


