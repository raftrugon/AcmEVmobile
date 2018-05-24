import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DegreeService } from '../../providers/degree-service/degree-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

degrees: any[]=[]

  constructor(public navCtrl: NavController,public degreeService: DegreeService) {}

  ionViewDidLoad(){
      this.degreeService.getDegrees()
      .subscribe(
        (data) => { // Success
          this.degrees=data;
        },
        (error) =>{
          console.error(error);
        }
      )
    }
  }
