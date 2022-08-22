import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchcontainerComponent } from './components/searchcontainer/searchcontainer.component';
import { UsersComponent } from './components/users/users.component';
import { SearchinfoComponent } from './components/searchinfo/searchinfo.component';
const routes: Routes = [
  { path: '', component: SearchcontainerComponent },
  { path: 'users', component: UsersComponent },
  { path: 'info', component: SearchinfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
