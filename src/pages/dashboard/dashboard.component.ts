import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../providers/hero.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  users: any = [];
  constructor(
    private heroService: HeroService,
    @Optional() @Inject('REQUEST') private newReq: any,
    private cookieService: CookieService
  ) {
    this.cookieService.put('universe', 'am the danger');
    console.log('All cookies:', this.cookieService.getAll());
    if (newReq) {
      console.log('New Request:', newReq.headers);
    }
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  }

  getUsers(): void {
    this.heroService.getUsers().subscribe(users => (this.users = users.data));
  }
}
