import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntrantprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrantprofile',
  templateUrl: 'entrantprofile.html',
})
export class EntrantprofilePage {

  entrant: object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.entrant = this.navParams.get('param1');
      console.log(this.entrant);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrantprofilePage');


      console.log(this.entrant);


  }

}
