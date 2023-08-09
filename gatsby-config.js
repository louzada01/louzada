const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Louzada',
    description: 'louzada01.',
    author: 'Louzada',
    siteURL: 'https://louzada.me/',
    twitterUsername: 'uailouzin',
    contact: [
      {
        label: 'He4rt Developers',
        linkTo: 'https://heartdevs.com/',
      },
      {
        label: 'Instagram',
        linkTo: 'https://instagram.com/uailouzin',
      },
      {
        label: 'Spotify',
        linkTo:
          'https://open.spotify.com/user/12173950264?si=5YjFHGjGRf2YP59CX9fJEQ',
      },
      {
        label: 'GitHub',
        linkTo: 'https://github.com/louzada01',
      },
      {
        label: 'Linkedin',
        linkTo: 'https://www.linkedin.com/in/joao-louzada/',
      },
      {
        label: 'Twitter',
        linkTo: 'https://twitter.com/uailouzin',
      },
      {
        label: 'Reunião',
        linkTo: 'https://calendar.app.google/Vd1pmF8oDRerVfpc6'
      }
    ],
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src/,
        },
      },
    },
  ],
};
