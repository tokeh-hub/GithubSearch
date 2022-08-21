import { Component, OnDestroy, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-searchinfo',
  templateUrl: './searchinfo.component.html',
  styleUrls: ['./searchinfo.component.css']
})
export class SearchinfoComponent implements OnInit,OnDestroy {
  subscription: Subscription
  username: string
  blog: string
  description: string
  email: string
  followers: number
  following: number
  image_url: string
  location: string
  repos: number
  twitter: string
  faLocation = faLocationArrow
  faLink = faLink
  faTwitter = faTwitter
  faMail = faMailBulk
  constructor(public uiservice: UiService) { }

  ngOnInit(): void {
    this.subscription = this.uiservice.getName().subscribe(value=>{
      this.username = value
    })
    this.subscription = this.uiservice.getBlog().subscribe(value=>{
      this.blog = value
    })
    this.subscription = this.uiservice.getDescription().subscribe(value=>{
      this.description = value
    })
    this.subscription = this.uiservice.getRepos().subscribe(value=>{
      this.repos = value
    })
    this.subscription = this.uiservice.getTwitter().subscribe(value=>{
      this.twitter = value
    })
    this.subscription = this.uiservice.getLocation().subscribe(value=>{
      this.location = value
    })
    this.subscription = this.uiservice.getFollowers().subscribe(value=>{
      this.followers = value
    })
    this.subscription = this.uiservice.getFollowing().subscribe(value=>{
      this.following = value
    })
    this.subscription = this.uiservice.getEmail().subscribe(value=>{
      this.email = value
    })
    this.subscription = this.uiservice.getImage().subscribe(value=>{
      this.image_url = value
    })
  }

  objectKeys(obj: any){
      return Object.keys(obj)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
