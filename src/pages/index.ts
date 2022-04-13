import { HomePage } from './HomePage'
import { OurTeam } from './OurTeam'
import { WorkItemPage } from './WorkItemPage'
import { WorkPage } from './WorkPage'

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
  {
    path: '/work',
    name: 'work',
    component: WorkPage,
  },
  {
    path: '/work-item',
    name: 'work item',
    component: WorkItemPage,
  },
]
