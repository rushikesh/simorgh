import loadable from '@loadable/component';

const loadableConfig = {
  afaanoromoo: loadable(() => import('./afaanoromoo.js')),
  afrique: loadable(() => import('./afrique.js')),
  amharic: loadable(() => import('./amharic.js')),
  arabic: loadable(() => import('./arabic.js')),
  archive: loadable(() => import('./archive.js')),
  azeri: loadable(() => import('./azeri.js')),
  bengali: loadable(() => import('./bengali.js')),
  burmese: loadable(() => import('./burmese.js')),
  cymrufyw: loadable(() => import('./cymrufyw.js')),
  gahuza: loadable(() => import('./gahuza.js')),
  gujarati: loadable(() => import('./gujarati.js')),
  hausa: loadable(() => import('./hausa.js')),
  hindi: loadable(() => import('./hindi.js')),
  igbo: loadable(() => import('./igbo.js')),
  indonesia: loadable(() => import('./indonesia.js')),
  japanese: loadable(() => import('./japanese.js')),
  korean: loadable(() => import('./korean.js')),
  kyrgyz: loadable(() => import('./kyrgyz.js')),
  marathi: loadable(() => import('./marathi.js')),
  mundo: loadable(() => import('./mundo.js')),
  naidheachdan: loadable(() => import('./naidheachdan.js')),
  nepali: loadable(() => import('./nepali.js')),
  news: loadable(() => import('./news.js')),
  newsround: loadable(() => import('./newsround.js')),
  pashto: loadable(() => import('./pashto.js')),
  persian: loadable(() => import('./persian.js')),
  pidgin: loadable(() => import('./pidgin.js')),
  portuguese: loadable(() => import('./portuguese.js')),
  punjabi: loadable(() => import('./punjabi.js')),
  russian: loadable(() => import('./russian.js')),
  scotland: loadable(() => import('./scotland.js')),
  serbian: loadable(() => import('./serbian.js')),
  sinhala: loadable(() => import('./sinhala.js')),
  somali: loadable(() => import('./somali.js')),
  sport: loadable(() => import('./sport.js')),
  swahili: loadable(() => import('./swahili.js')),
  tamil: loadable(() => import('./tamil.js')),
  telugu: loadable(() => import('./telugu.js')),
  thai: loadable(() => import('./thai.js')),
  tigrinya: loadable(() => import('./tigrinya.js')),
  turkce: loadable(() => import('./turkce.js')),
  ukchina: loadable(() => import('./ukchina.js')),
  ukrainian: loadable(() => import('./ukrainian.js')),
  urdu: loadable(() => import('./urdu.js')),
  uzbek: loadable(() => import('./uzbek.js')),
  vietnamese: loadable(() => import('./vietnamese.js')),
  yoruba: loadable(() => import('./yoruba.js')),
  zhongwen: loadable(() => import('./zhongwen.js')),
};

export default loadableConfig;
