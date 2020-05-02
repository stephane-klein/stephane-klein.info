module.exports = {
    siteMetadata: {
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Stéphane Klein, Software Craftsman, Table Tennis player",
                short_name: "Stéphane Klein - Home Page",
                start_url: "/",
                background_color: "white",
                theme_color: "black",
                display: "standalone",
                icon: "src/images/avatar-stephane-klein.jpg",
                include_favicon: true
            }
        }
    ]
};
