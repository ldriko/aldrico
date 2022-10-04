import LifeWriting from '../pages/writing/LifeWriting.vue'

export default [
  {
    path: '/writing',
    children: [
      {
        path: '/life',
        component: LifeWriting
      }
    ]
  }
]