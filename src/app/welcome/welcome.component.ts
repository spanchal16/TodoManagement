import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  welcomeMsg : string = "";

  constructor(private welcomeDataService : WelcomeDataService) {

  }

  getWelcomeMsg() {
    this.welcomeDataService.executeWelcomeMsg().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMsg = response.message;
  }
}
