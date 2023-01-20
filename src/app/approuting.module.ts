import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VilkoComponent } from './vilko/vilko.component';
import { LoginComponent } from './login/login.component';
import { MoreComponent } from './more/more.component';
import { EditComponent } from './edit/edit.component';
import { DdetailsComponent } from './ddetails/ddetails.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'vilko', component: VilkoComponent },
  { path: 'more', component: MoreComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'edit', component: EditComponent },
  { path: 'details', component: DdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
