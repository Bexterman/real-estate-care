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
    // Use ref to track whether the timeout has been triggered
    const timeoutTriggered = ref(false);

    // Add a function to navigate to the homepage
    const navigateToHomePage = () => {
      router.push('/'); // Replace '/' with the actual route to your homepage
    };

    // Watch for changes in timeoutTriggered and navigate when it becomes true
    watch(timeoutTriggered, (newValue) => {
      if (newValue) {
        navigateToHomePage();
      }
    });

    // Use setTimeout to set timeoutTriggered to true after 7 seconds
    setTimeout(() => {
      timeoutTriggered.value = true;
    }, 7500); // 7000 milliseconds = 7 seconds

    return {
      timeoutTriggered,
    };
  },
});
</script>

<style src="../styles/loginAnimation.css"></style>
