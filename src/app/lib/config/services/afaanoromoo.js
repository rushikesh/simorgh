import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '@bbc/psammead-styles/colours';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import { afaanoromoo as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Africa/Addis_Ababa';
import '@bbc/psammead-locales/moment/om';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `om`,
    articleAuthor: 'https://www.facebook.com/bbcnews',
    articleTimestampPrefix: 'Haaromsameera',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-afaanoromoo',
    atiAnalyticsProducerId: '2',
    chartbeatDomain: 'afaanoromoo.bbc.co.uk',
    brandName: 'BBC News Afaan Oromoo',
    product: 'BBC News',
    serviceLocalizedName: 'Afaan Oromoo',
    defaultImage:
      'https://news.files.bbci.co.uk/ws/img/logos/og/afaanoromoo.png',
    defaultImageAltText: 'BBC News Afaan Oromoo',
    dir: `ltr`,
    externalLinkText: ' alaan',
    imageCaptionOffscreenText: "Ibsa waa'ee suuraa, ",
    videoCaptionOffscreenText: "Ibsa waa'ee viidiyoo, ",
    audioCaptionOffscreenText: "Ibsa wa'ee raadiyoo, ",
    defaultCaptionOffscreenText: 'Ibsa suuraa/viidiyoo, ',
    imageCopyrightOffscreenText: 'Madda suuraa, ',
    locale: `om-ET`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'om',
    datetimeLocale: `om`,
    service: 'afaanoromoo',
    serviceName: 'Afaan Oromoo',
    languageName: 'Oromo',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@BBCNews',
    twitterSite: '@BBCNews',
    noBylinesPolicy:
      'https://www.bbc.com/afaanoromoo/institutional-49281861#authorexpertise',
    publishingPrinciples:
      'https://www.bbc.com/afaanoromoo/institutional-49281861',
    isTrustProjectParticipant: true,
    script: cyrillicAndLatin,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Oduu',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    translations: {
      ads: {
        advertisementLabel: 'Beeksiisa',
      },
      seeAll: 'Hunda ilaali',
      home: 'Oduu',
      currentPage: 'Fuula kan ammaa',
      skipLinkText: 'Qabiyyeetti darbi',
      relatedContent: 'Odeessa kana irratti dabalata',
      navMenuText: 'Kutaawwan',
      mediaAssetPage: {
        mediaPlayer: 'Media player',
        audioPlayer: 'Audio player',
        videoPlayer: 'Video player',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Fuulli argamuu hin dandeenye',
          message:
            'Dhiifama, fuula ati barbaaddaa jirtu siif fiduu hin dandeenye. maaloo yaali.',
          solutions: [
            'url sna dabalii ilaali',
            'Barbaadduu kee keessaan furtuu haaromsituu cuqaasuu',
            "Bo'aa barbaacha kan BBC fayyadamuun fuula kana barbaaduu",
          ],
          callToActionFirst: 'Akka filannootti, maaloo fuula duraa ',
          callToActionLinkText: 'BBC News Afaan Oromoo',
          callToActionLast: ' daawwadhu',
          callToActionLinkUrl: 'https://www.bbc.com/afaanoromoo',
        },
        500: {
          statusCode: '500',
          title: 'Dogogora keessoo haadhoo',
          message:
            'Dhiifama, fuula ati barbaaddaa jirtu siif fiduu hin dandeenye. maaloo yaali.',
          solutions: [
            'Barbaadduu kee keessaan furtuu haaromsituu cuqaasuu',
            'Ammas gara boodaarra ni deebiya',
          ],
          callToActionFirst: 'Akka filannootti, maaloo fuula duraa ',
          callToActionLinkText: 'BBC News Afaan Oromoo',
          callToActionLast: ' daawwadhu',
          callToActionLinkUrl: 'https://www.bbc.com/afaanoromoo',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Imaammata mateenyaafi kuus-yadannoo keenyaa haaromsiineera.',
          description: {
            uk: {
              first:
                "Imaammata mateenyaafi kuus-yaadannoo keenyaarratti jijjirama barbaachisaa muraasa kan taasifne yoo ta'u, kunis siifi daataa keetiif maal jechu akka ta'e akka bartu barbaadna.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                "Imaammata mateenyaafi kuus-yaadannoo keenyaarratti jijjirama barbaachisaa muraasa kan taasifne yoo ta'u, kunis siifi daataa keetiif maal jechu akka ta'e akka bartu barbaadna.",
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'TOLE',
          reject: 'Maaltu akka jijjirame bari',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Kuus-yaadannoo waliin waliigalu kee haa beeknu',
          description: {
            uk: {
              first: 'Kan nuti ',
              linkText: 'kuus-yaadannoo fayyadamnu',
              last:
                ' muuxannoo hunda caaluu toora internetaarratti isiniif kennuuf. Kuus-yaadannoo kan hunda waliin walii galuu kee mee haa barru.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first: 'Nutiifi michuuwwan keenya tekinikoota kan akka ',
              linkText: 'kuus-yaadannoo',
              last:
                ", akkasumas muuxannoo toora interneetaa hunda caaluufi qabiyyee isaa akka fedha dhuunfaatti ta'u gochuu akkasumallee beekssisni sitti akka mul'atuuf daataa  ittiin barbaadan walitti qaba. Yoo itti walii galta ta'e nu beeksisi maaloo.",
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Eyyee, walii nan gala.',
          reject: 'Lakki, gara bakka itti argamuutti na geessi',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        noJs: "Meeshaan kee Miidiyaa taphachiisuu hin danda'u",
        contentExpired: 'Qabiyyee kun hinjiraatu',
        contentNotYetAvailable:
          'Qabiyyeen kun taphachuu kan hin jire dha ammayyuu.',
        audio: 'Sagalee',
        photogallery: 'Kuusaa suuraa',
        video: 'Viidiyoo',
        listen: 'Dhaggeeffadhaa',
        watch: 'Daawwadhu',
        liveLabel: 'KALLATTIIN',
        nextLabel: 'KAN ITTAANU',
        previousRadioShow: 'Sagantaa raadiyoo dabre',
        nextRadioShow: 'Sagantaa raadiyoo itti aanu',
        duration: 'Turtii',
        recentEpisodes: 'Sagantaawwan darban',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: "Ibsa waa'ee viidiyoo, ",
          text: 'Hubachiisa: qabiyyeen qaama sadaffaa beeksisa qabaachuu malu',
        },
        fallback: {
          text: 'Qabiyyeen kun hin argamne',
          linkText: 'irratti dabalatan ilaali %provider_name%',
          linkTextSuffixVisuallyHidden: ', alaan',
          warningText:
            "Qabiyyeewwan maddawwan alaa irraa ta'aniif BBCn itti gaafatamaa miti.",
        },
        skipLink: {
          text: 'Maxxansa %provider_name% irra dabri',
          endTextVisuallyHidden: 'Xumura maxxansa %provider_name%',
        },
      },
      include: {
        errorMessage:
          'Dhiifama, odeessa kana keessaa kutaa kana, moobaayilarratti agarsiisuu hin dandeenyu',
        linkText: 'Guutuu qabiyyee ilaaluuf fuula cufa ilaali',
      },
      topStoriesTitle: 'Isin hin darbiin',
      featuresAnalysisTitle: `Maaltu haasa'ama?`,
    },
    brandSVG,
    mostRead: {
      header: "Baay'ee kan dubbifame",
      lastUpdated: 'Yeroo dhuma kan haaromfame:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'Hedduu kan ilaalaman',
      numberOfItems: 5,
      hasMostWatched: true,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      header: 'Dhaggeeffadhaa',
      durationLabel: 'Turtii %duration%',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/afaanoromoo/institutional-49281861',
        text: 'BBC News maaliif amanuu dandeessa',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Gara geessituu alaatti akkaataa itti hojjennu dubbisi.',
      },
      links: [
        {
          href: 'https://www.bbc.co.uk/usingthebbc/terms/',
          text: 'Haala itti fayyadamaa',
        },
        {
          href: 'https://www.bbc.com/aboutthebbc',
          text: "Waa'ee BBC",
        },
        {
          href: 'https://www.bbc.co.uk/usingthebbc/privacy/',
          text: 'Imaammata mateenyaa',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Kuus-yaadannoo',
        },
        {
          href: 'https://www.bbc.co.uk/send/u50777768',
          text: 'BBC qunnami',
        },
        {
          href:
            'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        "BBC. Qabiyyeewwan maddawwan alaa irraa ta'aniif BBCn itti gaafatamaa miti.",
    },
    fonts: [],
    navigation: [
      {
        title: 'Oduu',
        url: '/afaanoromoo',
      },
      {
        title: 'Itoophiyaa',
        url: '/afaanoromoo/topics/c2dwqdy81y1t',
      },
      {
        title: 'Viidiyoo',
        url: '/afaanoromoo/media/video',
      },
      {
        title: 'Jajjaboo',
        url: '/afaanoromoo/popular/read',
      },
    ],
    timezone: 'Africa/Addis_Ababa',
    liveRadioOverrides: {
      masterBrand: { bbc_oromo_radio: 'bbc_afaanoromoo_radio' },
    },
  },
};

export default withContext(service);
