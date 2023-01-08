import { LocalService } from 'src/app/shared/services/local.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private localService: LocalService) {}

  ngOnInit(): void {
    this.isLoggedIn = Boolean(this.localService.getData('token'));
  }

  logout() {
    this.localService.removeData('token');
    this.isLoggedIn = false;
  }
}
