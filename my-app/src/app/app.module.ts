import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonalComponent } from './personal/personal.component';
import { ResourcesComponent } from './resources/resources.component';

const routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'personal', component: PersonalComponent
  },
  {
    path: 'resources', component: ResourcesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    ProjectsComponent,
    PersonalComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
