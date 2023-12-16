import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true, 
    themes: {
      dark: {
        background: 'linear-gradient(blue, pink)', 
        logoWidth: '30%', 
      },
    },
  },
});
