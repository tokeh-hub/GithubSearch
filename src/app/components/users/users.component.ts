import { Component, OnDestroy, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { User } from 'user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { UnitInfo } from 'unitInfo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnDestroy, OnInit {
  users: User[] = [];
  text: string;
  current_page: number = 1;
  perPage = 8;
  total = 0;
  subscription: Subscription;
  username: string;
  blog: any;
  followers: number;
  following: number;
  image_url: any;
  repos: number;
  location: string;
  description: string;
  twitter: string;
  email: string;
  myObj: UnitInfo[] = [];

  constructor(
    public uiService: UiService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.uiService.getText().subscribe((val) => {
      this.text = val;
    });
    this.subscription = this.uiService.getValue().subscribe((val) => {
      this.users = val.items;
      this.total = val.total_count;
    });
  }

  getUsers() {
    this.searchService
      .getUsers(this.text, this.current_page, this.perPage)
      .subscribe((response) => {
        this.users = response.items;
        this.total = response.total_count;
      });
  }

  searchInfo(login: string) {
    this.searchService.getUserInfo(login).subscribe((val) => {
      this.uiService.sendName(val.name ? val.name : val.login);
      this.uiService.sendBlog(val.blog ? val.blog : 'Nil');
      this.uiService.sendFollowers(val.followers);
      this.uiService.sendFollowing(val.following);
      this.uiService.sendImage(val.avatar_url);
      this.uiService.sendRepos(val.public_repos);
      this.uiService.sendLocation(val.location ? val.location : 'Nil');
      this.uiService.sendDescription(
        val.bio ? val.bio : 'This profile has no bio'
      );
      this.uiService.sendTwitter(
        val.twitter_username ? val.twitter_username : 'Nil'
      );
      this.uiService.sendEmail(val.email ? val.email : 'Nil');
      this.router.navigate(['/info']);
    });
  }

  public onGoTo(page: number): void {
    this.current_page = page;
    this.getUsers();
  }

  public onNext(page: number): void {
    this.current_page = page + 1;
    this.getUsers();
  }
  public onPrevious(page: number): void {
    this.current_page = page - 1;
    this.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
