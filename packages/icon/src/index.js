import HyIcon from './src/icon.vue';

/* istanbul ignore next */
HyIcon.install = function(Vue) {
  Vue.component(HyIcon.name, HyIcon);
};

export default HyIcon;
