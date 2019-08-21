import getStatsDestination from '.';

describe('getStatsDestination', () => {
  const testScenarios = [
    {
      isUK: true,
      env: 'live',
      service: 'news',
      expected: 'NEWS_PS',
      summary: 'should return for News live UK',
    },
    {
      isUK: false,
      env: 'live',
      service: 'news',
      expected: 'NEWS_GNL',
      summary: 'should return for News live international',
    },
    {
      isUK: true,
      env: 'test',
      service: 'news',
      expected: 'NEWS_PS_TEST',
      summary: 'should return for News test UK',
    },
    {
      isUK: false,
      env: 'test',
      service: 'news',
      expected: 'NEWS_GNL_TEST',
      summary: 'should return for News test international',
    },
    {
      isUK: true,
      env: 'foobar',
      service: 'news',
      expected: 'NEWS_PS_TEST',
      summary: 'should return for News test UK when env unknown',
    },
    {
      isUK: true,
      env: null,
      service: 'news',
      expected: 'NEWS_PS_TEST',
      summary: 'should return for News test UK when env null',
    },
    {
      isUK: true,
      env: undefined,
      service: 'news',
      expected: 'NEWS_PS_TEST',
      summary: 'should return for News test UK when env undefined',
    },
    {
      isUK: null,
      env: 'live',
      service: 'news',
      expected: 'NEWS_PS',
      summary: 'should return for News live UK when isUK is null',
    },
    {
      isUK: undefined,
      env: 'live',
      service: 'news',
      expected: 'NEWS_PS',
      summary: 'should return for News live UK when isUK is undefined',
    },
    {
      isUK: true,
      env: 'live',
      service: 'persian',
      expected: 'WS_NEWS_LANGUAGES',
      summary: 'should return for WS live UK',
    },
    {
      isUK: false,
      env: 'live',
      service: 'persian',
      expected: 'WS_NEWS_LANGUAGES',
      summary: 'should return for WS live international',
    },
    {
      isUK: true,
      env: 'test',
      service: 'persian',
      expected: 'WS_NEWS_LANGUAGES_TEST',
      summary: 'should return for WS test UK',
    },
    {
      isUK: false,
      env: 'test',
      service: 'persian',
      expected: 'WS_NEWS_LANGUAGES_TEST',
      summary: 'should return for WS test international',
    },
    {
      isUK: true,
      env: 'foobar',
      service: 'persian',
      expected: 'WS_NEWS_LANGUAGES_TEST',
      summary: 'should return for WS test UK when env unknown',
    },
    {
      isUK: true,
      env: null,
      service: 'persian',
      expected: 'WS_NEWS_LANGUAGES_TEST',
      summary: 'should return for WS test UK when env null',
    },
    {
      isUK: true,
      env: undefined,
      service: 'persian',
      expected: 'WS_NEWS_LANGUAGES_TEST',
      summary: 'should return for WS test UK when env undefined',
    },
    {
      isUK: null,
      env: 'live',
      service: 'persian',
      expected: 'WS_NEWS_LANGUAGES',
      summary: 'should return for WS live UK when isUK is null',
    },
    {
      isUK: undefined,
      env: 'live',
      service: 'persian',
      expected: 'WS_NEWS_LANGUAGES',
      summary: 'should return for WS live UK when isUK is undefined',
    },
    {
      isUK: true,
      env: 'live',
      service: 'cymrufyw',
      expected: 'NEWS_LANGUAGES_PS',
      summary: 'should return for Wales live UK',
    },
    {
      isUK: true,
      env: 'test',
      service: 'cymrufyw',
      expected: 'NEWS_LANGUAGES_PS_TEST',
      summary: 'should return for Wales test UK',
    },
    {
      isUK: false,
      env: 'live',
      service: 'cymrufyw',
      expected: 'NEWS_LANGUAGES_GNL',
      summary: 'should return for Wales live international',
    },
    {
      isUK: false,
      env: 'test',
      service: 'cymrufyw',
      expected: 'NEWS_LANGUAGES_GNL_TEST',
      summary: 'should return for Wales test international',
    },
    {
      isUK: null,
      env: 'live',
      service: 'cymrufyw',
      expected: 'NEWS_LANGUAGES_PS',
      summary: 'should return for Wales live UK when isUK is null',
    },
    {
      isUK: undefined,
      env: 'live',
      service: 'cymrufyw',
      expected: 'NEWS_LANGUAGES_PS',
      summary: 'should return for Wales live UK when isUK is undefined',
    },
    {
      isUK: true,
      env: 'foobar',
      service: 'cymrufyw',
      expected: 'NEWS_LANGUAGES_PS_TEST',
      summary: 'should return for Wales test UK when env unknown',
    },
    {
      isUK: true,
      env: null,
      service: 'cymrufyw',
      expected: 'NEWS_LANGUAGES_PS_TEST',
      summary: 'should return for Wales test UK when env null',
    },
    {
      isUK: true,
      env: undefined,
      service: 'cymrufyw',
      expected: 'NEWS_LANGUAGES_PS_TEST',
      summary: 'should return for Wales test UK when env undefined',
    },
    {
      isUK: true,
      env: 'live',
      service: 'naidheachdan',
      expected: 'NEWS_LANGUAGES_PS',
      summary: 'should return for Naidheachdan live UK',
    },
    {
      isUK: true,
      env: 'test',
      service: 'naidheachdan',
      expected: 'NEWS_LANGUAGES_PS_TEST',
      summary: 'should return for Naidheachdan test UK',
    },
    {
      isUK: false,
      env: 'live',
      service: 'naidheachdan',
      expected: 'NEWS_LANGUAGES_GNL',
      summary: 'should return for Naidheachdan live international',
    },
    {
      isUK: false,
      env: 'test',
      service: 'naidheachdan',
      expected: 'NEWS_LANGUAGES_GNL_TEST',
      summary: 'should return for Naidheachdan test international',
    },
    {
      isUK: null,
      env: 'live',
      service: 'naidheachdan',
      expected: 'NEWS_LANGUAGES_PS',
      summary: 'should return for Naidheachdan live UK when isUK is null',
    },
    {
      isUK: undefined,
      env: 'live',
      service: 'naidheachdan',
      expected: 'NEWS_LANGUAGES_PS',
      summary: 'should return for Naidheachdan live UK when isUK is undefined',
    },
    {
      isUK: true,
      env: 'foobar',
      service: 'naidheachdan',
      expected: 'NEWS_LANGUAGES_PS_TEST',
      summary: 'should return for Naidheachdan test UK when env unknown',
    },
    {
      isUK: true,
      env: null,
      service: 'naidheachdan',
      expected: 'NEWS_LANGUAGES_PS_TEST',
      summary: 'should return for Naidheachdan test UK when env null',
    },
    {
      isUK: true,
      env: undefined,
      service: 'naidheachdan',
      expected: 'NEWS_LANGUAGES_PS_TEST',
      summary: 'should return for Naidheachdan test UK when env undefined',
    },
    {
      isUK: true,
      env: 'live',
      service: 'japanese',
      expected: 'NEWS_LANGUAGES_GNL',
      summary: 'should return for Japanese live UK',
    },
    {
      isUK: true,
      env: 'test',
      service: 'japanese',
      expected: 'NEWS_LANGUAGES_GNL_TEST',
      summary: 'should return for Japanese test UK',
    },
    {
      isUK: false,
      env: 'live',
      service: 'japanese',
      expected: 'NEWS_LANGUAGES_GNL',
      summary: 'should return for Japanese live international',
    },
    {
      isUK: false,
      env: 'test',
      service: 'japanese',
      expected: 'NEWS_LANGUAGES_GNL_TEST',
      summary: 'should return for Japanese test international',
    },
    {
      isUK: null,
      env: 'live',
      service: 'japanese',
      expected: 'NEWS_LANGUAGES_GNL',
      summary: 'should return for Japanese live UK when isUK is null',
    },
    {
      isUK: undefined,
      env: 'live',
      service: 'japanese',
      expected: 'NEWS_LANGUAGES_GNL',
      summary: 'should return for Japanese live UK when isUK is undefined',
    },
    {
      isUK: true,
      env: 'foobar',
      service: 'japanese',
      expected: 'NEWS_LANGUAGES_GNL_TEST',
      summary: 'should return for Japanese test UK when env unknown',
    },
    {
      isUK: true,
      env: null,
      service: 'japanese',
      expected: 'NEWS_LANGUAGES_GNL_TEST',
      summary: 'should return for Japanese test UK when env null',
    },
    {
      isUK: true,
      env: undefined,
      service: 'japanese',
      expected: 'NEWS_LANGUAGES_GNL_TEST',
      summary: 'should return for Japanese test UK when env undefined',
    },
  ];

  testScenarios.forEach(({ isUK, env, service, expected, summary }) => {
    it(summary, () => {
      const statsDestination = getStatsDestination({ isUK, env, service });
      expect(statsDestination).toEqual(expected);
    });
  });
});
