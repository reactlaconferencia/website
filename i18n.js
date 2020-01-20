const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  browserLanguageDetection: true,
  defaultLanguage: 'es',
  otherLanguages: ['en'],
});
