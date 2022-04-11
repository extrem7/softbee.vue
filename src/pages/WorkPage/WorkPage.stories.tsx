import type { Meta, StoryFn } from '@storybook/vue3'
import { WorkPage } from '.'

const meta: Meta = {
  title: 'Pages/OurTeam',
  component: WorkPage,
}

export default meta

export const OurTeam: StoryFn = () => <WorkPage />
WorkPage.storyName = 'WorkPage'
