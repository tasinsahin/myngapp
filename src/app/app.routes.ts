import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'products',
        loadComponent: () =>
            import('@myangapp/modules/products').then(onfullfilled: (c) => c.ProductsComponent),
    }, 
    {
        path: 'orders',
        loadComponent: () => import('@myngapp/modules/orders').then(onfullfilled: (c) => c.OrdersComponent)
    }
];
