import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './components/register-page/register-page.component';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
})
export class RegisterModule {}
