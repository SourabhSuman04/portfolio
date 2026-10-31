import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog-detail', component: BlogDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'index.html', redirectTo: '', pathMatch: 'full' },
  { path: 'about.html', redirectTo: 'about', pathMatch: 'full' },
  { path: 'services.html', redirectTo: 'services', pathMatch: 'full' },
  { path: 'resume.html', redirectTo: 'resume', pathMatch: 'full' },
  { path: 'projects.html', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'blogs.html', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'blog-detail.html', redirectTo: 'blog-detail', pathMatch: 'full' },
  { path: 'contact.html', redirectTo: 'contact', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
