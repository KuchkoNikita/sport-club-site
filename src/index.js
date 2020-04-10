'use strict';


import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementCloasest from 'element-closest';
elementCloasest(window);


import animationLinks from './moduls/animationLinks';
import calculator from './moduls/calculator';
import menuBlock from './moduls/menuBlock';
// Popups
import clubsPopup from './moduls/popupAndForm/clubsPopup';
import menuButton from './moduls/popupAndForm/menuButton';
import staticFormClearing from './moduls/popupAndForm/staticFormClearing';
import callPopup from './moduls/popupAndForm/callPopup';

import sendForm from './moduls/sendForm';
import slider from './moduls/slider';
import sliderCarusel from './moduls/sliderCarusel';

clubsPopup();
menuButton();
staticFormClearing();
callPopup();

calculator();
animationLinks();
menuBlock();
sendForm();
slider('.main-slider', '.slide', true, false, 1, 5000);
slider('.gallery-bg', '.slide', true, true, 1, 5000);
sliderCarusel('.services-slider', '.slide', true, 5, 5000);