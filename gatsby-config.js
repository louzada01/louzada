const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Louzada',
    position: 'This a position',
    description: 'This is a description about.',
    author: 'Louzada',
    siteURL: 'https://louzada.netlify.app/',
    contact: [
      {
        label: 'Instagram',
        linkTo: 'https://instagram.com/rootlouzada',
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
        label: 'Email',
        linkTo: 'mailto:rootlouzada@gmail.com',
      },
      {
        label: 'IO-Talks',
        linkTo: 'https://iotalks.com.br/',
      },
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
