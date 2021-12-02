import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCreationComponent } from './movie-creation/movie-creation.component';

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-creation', component: MovieCreationComponent },
  { path: '**', redirectTo: 'movie-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
