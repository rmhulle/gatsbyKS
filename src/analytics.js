/* analytics.js */
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import googleTagManager from '@tegrus/analytics-plugin-google-tag-manager'
import hotjarPlugin from '@tegrus/analytics-plugin-hotjar'


// TODO Instalar o noScript do TagManager.

const analytics = Analytics({
  app: 'GatsbyKS',
  debug: true,
  plugins: [
      googleAnalytics({
      trackingId: "UA-162002963-1",
    }), //GTM-KZ2JGCN
      googleTagManager({
      containerId: 'GTM-KZ2JGCN',
      assumesPageview: true,
      debug: false
    }),
      hotjarPlugin({
      siteId: '1747839',
      debug: false,
      sv: 6,
      pageViewMode:'vpv' 
    })
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