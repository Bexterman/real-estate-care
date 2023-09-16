<template>
  <ion-page>
    <page-layout>

      <!-- Content -->
      <ion-content>
        <div class="main-container">
          <ion-card class="main-card-container info__page">

            <!-- Page Header -->
            <ion-card-header class="main-card-header">
              <ion-card-title class="main-card-title">
                <h1 class="info__page-h1">Contact gegevens</h1>
              </ion-card-title>
            </ion-card-header>

            <ion-card-content class="main-card-content info__page">
              <header>
                <h2>Heeft u vragen?<br>Neem contact op:</h2>
              </header>
              <p>rec-it@mail.nl</p>
              <p>088 321 987</p>
              <p>
                Dagobert Ducklaan 99
                <br>
                7676EN Duckstad
              </p>
              <br>
              <header>
                <h2>
                  Hulp nodig bij deze app?
                  <br>Bel de IT-helpdesk:
                </h2>
              </header>
              <p>088 123 456</p>

              <div>
                <small><a href="https://policies.google.com/privacy?hl=nl">Privacy beleid</a></small>
                <small><a href="https://www.cookieinfo.net/">Cookie statement</a></small>
              </div>
              <small class="all__rights__reserved">Alle rechten voorbehouden © Real Estate Care </small>
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

<style>
.main-container .info__page {
  max-inline-size: 500px;
  margin: 0 auto;
}

.main-card-container .info__page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-block-start: 40px;
  text-align: center;
}

.info__page-h1 {
  text-align: center;
}

.main-card-container .info__page h2 {
  font-size: 24px;
  text-align: center;
  font-weight: 500;
}

.main-card-container .info__page p {
  font-size: 21px;
  color: var(--accent-9);
}

.main-card-container .info__page div {
  display: flex;
  gap: 30px;
  margin-block-start: 40px;
}

.main-card-container .info__page div small a {
  color: inherit;
  font-size: 13px;
}

.main-card-container .info__page div small a:hover {
  color: var(--accent-9);
}

.all__rights__reserved {
  color: var(--rec-primary-color);
  font-size: 11px;
}
</style>