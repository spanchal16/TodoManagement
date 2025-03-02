import { Component } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private hardCodedAuthenticationService : HardCodedAuthenticationService) {
    hardCodedAuthenticationService.logout();
  } 
}
