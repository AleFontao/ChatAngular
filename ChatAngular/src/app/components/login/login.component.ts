import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl('',[
        Validators.email, Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(6), Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }


  loginIn(){
    this.userService.loginIn(this.formReg.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/']);
    })
    .catch(error => console.log(error));
  }
}
