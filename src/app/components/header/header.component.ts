import { Component, OnInit } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() onSwitchTheme = new EventEmitter<any>();
  faSun = faSun;
  faMoon = faMoon;
  light: boolean;
  constructor(private uiService: UiService, private router: Router) {}

  ngOnInit(): void {}

  switchTheme() {
    this.light = !this.light;
    this.uiService.sendLight(this.light);
  }

  goHome(){
    this.router.navigate(["/home"])
  }
}
