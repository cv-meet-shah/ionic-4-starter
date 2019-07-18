import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnboardGuard } from './guards/onboard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'onboard', pathMatch: 'full' },
  { path: 'onboard', loadChildren: './pages/onboard/onboard.module#OnboardPageModule', canActivate: [OnboardGuard] },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
