/* analytics.js */
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

// ... whatever analytics provider you use

const analytics = Analytics({
  app: 'GatsbyKS',
  debug: true,
  plugins: [
     googleAnalytics({
      trackingId: "UA-162002963-1",
    }),
  ]
})


analytics.on('page', ({ payload }) => {
  console.log('page view fired', payload)
})

analytics.on('track', ({ payload }) => {
  console.log('track', payload)
})

// Set to global so Gatsby analytics plugin will work
if (typeof window !== 'undefined') {
  window.Analytics = analytics
}

export default analytics