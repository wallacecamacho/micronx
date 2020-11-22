import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('../../../../libs/pages/src/lib/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
