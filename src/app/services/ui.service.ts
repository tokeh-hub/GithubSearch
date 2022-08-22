import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  light: boolean;
  private subject = new BehaviorSubject<any[]>([]);
  private nameSubject = new BehaviorSubject<string>('');
  private emailSubject = new BehaviorSubject<string>('');
  private twitterSubject = new BehaviorSubject<string>('');
  private locationSubject = new BehaviorSubject<string>('');
  private descriptionSubject = new BehaviorSubject<string>('');
  private followersSubject = new BehaviorSubject<number>(0);
  private followingSubject = new BehaviorSubject<number>(0);
  private reposSubject = new BehaviorSubject<number>(0);
  private blogSubject = new BehaviorSubject<string>('');
  private imageSubject = new BehaviorSubject<string>('');
  private text = new BehaviorSubject<string>('');
  private lightSubject = new BehaviorSubject<boolean>(false);

  sendLight(light: boolean) {
    this.lightSubject.next(light);
  }

  getLight(): Observable<boolean> {
    return this.lightSubject.asObservable();
  }

  sendText(str: string) {
    this.text.next(str);
  }

  getText(): Observable<string> {
    return this.text.asObservable();
  }

  sendValue(obj: any) {
    this.subject.next(obj);
  }

  sendName(name: string) {
    this.nameSubject.next(name);
  }

  getName(): Observable<any> {
    return this.nameSubject.asObservable();
  }

  sendEmail(email: string) {
    this.emailSubject.next(email);
  }

  getEmail(): Observable<any> {
    return this.emailSubject.asObservable();
  }

  sendFollowers(followers: number) {
    this.followersSubject.next(followers);
  }

  getFollowers(): Observable<any> {
    return this.followersSubject.asObservable();
  }
  sendFollowing(following: number) {
    this.followingSubject.next(following);
  }

  getFollowing(): Observable<any> {
    return this.followingSubject.asObservable();
  }
  sendRepos(repos: number) {
    this.reposSubject.next(repos);
  }

  getRepos(): Observable<any> {
    return this.reposSubject.asObservable();
  }
  sendLocation(location: string) {
    this.locationSubject.next(location);
  }

  getLocation(): Observable<any> {
    return this.locationSubject.asObservable();
  }
  sendTwitter(twitter: string) {
    this.twitterSubject.next(twitter);
  }

  getTwitter(): Observable<any> {
    return this.twitterSubject.asObservable();
  }
  sendDescription(description: string) {
    this.descriptionSubject.next(description);
  }

  getDescription(): Observable<any> {
    return this.descriptionSubject.asObservable();
  }
  sendBlog(blog: string) {
    this.blogSubject.next(blog);
  }

  getBlog(): Observable<any> {
    return this.blogSubject.asObservable();
  }
  sendImage(image: string) {
    this.imageSubject.next(image);
  }

  getImage(): Observable<any> {
    return this.imageSubject.asObservable();
  }

  getValue(): Observable<any> {
    return this.subject.asObservable();
  }
}
