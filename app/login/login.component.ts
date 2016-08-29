/**
 * Created by Michael on 27/08/2016.
 */
import {Component} from "@angular/core";
import {NavigationService} from "../shared/navigation/navigation.service";
import {NavigationType} from "../shared/navigation/navigation.type";
import {Title} from "@angular/platform-browser";
import {AuthenticationService} from "../shared/authentication/authentication.service";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
    selector: 'login',
    templateUrl: "/app/login/login.component.html",
    styleUrls: ['app/login/login.component.css'],
    providers: [],
    directives: []
})

export class LoginComponent{

    constructor(title:Title, navigationService: NavigationService, public authenticationService: AuthenticationService, private router: Router) {
        title.setTitle("Comic Cloud - Login");
        navigationService.changeMode(NavigationType.Hidden);
    }
    
    login(event, username, password){
        event.preventDefault();

        this.authenticationService.login(username, password).subscribe(
            response => console.log("complete"),
            error => alert(error),
            complete => this.router.navigate(['/library'])
        );



    }


}