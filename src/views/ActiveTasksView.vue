<template>
  <ion-page>
    <page-layout>

      <!-- Content -->
      <ion-content>
        <div class="main-container">
          <ion-card class="main-card-container">

            <!-- Page Header -->
            <ion-card-header class="main-card-header">
              <ion-card-title class="main-card-title">
                <h1>Actieve taken</h1>
              </ion-card-title>

              <ion-card-subtitle class="main-card-subtitle">
                <p><em>Momenteel lopende werkzaamheden</em></p>
                <p><em>Klik op een rapport voor meer informatie</em></p>
              </ion-card-subtitle>
            </ion-card-header>

            <ion-card-content class="main-card-content">
              <ListDummyReports />
            </ion-card-content>
          </ion-card>

        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import PageLayout from '@/components/includes/PageLayout.vue';
import ListDummyReports from '@/components/lists/ListDummyReports.vue';


import { defineComponent } from 'vue';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue';

export default defineComponent({
  name: 'ActiveTasksView',
  components: {
    PageLayout,
    IonPage,
    IonCard,
    IonContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    ListDummyReports,
  }
});
</script>

<style src="../styles/assignedView.css"></style>