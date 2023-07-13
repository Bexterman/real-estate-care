<template>
  <ion-page>
  <page-layout>

      <ion-content>
        <div class="home-main-container">

          <!-- Schedule Button -->
          <ion-card class="card-container" router-link="/scheduled">
                <ion-card-content class="card-content-wrapper">
                    <ion-icon class="content-icon" :src="calendarClearOutline"></ion-icon>
                    <span class="card-title">Scheduled</span>
                </ion-card-content>
          </ion-card>

          <!-- Completed Button -->
          <ion-card class="card-container" router-link="/completed">
                <ion-card-content class="card-content-wrapper">
                    <ion-icon class="content-icon" :src="checkmarkCircle"></ion-icon>
                    <span class="card-title">Completed</span>
                </ion-card-content>
          </ion-card>

          <!-- Knowledge Base Button -->
          <ion-card class="card-container" router-link="/knowledgebase">
                <ion-card-content class="card-content-wrapper">
                    <ion-icon class="content-icon" :src="school"></ion-icon>
                    <span class="card-title">Knowledge base</span>
                </ion-card-content>
          </ion-card>

          <!-- Profile Button -->
          <ion-card class="card-container" router-link="/settings">
                <ion-card-content class="card-content-wrapper">
                    <ion-icon class="content-icon" :src="person"></ion-icon>
                    <span class="card-title">Profile</span>
                </ion-card-content>
          </ion-card>

        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import PageLayout from '@/components/PageLayout.vue';
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonButton } from '@ionic/vue';
import { calendarClearOutline, checkmarkCircle, school, person } from 'ionicons/icons'


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
      calendarClearOutline,
      checkmarkCircle,
      school,
      person
    }
  }
});
</script>

<style src="../styles/homeView.css"></style>