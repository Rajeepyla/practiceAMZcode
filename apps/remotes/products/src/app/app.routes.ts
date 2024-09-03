import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path:'', loadChildren:()=>import('./product-page/product-page.module').then((m)=>m.ProductPageModule)}
];
