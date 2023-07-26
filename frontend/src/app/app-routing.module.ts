import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { NoticeListComponent } from './notice-list/notice-list.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import("./auth/auth.module").then(p=>p.AuthModule)},
  {path:'notice-list',component:NoticeListComponent},
  {path:'add-notice',component:AddNoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
