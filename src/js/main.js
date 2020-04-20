import polyfills from './polyfills';
import detectTouch from './detectTouch';
import customSelect from './customSelect';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    customSelect();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
