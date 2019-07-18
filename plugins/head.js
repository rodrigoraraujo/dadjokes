import Vue from 'vue';

const headPlugin = {
  install(Vue, options) {
    Vue.mixin({
      head() {
        return {
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Best place for corny dad jokes'
            }
          ]
        };
      },
      created() {
        console.log('Head plugin');
      }
    });
  }
};

Vue.use(headPlugin);
