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
              <!-- <ion-card-subtitle class="main-card-subtitle">
                <p><em>Tik/klik op een regel</em></p>
              </ion-card-subtitle> -->

            </ion-card-header>

            <ion-card-content class="main-card-content">
              <!-- Create Form -->
              <ion-button @click="toggleForm">Rapportage opmaken</ion-button>

              <!-- Forms Reports -->
              <v-form v-if="showForm" @submit="onSubmit">

                <!-- Form Global Information -->
                <FormGlobal/>

                <!-- Select Forms -->
                <ion-select v-model="selectedFormOption">
                  <ion-select-option value="disabled">kies een formulier</ion-select-option>
                  <ion-select-option value="formDamage">Schade opnemen</ion-select-option>
                  <ion-select-option value="all">Alle formulieren</ion-select-option>
                </ion-select>

                  <!-- Form Damage Report -->
                  <form-damage v-if="selectedFormOption === 'formDamage'"></form-damage>
                  <form-damage v-if="selectedFormOption === 'all'"></form-damage>

                  <!-- Form Maintenance Report -->


                  <!-- Form Tehcnical Report -->

                    
                  <!-- Form Modifications Report -->

                <ion-button type="submit" expand="block">Verzend</ion-button>
              </v-form>

              <!-- Overview Submitted Reports -->
              <br>
              <br>

              <br>
                <hr>
              <br>

              <header>
                <h2 class="heading-overview-reports">Recent opgemaakt</h2>
                <small><em>wijzigen mogelijk</em></small>
              </header>
              <br>
              <br>

              <RecentAssignedReports :formSubmissions="formSubmissions" />

              <ListRecentAssignedReports/>

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
import RecentAssignedReports from '@/components/RecentAssignedReports.vue';
import ListRecentAssignedReports from '@/components/ListRecentAssignedReports.vue';


import { defineComponent, ref, Ref } from 'vue';
import * as V from 'vee-validate/dist/vee-validate';
import { IonSelect, IonSelectOption, IonButton, IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonList, IonItem } from '@ionic/vue';

export default defineComponent({
  name: 'AssignedView',
  components: {
    PageLayout,
    FormGlobal,
    FormDamage,
    RecentAssignedReports,
    ListRecentAssignedReports,
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
    VForm : V.Form,
  },
  setup() {
    const selectedFormOption = ref('disabled');
    const showForm = ref(false);
    const formSubmissions: Ref<any[]> = ref([]);


    const onSubmit = (data: any) => {
      formSubmissions.value.unshift(data);
    };

    const toggleForm = () => {
      showForm.value = !showForm.value;
    };

    return {
      onSubmit,
      selectedFormOption,
      showForm,
      toggleForm,
      formSubmissions,

    }
  },
});
</script>

<style src="../styles/assignedView.css"></style>
