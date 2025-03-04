import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "details/:word",
                loadComponent: () => import('./features/word-details/word-details.component').then(c => c.WordDetailsComponent),
            },
        ],
    },
];
