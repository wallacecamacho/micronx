import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'layout',
      loadChildren: () => import('../../../micro-app-layout/src/lib/micro-app-layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'form',
      loadChildren: () => import('../../../micro-app-form/src/lib/micro-app-form.module')
        .then(m => m.FormsModule),
    },
    {
      path: '',
      redirectTo: 'layout',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
