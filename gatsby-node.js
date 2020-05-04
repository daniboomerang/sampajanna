// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const locales = ['es', 'en'];

  // Create index about and 404 pages
  locales.forEach((locale) => {
    const prefix = locale === 'en' ? '' : `/${locale}`;

    createPage({
      path: `${prefix}/`,
      component: path.resolve('./src/templates/index.tsx'),
      context: { locale },
    });

    createPage({
      path: `${prefix}/about`,
      component: path.resolve('./src/templates/about.tsx'),
      context: { locale },
    });

    createPage({
      path: `${prefix}/404`,
      matchPath: `${prefix}/*`,
      component: path.resolve('./src/templates/404Template.tsx'),
      context: { locale },
    });
  });

  await Promise.all(
    locales.map((locale) =>
      graphql(`
        {
          posts: allDatoCmsPost(filter: {locale: { eq: "${locale}" } }) {
            edges {
              node {
                title
                slug
                locale
              }
            }
          }
        }
      `).then((result) => {
        result.data.posts.edges.forEach((item) => {
          const prefix = locale === 'en' ? '' : `/${locale}`;
          const {
            node: { slug },
          } = item;
          const postPath = `${prefix}/posts/${slug}`;

          createPage({
            path: postPath,
            component: path.resolve('./src/templates/post.tsx'),
            context: {
              slug,
              locale,
            },
          });
        });
      })
    )
  );
};
