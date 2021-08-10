import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventResolver } from "./core/event-resolver";
import { EventListComponent } from "./event-list/event-list.component";

const routes: Routes = [
  {
    path: "",
    component: EventListComponent

  },
  {
      path: 'events/:id',
      loadChildren: (() => import('./event-detail/event-detail.module').then(m => m.EventDetailModule)),
      resolve: {
          event: EventResolver
      }
  },
  {
      path: "**",
      redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
