module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  proseWrap: 'always',
  tabWidth: 2,
  printWidth: 120,
  importOrder: [
    '^api/(.*)$',
    '^font/(.*)$',
    '^i18n/(.*)$',
    '^constants/(.*)$',
    '^components/core/(.*)$',
    '^components/common/(.*)$',
    '^components/layouts/(.*)$',
    '^pages/(.*)$',
    '^routes/(.*)$',
    '^data/(.*)$',
    '^mock/(.*)$',
    '^libs/(.*)$',
    '^hooks/(.*)$',
    '^services((/(.*))||())$',
    '^stores((/(.*))||())$',
    '^exceptions/(.*)$',
    '^utils/(.*)$',
    '^types/(.*)$',
    '^views/(.*)$',
    '^themes/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: false,
}
