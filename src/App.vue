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