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
                <h1>Toegewezen rapportages</h1>
              </ion-card-title>

              <!-- Page Subtitle -->
              <ion-card-subtitle class="main-card-subtitle">
                <p><em>Tik/klik op een regel</em></p>
              </ion-card-subtitle>

            </ion-card-header>

            <ion-card-content class="main-card-content">
              <!-- Forms Reports -->
              <form action="#">
                
                <!-- Form Global Information -->
                  <form-global></form-global>

                  <!-- Form Damage Report -->
                  <form-damage></form-damage>

                  <!-- Form Maintenance Report -->


                  <!-- Form Tehcnical Report -->

                  
                  <!-- Form Modifications Report -->

                <ion-button type="submit" expand="block">Verzend</ion-button>
              </form>
              

            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import PageLayout from '@/components/PageLayout.vue';
import FormGlobal from '@/components/FormGlobal.vue';
import FormDamage from '@/components/FormDamage.vue';

import { defineComponent } from 'vue';
import { IonButton, IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/vue';

export default defineComponent({
  name: 'AssignedView',
  components: {
    PageLayout,
    IonPage,
    FormGlobal,
    FormDamage,
    IonCard,
    IonContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton
  }
});
</script>

<style src="../styles/assignedView.css"></style>
