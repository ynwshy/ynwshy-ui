import HyButton from "./src/button.vue";
// 为组件提供 install 安装方法，供按需引入
HyButton.install = function (Vue) {
  Vue.component(HyButton.name, HyButton);
};
export default HyButton;
