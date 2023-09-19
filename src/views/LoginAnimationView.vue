<template>
  <ion-page class="animation__wrapper">
    <div class="animation__container puff-out-center">
      <img src="../assets/logo/logo-icon.png" class="login-animation__logo__icon bounce-in-top pixels">
      <img src="../assets/logo/logo-text.png" class="login-animation__logo__text slide-in-blurred-bottom">
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { IonPage, IonContent, IonCard, IonCardContent } from '@ionic/vue';
import router from '@/router';

export default defineComponent({
  name: 'LoginAnimation',
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
  },
  setup() {
    const timeoutTriggered = ref(false);
    const navigateToHomePage = () => {
      router.push('/');
    };

    watch(timeoutTriggered, (newValue) => {
      if (newValue) {
        navigateToHomePage();
      }
    });

    setTimeout(() => {
      timeoutTriggered.value = true;
    }, 7500);

    return {
      timeoutTriggered,
    };
  },
});
</script>

<style src="../styles/loginAnimation.css"></style>
