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
                <h1>Account aanmaken</h1>
              </ion-card-title>

            </ion-card-header>

            <ion-card-content class="main-card-content">

              <user-create></user-create>

            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import PageLayout from '@/components/includes/PageLayout.vue';
import UserCreate from '@/components/users/UserCreate.vue';


import { defineComponent } from 'vue';
import { IonSelect, IonSelectOption, IonButton, IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonList, IonItem } from '@ionic/vue';

export default defineComponent({
  name: 'EditView',
  components: {
    PageLayout,
    UserCreate,
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