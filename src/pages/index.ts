import { HomePage } from './HomePage'
import { OurTeam } from './OurTeam'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/team',
    name: 'our team',
    component: OurTeam,
  },
]
