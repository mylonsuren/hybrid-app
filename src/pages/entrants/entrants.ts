import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HttpClientModule} from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Ng2OrderModule } from 'ng2-order-pipe';

// import { StatsPage } from '../stats/stats';
import { EntrantprofilePage }from '../entrantprofile/entrantprofile';

import { LoadingController } from 'ionic-angular';



/**
 * Generated class for the EntrantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrants',
  templateUrl: 'entrants.html',
})
export class EntrantsPage {

  entrants: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,  public zone: NgZone, public loadingCtrl: LoadingController) {
  }


  goToProfilePage(entrant) {
    this.navCtrl.push(EntrantprofilePage, {
        param1: entrant
    });
  }

  // presentLoading() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 3000
  //   });
  //   loader.present();
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrantsPage');

    this.entrants = [];

    this.http.get('https://api.mlab.com/api/1/databases/shabba-championship/collections/entrants?apiKey=LsLTrgh9YNAnjrItyn7MYJKmzXKt7nqb')
      .map(res => res.json())

      .subscribe(data => {
        console.log(data);
        // this.zone.run(() => this.entrants = data);
        this.entrants = data;

      });
  }

}
