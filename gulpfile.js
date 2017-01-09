const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {

    /**
     * Styles
     */
    mix.sass('cres.scss', 'public/assets/css/cres.min.css');

    mix.styles('responsive-tables.css', 'public/assets/css/responsive-tables.css', 'bower_components/responsive-tables' );

    /**
     * Scripts
     */
    mix.webpack('cres.js', 'public/assets/js/cres.min.js');

    mix.scripts('jquery.min.js', 'public/assets/js/jquery.min.js', 'bower_components/jquery/dist' );

    mix.scripts('responsive-tables.js', 'public/assets/js/responsive-tables.min.js', 'bower_components/responsive-tables' );

    mix.scripts('foundation.min.js', 'public/assets/js/foundation.min.js', 'bower_components/foundation-sites/dist/js' );

    mix.scripts('foundation-datepicker.min.js', 'public/assets/js/foundation-datepicker.min.js', 'bower_components/foundation-datepicker/js' );

    mix.scripts('foundation-datepicker.en-GB.js', 'public/assets/js/foundation-datepicker.en-GB.js', 'bower_components/foundation-datepicker/js/locales' );
});
