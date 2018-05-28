import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DepartmentServiceProvider } from '../../providers/department-service/department-service';
import { DisplayDepartmentPage } from '../display-department/display-department';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  departments: any[]=[];
  displayDepartments:any=DisplayDepartmentPage;

  constructor(public navCtrl: NavController,public departmentService: DepartmentServiceProvider) {}

      ionViewDidLoad(){
          this.departmentService.getDepartments()
          .subscribe(
            (data) => { // Success
              this.departments=data;
              //console.log(this.degrees[1].name)
            },
            (error) =>{
              console.error(error);
            }
          )
        }

        itemTapped(department:any) {
          // That's right, we're pushing to ourselves!
          this.navCtrl.push(this.displayDepartments, {'department':department});
        }
}
