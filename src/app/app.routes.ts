import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { titleResolver } from './shared/utils/title.resolver';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Dictionary App",
        children: [
            {
                path: "details/:word",
                loadComponent: () => import('./features/word-details/word-details.component').then(c => c.WordDetailsComponent),
                title: titleResolver
            },
            {
                path: "details",
                redirectTo: "/",
                pathMatch: "full"
            },
        ],
    },
    {
        path: "**",
        loadComponent: () => import('./features/not-found/not-found.component').then(c => c.NotFoundComponent),
        title: 'Not Found'
    }
];
