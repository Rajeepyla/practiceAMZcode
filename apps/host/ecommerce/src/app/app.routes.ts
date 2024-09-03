import { Route } from '@angular/router';

export const appRoutes: Route[] = [

    { path: 'profile', loadChildren: () => import('profile/Component').then((m) => m.ProfilePageModule) },
    {path:'products', loadChildren:()=>import('products/Component').then((m)=>m.ProductPageModule)}
];
