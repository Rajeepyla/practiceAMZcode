import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
  RouterModule.forChild([{
      path:'', component:ProfileComponent
    }])
  ],
 
})
export class ProfilePageModule { }
