import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../providers/hero.service';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

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
    @Optional() @Inject(REQUEST) private req: any
  ) {
    console.log(req);
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
