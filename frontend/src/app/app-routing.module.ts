import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { EditNoticeComponent } from './edit-notice/edit-notice.component';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { NoticeComponent } from './notice/notice.component';
import { RouteguardService } from './service/routeguard.service';

const routes: Routes = [
  {path:'',loadChildren:()=>import("./auth/auth.module").then(p=>p.AuthModule)},
  {path:'notice',component:NoticeListComponent,canActivate:[RouteguardService]},
  {path:'add-notice',component:AddNoticeComponent,canActivate:[RouteguardService]},
  {path:'edit-notice/:id',component:EditNoticeComponent,canActivate:[RouteguardService]},
  {path:'notice/:id',component:NoticeComponent,canActivate:[RouteguardService]},
  {path:'**',redirectTo:'login',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
