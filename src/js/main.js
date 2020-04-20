import polyfills from './polyfills';
import detectTouch from './detectTouch';
import customSelect from './customSelect';
import smoothScrolling from './smoothScrolling';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    customSelect();
    smoothScrolling();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
