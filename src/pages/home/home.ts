import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  modals: object[];

  constructor(public navCtrl: NavController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrantsPage');

    this.modals = [
      {
        title: 'Latest',
        linkTo: ''
      }
    ]

    // this.http.get('https://api.mlab.com/api/1/databases/shabba-championship/collections/entrants?apiKey=LsLTrgh9YNAnjrItyn7MYJKmzXKt7nqb')
    //   .map(res => res.json())
    //
    //   .subscribe(data => {
    //     console.log(data);
    //     // this.zone.run(() => this.entrants = data);
    //     this.entrants = data;
    //
    //   });
  }

}
