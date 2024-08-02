import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {BlogModule} from "./blog/blog.module";
import {NotFoundComponent} from "./pages/error/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    title: "Welcome to my Portfolio",
    component: HomeComponent,
  },
  {
    path: 'about',
    title: "About Me",
    component: AboutComponent,
  },
  {
    path: 'contact',
    title: "Contact Me",
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogModule
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
