module.exports = {
  siteMetadata: {
    title: 'Francis Whitehead | Web Developer - Javascript Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'nunito', 'poppins'
        ]
      }
    },
    {
      resolve:'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects',
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 480,
            },
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-copy-linked-files',
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 480,
      },
    },
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 250
      }
    }
  ],
}
