module.exports = {
	siteMetadata: {
		siteUrl: `https://checkigusername.imedadel.me`,
	},
	plugins: [
		{
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
         features: [`fetch`]
      },
	 },
	 `gatsby-plugin-react-helmet`,
	 `gatsby-plugin-sitemap`,
	 {
		resolve: `gatsby-plugin-manifest`,
		options: {
			name: `Check Instagram Username`,
			short_name: `Check IG Username`,
			start_url: `/`,
			background_color: `#fff`,
			theme_color: `#000`,
			display: `standalone`,
			icon: `src/assets/icon.png`
		},
	},
	`gatsby-plugin-netlify`
	]
}