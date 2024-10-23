module.exports = {
    plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-organize-imports'), require.resolve('prettier-plugin-organize-attributes'), require.resolve('prettier-plugin-astro-organize-imports'), require.resolve('prettier-plugin-css-order')],

    tabWidth: 4,
    useTabs: false,
    printWidth: 1000,
    proseWrap: 'never',
    singleQuote: true,
    semi: true,
    trailingComma: 'none',

    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        },
        {
            files: '*.mjs',
            options: {
                parser: 'babel'
            }
        },
        {
            files: '*.mdx',
            options: {
                parser: 'mdx'
            }
        }
    ]
};
