import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventResolver } from "./core/event-resolver";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { EventListComponent } from "./event-list/event-list.component";

const routes: Routes = [
  {
    path: "",
    component: EventListComponent

  },
  {
      path: 'events/:id',
      component: EventDetailComponent,
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
