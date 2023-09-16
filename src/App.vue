<template>
  <ion-app>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="in-out">
        <component :is="Component" />
      </transition>
    </router-view>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue';
import { ref, onMounted, watch } from 'vue';

const darkTheme = ref(false);

// Check local storage for dark theme preference when the component is mounted
onMounted(() => {
  const storedTheme = localStorage.getItem('darkTheme');
  if (storedTheme === 'enabled') {
    darkTheme.value = true;
  }
});

// Watch for changes in dark theme and apply it to the entire app
watch(darkTheme, (newValue: any) => {
  const theme = document.getElementById('theme');
  if (theme) {
    if (newValue) {
      theme.classList.add('darkTheme');
    } else {
      theme.classList.remove('darkTheme');
    }
  }
});
</script>

<style>
.slide-fade-enter-active {
  transition: all .4s ease;
}

.slide-fade-leave-active {
  transition: all 0s;
}

.slide-fade-enter-from {
  transform: translateX(-100vw);
}

.slide-fade-leave-to {
  transition: all 0s;
  opacity: 0;
}
</style>