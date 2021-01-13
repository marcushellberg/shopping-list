import { Flow } from '@vaadin/flow-frontend/Flow';

const { serverSideRoutes } = new Flow({
  imports: () => import('../target/frontend/generated-flow-imports'),
});

export const routes = [
  // for client-side, place routes below (more info https://vaadin.com/docs/v18/flow/typescript/creating-routes.html)
  {
    path: '',
    component: 'main-view',
    action: async () => {
      await import('./views/main/main-view');
    },
    children: [
      {
        path: '',
        component: 'list-view',
        action: async () => {
          await import('./views/list/list-view');
        },
      },
      {
        path: 'list',
        component: 'list-view',
        action: async () => {
          await import('./views/list/list-view');
        },
      },
      {
        path: 'overview',
        component: 'overview-view',
        action: async () => {
          await import('./views/overview/overview-view');
        },
      },
      // for server-side, the next magic line sends all unmatched routes:
      ...serverSideRoutes, // IMPORTANT: this must be the last entry in the array
    ],
  },
];
