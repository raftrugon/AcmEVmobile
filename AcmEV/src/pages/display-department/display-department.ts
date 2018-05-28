import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the DisplayDepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-display-department',
  templateUrl: 'display-department.html',
})
export class DisplayDepartmentPage {
  department:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    this.department=this.navParams.get("department");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayDepartmentPage');
  }


abrirURL(department:any){
  this.iab.create(this.department.website,"_system");
}

}
