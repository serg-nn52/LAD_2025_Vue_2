import { DeviceEnum } from '@/enums';
import { computed, onBeforeUnmount, ref, watch } from 'vue';

export const useMedia = () => {
  const screenWidth = ref(0);

  const changeWindowSize = () => {
    console.log('changeWindowSize');
    screenWidth.value = window.innerWidth;
  };

  const device = computed(() => {
    if (screenWidth.value > DeviceEnum.DESKTOP) {
      return 'desktop';
    } else if (screenWidth.value > DeviceEnum.TABLET) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  });

  watch(
    device,
    (val) => {
      console.log('device', val);
    },
    {
      immediate: true,
    },
  );

  changeWindowSize();
  window.addEventListener('resize', changeWindowSize);
  onBeforeUnmount(() => {
    window.removeEventListener('resize', changeWindowSize);
  });

  return {
    device,
  };
};
