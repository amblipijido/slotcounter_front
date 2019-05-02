import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '.   Dashboard',
    icon: 'fas fa-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: '.   Cars',
    icon: 'fas fa-car',
    link: '/pages/cars',
  },
  {
    title: '.   Drivers',
    icon: 'fas fa-user-astronaut',
    link: '/pages/drivers',
  },
  {
    title: '.   SpeedWays',
    icon: 'fab fa-squarespace',
    link: '/pages/speedways',
  },
  {
    title: '.   Races',
    icon: 'fas fa-flag-checkered',
    link: '/pages/races',
  },
  {
    title: '.   Teams',
    icon: 'fas fa-users',
    link: '/pages/teams',
  },
];
