<template>
  <ion-page>
    <page-layout>

      <ion-content>
        <div class="home-main-container">

          <!-- Schedule Button -->
          <ion-card class="card-container" router-link="/toegewezen">
            <ion-card-content class="card-content-wrapper">
              <ion-icon class="content-icon" :src="bookmarks"></ion-icon>
              <span class="card-title">Toegewezen</span>
            </ion-card-content>
          </ion-card>

          <!-- Completed Button -->
          <ion-card class="card-container" router-link="/uitgevoerd">
            <ion-card-content class="card-content-wrapper">
              <ion-icon class="content-icon" :src="checkmarkCircle"></ion-icon>
              <span class="card-title">Uitgevoerd</span>
            </ion-card-content>
          </ion-card>

          <!-- Knowledge Base Button -->
          <ion-card class="card-container" router-link="/kennisbank">
            <ion-card-content class="card-content-wrapper">
              <ion-icon class="content-icon" :src="school"></ion-icon>
              <span class="card-title">Kennisbank</span>
            </ion-card-content>
          </ion-card>

          <!-- Profile Button -->
          <ion-card class="card-container" router-link="/instellingen">
            <ion-card-content class="card-content-wrapper">
              <ion-icon class="content-icon" :src="person"></ion-icon>
              <span class="card-title">Profiel</span>
            </ion-card-content>
          </ion-card>

        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import PageLayout from '@/components/includes/PageLayout.vue';
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonButton } from '@ionic/vue';
import { bookmarks, checkmarkCircle, school, person } from 'ionicons/icons'


export default defineComponent({
  name: 'HomeView',
  components: {
    IonPage,
    PageLayout,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonButton
  },
  setup() {
    return {
      bookmarks,
      checkmarkCircle,
      school,
      person
    }
  }
});
</script>

<style src="../styles/homeView.css"></style>