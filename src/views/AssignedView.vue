<template>
  <ion-page>
    <page-layout>

        <ion-content>
          <div class="main-container">

            <ion-card class="main-card-container">
              <ion-card-header class="main-card-header">
                <ion-card-title class="main-card-title">
                  <h1>Toegewezen</h1>
                </ion-card-title>
                <ion-card-subtitle class="main-card-subtitle">
                  <p>Selecteer een optie</p>
                </ion-card-subtitle>
              </ion-card-header>

              <ion-card-content class="main-card-content">
                <h2>Overzicht</h2>
                <ol>
                  <li>Appointment</li>
                  <li>Appointment</li>
                  <li>Appointment</li>
                  <li>Appointment</li>
                  <li>Appointment</li>
                  <li>Appointment</li>
                </ol>
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
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

export default defineComponent({
  name: 'AssignedView',
  components: {
    PageLayout,
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
  }
});
</script>

<style></style>
