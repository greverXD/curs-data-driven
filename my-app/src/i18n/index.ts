import { createI18n } from 'vue-i18n'
import ru from './locales/ru'
import en from './locales/en'

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    ru,
    en
  }
})