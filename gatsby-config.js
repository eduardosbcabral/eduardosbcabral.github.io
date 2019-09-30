/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Eduardo Cabral',
    titleTemplate: '%s - Full Stack Web Developer',
    description: 'Full stack web developer',
    twitterUsername: '@theduardds',
    url: '',
    image: '/images/ec.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-react-helmet'
    }
  ]
}
