(function () {

    'use strict';

    angular
    .module('select', [])
    .config(function() {
        $('select').niceSelect();
    });

})();