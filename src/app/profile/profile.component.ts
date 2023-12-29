import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private keyCloak: KeycloakService) {}

  user = '';
  ngOnInit(): void {
    this.function1();
  }
  function1() {
    this.user = this.keyCloak.getUsername();
  }

  logout() {
    this.keyCloak.logout();
  }
}
