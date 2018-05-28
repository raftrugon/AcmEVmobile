import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DegreeServiceProvider } from '../../providers/degree-service/degree-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
degrees: any[]=[];
  constructor(public navCtrl: NavController,public degreeService: DegreeServiceProvider) {

  }
  ionViewDidLoad(){
      this.degreeService.getDegrees()
      .subscribe(
        (data) => { // Success
          this.degrees=data;
          console.log(this.degrees[1].name)
        },
        (error) =>{
          console.error(error);
        }
      )
    }
}
