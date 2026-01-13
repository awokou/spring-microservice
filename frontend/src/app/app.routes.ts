import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/student-list/student-list').then(c => c.StudentList),
        title: 'Liste des etudiants'
    },
];
