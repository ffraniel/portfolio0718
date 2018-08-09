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
    'gatsby-transformer-remark'
  ],
}
