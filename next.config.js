const withImages = require('next-images')
const slug = require('rehype-slug')
const generateGuidebook = require('generate-guidebook/next')
const pkg = require('./package.json')

const { locales, defaultLocale } = pkg.guidebook.i18n

const withGuidebooks = nextConfig =>
  locales.reduce(
    (nextConfig, locale) =>
      generateGuidebook({
        guidebookDirectory:
          locale === defaultLocale ? './pages' : `./pages/${locale}`,
        guidebookModulePath: `./guidebook-${locale}.js`,
      })(nextConfig),
    nextConfig
  )

const withMDX = require('next-mdx-frontmatter')({
  extension: /\.mdx?$/,
  MDXOptions: {
    rehypePlugins: [slug],
  },
})

const withRawExampleLoader = nextConfig => ({
  ...nextConfig,
  webpack(config, options) {
    config.module.rules.push({
      test: /examples(\/|\\)files(\/|\\).*$/,
      use: 'raw-loader',
    })

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = withRawExampleLoader(
  withGuidebooks(
    withImages(
      withMDX({
        pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
      })
    )
  )
)
