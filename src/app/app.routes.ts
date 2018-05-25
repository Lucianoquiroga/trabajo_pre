import { RouterModule, Routes } from '@angular/router';
const APP_ROUTES: Routes = [
   // { path: 'home', component:},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });

