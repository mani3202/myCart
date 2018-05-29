/* modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatChipsModule,
  MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule,MatExpansionModule,MatRadioModule
 } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


/* components*/


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './routes/admin/admin.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { HttpModule } from '@angular/http';


/*services*/
import {GetproductsService} from './services/getproducts.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    SidemenuComponent,
    AddproductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatRippleModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatRadioModule,
    MatChipsModule,
    AppRoutingModule,
    HttpModule
    
  ],
  providers: [GetproductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
