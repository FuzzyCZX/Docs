import DefaultTheme from 'vitepress/theme';
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import './style.css'

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      initZoom();
    });

    watch(
      () => window.location.pathname,
      () => nextTick(() => initZoom())
    );

    const initZoom = () => {
      mediumZoom('img:not(.no-zoom)', {
        margin: 24,
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1000
      });
    };
  },
};