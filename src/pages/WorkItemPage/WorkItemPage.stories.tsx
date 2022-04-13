import type { Meta, StoryFn } from '@storybook/vue3'
import { WorkItemPage } from '.'

const meta: Meta = {
  title: 'Pages/OurTeam',
  component: WorkItemPage,
}

export default meta

export const OurTeam: StoryFn = () => <WorkItemPage />
WorkItemPage.storyName = 'WorkItemPage'
