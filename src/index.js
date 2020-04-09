'use strict';

import animationLinks from './moduls/animationLinks';
import calculator from './moduls/calculator';
import menuBlock from './moduls/menuBlock';
import popupAndForm from './moduls/popupAndForm';
import sendForm from './moduls/sendForm';
import slider from './moduls/slider';
import sliderCarusel from './moduls/sliderCarusel';

popupAndForm();
calculator();
animationLinks();
menuBlock();
sendForm();
slider('.main-slider', '.slide', true, false, 1, 5000);
slider('.gallery-bg', '.slide', true, true, 1, 5000);
sliderCarusel('.services-slider', '.slide', true, 5, 5000);