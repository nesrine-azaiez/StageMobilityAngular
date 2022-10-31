import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from '../common/app.constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;


  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    // tslint:disable-next-line:indent
	const token: string = this.route.snapshot.queryParamMap.get('token');
    // tslint:disable-next-line:indent
	const error: string = this.route.snapshot.queryParamMap.get('error');
    // tslint:disable-next-line:indent
 if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
    } else if
  (token){
   // tslint:disable-next-line:indent

        this.tokenStorage.saveToken(token);
   // tslint:disable-next-line:indent
  		    this.userService.getCurrentUser().subscribe(
            // tslint:disable-next-line:indent
  		      data => {
              // tslint:disable-next-line:indent
  		        this.login(data);
              // tslint:disable-next-line:indent
  		      },
            // tslint:disable-next-line:indent
  		      err => {
              // tslint:disable-next-line:indent
  		        this.errorMessage = err.error.message;
              // tslint:disable-next-line:indent
  		        this.isLoginFailed = true;
              // tslint:disable-next-line:indent
  		      }
            // tslint:disable-next-line:indent
  		      );
   // tslint:disable-next-line:indent
  	}
 // tslint:disable-next-line:indent
  	else if (error){
   // tslint:disable-next-line:indent
  		this.errorMessage = error;
   // tslint:disable-next-line:indent
	   this.isLoginFailed = true;
   // tslint:disable-next-line:indent
  	}
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.login(data.user);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  login(user): void {
    // tslint:disable-next-line:indent
	this.tokenStorage.saveUser(user);
    // tslint:disable-next-line:indent
	this.isLoginFailed = false;
    // tslint:disable-next-line:indent
	this.isLoggedIn = true; // tslint:disable-next-line:indent
	this.currentUser = this.tokenStorage.getUser(); window.location.reload();
  }

}
