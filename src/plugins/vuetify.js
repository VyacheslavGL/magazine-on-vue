import '@mdi/font/css/materialdesignicons.css'
/*import Vue from 'vue'
import Vuetify, {
    VCard,
    VRating,
    VToolbar,
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'*/
import 'vuetify/dist/vuetify.min.css'

/*Vue.use(Vuetify, {
    components: {
        VCard,
        VRating,
        VToolbar,
    },
    directives: {
        Ripple,
    },
});*/


// https://vuetifyjs.com/en/customization/theme

// https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0  - настройка

import Vue from 'vue'
import Vuetify from 'vuetify'
// import Vuetify from 'vuetify/lib'
// import 'vuetify/src/stylus/app.styl'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

// vuetifyjs.com/en/customization/theme
// https://www.npmjs.com/package/lru-cache
/*const themeCache = new LRU({
    max: 10,
    maxAge: 1000 * 60 * 60, // 1 hour
});*/

export default new Vuetify({
    theme: {
        // dark: true,
        dark: false,
        themes: {
            light: {
               /* primary: '#42a5f5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',*/
                /*primary: colors.purple,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,*/

                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
            dark: {
                primary: '#2196F3'
            },
        },
    },
    options: {
        customProperties: true,
        minifyTheme: function (css) {
            return process.env.NODE_ENV === 'production'
                ? css.replace(/[\r\n|\r|\n]/g, '')
                : css
        },
        // themeCache,
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})