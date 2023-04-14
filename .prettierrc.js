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
    '^layouts/(.*)$',
    '^components/core/(.*)$',
    '^components/common/(.*)$',
    '^components/hocs/(.*)$',
    '^pages/(.*)$',
    '^guards/(.*)$',
    '^icons/(.*)$',
    '^routes/(.*)$',
    '^data/(.*)$',
    '^mock/(.*)$',
    '^libs/(.*)$',
    '^hooks/(.*)$',
    '^services((/(.*))||())$',
    '^store((/(.*))||())$',
    '^contexts((/(.*))||())$',
    '^exceptions/(.*)$',
    '^utils/(.*)$',
    '^types((/(.*))||())$',
    '^views/(.*)$',
    '^stories/(.*)$',
    '^themes((/(.*))||())$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: false,
}
