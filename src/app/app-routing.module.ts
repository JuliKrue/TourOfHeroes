import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

//Route hat 2 Eigenschaften: Path und Component. Path = String gleich der URL im Browser (z.B. .../.../heroes), Component = Aufgerufene Komponente der Route
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

//Initialisiert Router, Überwaacht Browser. forRoot: Router wird auf Root Level konfiguriert
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }