import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../../core/services/auth.service';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { RegisterUser } from '../../../core/models/register.user';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  isSignedIn = false

  userRegisterFormGroup = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    username: new FormControl(''),
    host: new FormControl('')
  })

  constructor(private dialogRef: MatDialogRef<any>,
              private dialog: MatDialog,
              private _authService: AuthService) {
  }

  ngOnInit() {

  }

  registerUser() {
    this._authService.RegisterUser(this.userRegisterFormGroup.value as RegisterUser).pipe(
      tap(() => {
        alert('successfully register')
        this.userRegisterFormGroup.reset()
        this.dialogRef.close()
        this.dialog.open(LoginComponent, {
        })
      }),catchError(() => {
        alert('error while registering')
        return of({})
      })
    ).subscribe()
  }

  openLoginDialog() {
    this.dialogRef.close()

     this.dialog.open(LoginComponent, {

    })
  }
}
