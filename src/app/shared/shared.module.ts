import { RouterModule } from '@angular/router';
import { LocalService } from './services/local.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TostarComponent } from './components/tostar/tostar.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [NavbarComponent, TostarComponent, HomePageComponent],
  imports: [CommonModule, RouterModule],
  providers: [LocalService],
  exports: [TostarComponent, NavbarComponent],
})
export class SharedModule {}
