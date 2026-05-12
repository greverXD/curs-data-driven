import { i18n } from "./index"

const CIS_COUNTRIES = [
  'RU',
  'BY',
  'KZ',
  'UA',
  'UZ',
  'KG',
  'TJ',
  'AM',
  'AZ',
  'MD'
]

export const detectLocale = async () => {
  const savedLocale = localStorage.getItem('locale') as 'en' | 'ru' | null

  if (savedLocale) {
    i18n.global.locale.value = savedLocale
    return
  }

  try {
    // browser language
    const browserLang = navigator.language.toLowerCase()

    if (browserLang.startsWith('ru')) {
      i18n.global.locale.value = 'ru'
      return
    }

    // ip fallback
    const response = await fetch('https://ipwho.is/')
    const data = await response.json()

    const countryCode = data.country_code

    if (CIS_COUNTRIES.includes(countryCode)) {
      i18n.global.locale.value = 'ru'
    } else {
      i18n.global.locale.value = 'en'
    }

    localStorage.setItem('locale', i18n.global.locale.value)
  } catch (error) {
    console.error(error)

    i18n.global.locale.value = 'en'
  }
}