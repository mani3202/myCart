import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() isSidenav = new EventEmitter<boolean>();

  constructor(public router:Router) { }
  sidenav()
  {
    this.isSidenav.emit(true);
  }

  logout()
  {
    localStorage.clear();
    this.router.navigateByUrl('/login')

  }
  ngOnInit() {
  }

}
