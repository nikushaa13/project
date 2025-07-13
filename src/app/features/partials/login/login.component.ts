import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../../../core/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginUser } from '../../../core/models/login.user.model';
import { catchError, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm = new  FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private _dialogRef: MatDialogRef<any>,
              private _dialog: MatDialog,
              private _toastr: ToastrService,
              private _authService: AuthService) {
  }

  ngOnInit() {
  }

  loginUser() {
    this._authService.loginUser(this.loginForm.value as LoginUser).pipe(
      tap((response) => {
        localStorage.setItem('token', response.accessToken)
        localStorage.setItem('username', response.user.username)
        this._authService.isLoggedIn = true
        this._dialogRef.close()
        this._toastr.success('Successfully Login')
      }),
      catchError(() => {
        return of (this._toastr.error('invalid email or password'))
      })
    ).subscribe()
  }


  openRegisterDialog() {
    this._dialogRef.close()

    this._dialog.open(RegisterComponent)
  }
}
