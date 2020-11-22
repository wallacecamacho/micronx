import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/app/layout/stepper',
      },
      {
        title: 'List',
        link: '/app/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/app/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/app/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/app/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/app/form/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/app/form/layouts',
      },
      {
        title: 'Buttons',
        link: '/app/form/buttons',
      },
      {
        title: 'Datepicker',
        link: '/app/form/datepicker',
      },
    ],
  },
];
