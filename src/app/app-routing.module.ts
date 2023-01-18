import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { NONE_TYPE } from '@angular/compiler';
import { NonNullableFormBuilder } from '@angular/forms';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
