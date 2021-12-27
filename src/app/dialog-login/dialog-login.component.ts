import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../landing/landing.component';


@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<DialogLoginComponent> ,
    @Inject(MAT_DIALOG_DATA) public data : DialogData,
    ) { }

    onNoClick() : void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }
}
