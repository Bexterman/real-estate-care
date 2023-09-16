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
                <form-global></form-global>
                <!-- Select Forms -->
                <ion-select v-model="selectedFormOption">
                  <ion-select-option value="disabled">kies een formulier</ion-select-option>
                  <ion-select-option value="formDamage">Schade opnemen</ion-select-option>
                  <ion-select-option value="formMaintenance">Onderhoud opnemen</ion-select-option>
                  <ion-select-option value="formTechnical">Installatie opnemen</ion-select-option>
                  <ion-select-option value="formModifications">Modificaties opnemen</ion-select-option>
                  <ion-select-option value="all">Alle formulieren</ion-select-option>
                </ion-select>
                <p><em>Een formulier gekozen? <br>Scroll naar beneden om het formulier in te vullen</em></p>

                <!-- Form Damage Report -->
                <form-damage v-if="selectedFormOption === 'formDamage'"></form-damage>
                <form-damage v-if="selectedFormOption === 'all'"></form-damage>

                <!-- Form Maintenance Report -->
                <form-maintenance v-if="selectedFormOption === 'formMaintenance'"></form-maintenance>
                <form-maintenance v-if="selectedFormOption === 'all'"></form-maintenance>

                <!-- Form Tehcnical Report -->
                <form-technical v-if="selectedFormOption === 'formTechnical'"></form-technical>
                <form-technical v-if="selectedFormOption === 'all'"></form-technical>

                <!-- Form Modifications Report -->
                <form-modifications v-if="selectedFormOption === 'formModifications'"></form-modifications>
                <form-modifications v-if="selectedFormOption === 'all'"></form-modifications>

                <ion-button class="btn__send-report" type="submit" expand="block">Verzend</ion-button>
              </v-form>


              <!-- Overview Submitted Reports -->
              <br>
              <br>

              <br>
              <hr>
              <br>

              <header>
                <h2 class="heading-overview-reports">Recent opgemaakt</h2>
              </header>
              <br>
              <br>

              <RecentAssignedReports :formSubmissions="formSubmissions" />

            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import PageLayout from '@/components/includes/PageLayout.vue';
import FormGlobal from '@/components/forms/FormGlobal.vue';
import FormDamage from '@/components/forms/FormDamage.vue';
import FormMaintenance from '@/components/forms/FormMaintenance.vue';
import FormTechnical from '@/components/forms/FormTechnical.vue';
import FormModifications from '@/components/forms/FormModifications.vue';
import RecentAssignedReports from '@/components/lists/RecentAssignedReports.vue';


import { defineComponent, ref, Ref } from 'vue';
import * as V from 'vee-validate/dist/vee-validate';
import { IonSelect, IonSelectOption, IonButton, IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonList, IonItem } from '@ionic/vue';

export default defineComponent({
  name: 'AssignedView',
  components: {
    PageLayout,
    FormGlobal,
    FormDamage,
    FormMaintenance,
    FormTechnical,
    FormModifications,
    RecentAssignedReports,

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
    VForm: V.Form,
  },
  setup() {
    const selectedFormOption = ref('disabled');
    const showForm = ref(false);
    const formSubmissions: Ref<any[]> = ref([]);

    const onSubmit = (data: any) => {
      formSubmissions.value.unshift(data);
      selectedFormOption.value = 'disabled';
    };

    const toggleForm = () => {
      showForm.value = !showForm.value;
    }

    return {
      onSubmit,
      selectedFormOption,
      showForm,
      toggleForm,
      formSubmissions,
    };
  },
});
</script>

<style src="../styles/assignedView.css"></style>