
import { Routes } from '@angular/router';

import { Accueil } from './pages/accueil/accueil';

export const routes: Routes = [
  { path: '', component: Accueil },

  { path: 'confiance', loadComponent: () =>
    import('./pages/confiance/confiance').then(m => m.Confiance)
  },

  { path: 'procrastination', loadComponent: () =>
    import('./pages/procrastination/procrastination').then(m => m.Procrastination)
  },

  { path: 'sport', loadComponent: () =>
    import('./pages/sport/sport').then(m => m.Sport)
  },

  { path: 'habitudes', loadComponent: () =>
    import('./pages/habitudes/habitudes').then(m => m.Habitudes)
  },

  { path: 'ressources', loadComponent: () =>
    import('./pages/ressources/ressources').then(m => m.Ressources)
  },

  { path: 'apropos', loadComponent: () =>
    import('./pages/apropos/apropos').then(m => m.Apropos)
  },

  { path: 'contact', loadComponent: () =>
    import('./pages/contact/contact').then(m => m.Contact)
  },

  { path: '**', redirectTo: '' }
];
