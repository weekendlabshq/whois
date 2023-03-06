import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-Y807Z4DEK2');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
