import HomePage from './components/pages/HomePage';
import MapFillQuiz from './components/pages/MapFillQuiz';
import WhichCountryBigger from './components/pages/WhichCountryBigger';

export const siteInfo = {
    NAME: 'Geograph.me',
    TAGLINE: 'Geography learning, quizzes, and games. For you.',
};

export const pages = {
    HOME: {path: '/', name: 'Home', component: HomePage},
    MAP_FILL_QUIZ: {path: '/map-fill-quiz', name: 'Map Fill Quiz', component: MapFillQuiz},
    WHICH_COUNTRY_BIGGER: {path: '/which-country-bigger', name: 'Country Size Quiz', component: WhichCountryBigger},
};

export const orderedTopNavigationPages = {
    0: pages.HOME,
    1: pages.MAP_FILL_QUIZ,
    2: pages.WHICH_COUNTRY_BIGGER,
};

export const orderedGamePages = {
    0: pages.MAP_FILL_QUIZ,
    1: pages.WHICH_COUNTRY_BIGGER,
};
