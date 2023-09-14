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
                <h1>Heeft u vragen?</h1>
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="main-card-content info__page">
              <header>
                <h2>Mailen naar:</h2>
              </header>
              <p>rec-it@mail.nl</p>

              <header>
                <h2>Of bellen naar de IT-desk:</h2>
              </header>
              <p>088 123 456</p>

              <div>
                <small><a href="https://policies.google.com/privacy?hl=nl">Privacy beleid</a></small>
                <small><a href="https://www.cookieinfo.net/">Cookie statement</a></small>
              </div>
              <small>Alle rechten voorbehouden © Real Estate Care </small>
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
import { IonSelect, IonSelectOption, IonButton, IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue';

export default defineComponent({
  name: 'InformationView',
  components: {
    PageLayout,
    IonPage,
    IonCard,
    IonContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonSelect,
    IonSelectOption,
  },
});
</script>

<style></style>