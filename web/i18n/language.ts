export type Item = {
  value: number | string
  name: string
  example: string
}

export type I18nText = {
  'en-US': string
  'zh-Hans': string
  'pt-BR': string
  'es-ES': string
  'fr-FR': string
  'de-DE': string
  'ja-JP': string
  'ko-KR': string
  'ru-RU': string
  'it-IT': string
  'uk-UA': string
  'vi-VN': string
  'de_DE': string
}

export const languages = [
  {
    value: 'en-US',
    name: 'English (United States)',
    example: 'Hello, AIs!',
    supported: true,
  },
  {
    value: 'zh-Hans',
    name: '简体中文',
    example: '你好，AIs！',
    supported: true,
  },
  {
    value: 'pt-BR',
    name: 'Português (Brasil)',
    example: 'Olá, AIs!',
    supported: true,
  },
  {
    value: 'es-ES',
    name: 'Español (España)',
    example: 'Saluton, AIs!',
    supported: false,
  },
  {
    value: 'fr-FR',
    name: 'Français (France)',
    example: 'Bonjour, AIs!',
    supported: true,
  },
  {
    value: 'de-DE',
    name: 'Deutsch (Deutschland)',
    example: 'Hallo, AIs!',
    supported: true,
  },
  {
    value: 'ja-JP',
    name: '日本語 (日本)',
    example: 'こんにちは、AIs!',
    supported: true,
  },
  {
    value: 'ko-KR',
    name: '한국어 (대한민국)',
    example: '안녕, AIs!',
    supported: false,
  },
  {
    value: 'ru-RU',
    name: 'Русский (Россия)',
    example: ' Привет, AIs!',
    supported: false,
  },
  {
    value: 'it-IT',
    name: 'Italiano (Italia)',
    example: 'Ciao, AIs!',
    supported: false,
  },
  {
    value: 'th-TH',
    name: 'ไทย (ประเทศไทย)',
    example: 'สวัสดี AIs!',
    supported: false,
  },
  {
    value: 'id-ID',
    name: 'Bahasa Indonesia',
    example: 'Saluto, AIs!',
    supported: false,
  },
  {
    value: 'uk-UA',
    name: 'Українська (Україна)',
    example: 'Привет, AIs!',
    supported: true,
  },
  {
    value: 'vi-VN',
    name: 'Tiếng Việt (Việt Nam)',
    example: 'Xin chào, AIs!',
    supported: true,
  },
]

export const LanguagesSupported = languages.filter(item => item.supported).map(item => item.value)

export const getLanguage = (locale: string) => {
  if (locale === 'zh-Hans')
    return locale.replace('-', '_')

  return LanguagesSupported[0].replace('-', '_')
}

export const NOTICE_I18N = {
  title: {
    en_US: 'Important Notice',
    zh_Hans: '重要公告',
    pt_BR: 'Aviso Importante',
    es_ES: 'Aviso Importante',
    fr_FR: 'Avis important',
    de_DE: 'Wichtiger Hinweis',
    ja_JP: '重要なお知らせ',
    ko_KR: '중요 공지',
    uk_UA: 'Важливе повідомлення',
    vi_VN: 'Thông báo quan trọng',
  },
  desc: {
    en_US: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    zh_Hans: '为了有效提升数据检索能力及稳定性，AIs 将于 2023 年 8 月 29 日 03:00 至 08:00 期间进行服务升级，届时 AIs 云端版及应用将无法访问。感谢您的耐心与支持。',
    pt_BR: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    es_ES: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    fr_FR: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    de_DE: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    ja_JP: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    ko_KR: 'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    uk_UA: 'Наша система буде недоступна з 19:00 до 24:00 UTC 28 серпня для оновлення. Якщо у вас виникнуть запитання, будь ласка, зв’яжіться з нашою службою підтримки (support@dify.ai). Дякуємо за терпіння.',
    vi_VN: 'Hệ thống của chúng tôi sẽ ngừng hoạt động từ 19:00 đến 24:00 UTC vào ngày 28 tháng 8 để nâng cấp. Nếu có thắc mắc, vui lòng liên hệ với nhóm hỗ trợ của chúng tôi (support@dify.ai). Chúng tôi đánh giá cao sự kiên nhẫn của bạn.',
  },
  href: '#',
}
