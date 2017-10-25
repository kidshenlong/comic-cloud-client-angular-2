import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/nav/shared/nav.service';
import { NavState } from '../core/nav/shared/nav-state.enum';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.navState = NavState.Authorised;

  }

}