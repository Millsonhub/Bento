// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Davi',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: '☀️ G\'day,',
  greetingAfternoon: '🕒 Good afternoon,',
  greetingEvening: '🌙 Good evening,',
  greetingNight: '💤 Good Night,',

  // Weather
  weatherKey: 'f137f95e34d488b653279fc5def4a840',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '0',
  defaultLongitude: '0',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Google',
      icon: 'search',
      link: 'https://google.com/',
    },
    {
      id: '2',
      name: 'YouTube',
      icon: 'youtube-play',
      link: 'https://youtube.com/',
    },
    {
      id: '3',
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/millsonhub',
    },
    {
      id: '4',
      name: 'Discord',
      icon: 'send',
      link: 'https://discord.com/login',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'reddit',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Google Cloud',
      icon: 'server',
      link: 'https://cloud.google.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'newspaper',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Youtube Music',
        link: 'https://music.youtube.com',
      },
      {
        name: 'Google Drive',
        link: 'https://drive.google.com',
      },
      {
        name: 'Netflix',
        link: 'https://netflix.com',
      },
      {
        name: 'AnimixPlay',
        link: 'https://animixplay.to/',
      },
    ],
    secondList: [
      {
        name: 'r/unixporn',
        link: 'https://reddit.com/r/unixporn',
      },
      {
        name: 'r/linux',
        link: 'https://reddit.com/r/linux',
      },
      {
        name: 'GitHub Explore',
        link: 'https://github.com/explore',
      },
    ],
  },
};
