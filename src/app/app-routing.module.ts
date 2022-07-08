import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./screens/login/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'email-sign-up',
    loadChildren: () => import('./screens/login/email-sign-up/email-sign-up.module').then( m => m.EmailSignUpPageModule)
  },
  {
    path: 'email-login',
    loadChildren: () => import('./screens/login/email-login/email-login.module').then( m => m.EmailLoginPageModule)
  },
  
  {
    path: 'personalize',
    loadChildren: () => import('./screens/personalize/personalize.module').then( m => m.PersonalizePageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./screens/discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'events-home',
    loadChildren: () => import('./screens/events-home/events-home.module').then( m => m.EventsHomePageModule)
  },
  {
    path: 'event-details-about',
    loadChildren: () => import('./screens/event-details/event-details-about/event-details-about.module').then( m => m.EventDetailsAboutPageModule)
  },
  {
    path: 'event-details-map',
    loadChildren: () => import('./screens/event-details/event-details-map/event-details-map.module').then( m => m.EventDetailsMapPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./screens/event-details/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  
  {
    path: 'planner',
    loadChildren: () => import('./screens/My-Activities/planner/planner.module').then( m => m.PlannerPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./screens/My-Activities/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
