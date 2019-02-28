import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/MainView'
import SoundView from '@/components/soundModule/SoundView'
import TrackView from '@/components/trackModule/TrackView'
import EnvironmentView from '@/components/environmentModule/EnvironmentView'
import CalendarView from '@/components/calendarModule/CalendarView'
import StateView from '@/components/stateModule/StateView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/state',
      name: 'StateView',
      component: StateView
    },
    {
      path: '/sound',
      name: 'SoundView',
      component: SoundView
    },
    {
      path: '/tracks',
      name: 'TrackView',
      component: TrackView
    },
    {
      path: '/environment',
      name: 'EnvironmentView',
      component: EnvironmentView
    },
    {
      path: '/calendar',
      name: 'CalendarView',
      component: CalendarView
    }
  ]
})
