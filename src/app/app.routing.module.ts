import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './routes/admin/admin.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';

export const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthGuard],
        component: AdminComponent,
        children: [
            
             
                 { path: 'addProduct', component: AddproductComponent },
                 { path: 'updateProduct', component: UpdateproductComponent },
                // { path: '', redirectTo: 'employeeInfo',pathMatch: 'full' }
              
            
          ]
    },
    {
        path: '**',
        redirectTo: ''
    }
 ];
 
 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
 })
 export class AppRoutingModule { }
 
