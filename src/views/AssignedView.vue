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
              <br>
              <div v-if="formSubmissions.length > 0">
                <header>
                  <h2>Overzicht toegewezen rapportages</h2>
                </header>
                <div v-for="(submission, index) in formSubmissions" :key="index">
                  <header>
                    <h3>#{{ submission.id + ' | ' + submission.address }}</h3>
                    <sub>Opmaakdatum: {{ submission.date }}</sub>
                  </header>
                  <br>
                  <ul>

                    <!-- Damage Report -->
                    <li>
                      <header>
                        <h4>Beschadiging</h4>
                      </header>
                      <p><span>Locatie:</span> {{ submission.dmg_location }}</p> 
                      <p><span>Type schade:</span> {{ submission.dmg_new }}</p>
                      <p><span>Nieuwe schade:</span> {{ submission.dmg_type }}</p>
                    </li>
                  </ul>
                  <br>
                  <br>
                  <br>
                </div>
              </div>

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

import { defineComponent, ref, Ref } from 'vue';
import * as V from 'vee-validate/dist/vee-validate';
import { IonSelect, IonSelectOption, IonButton, IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonList, IonItem } from '@ionic/vue';

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
      formSubmissions.value.push(data);
      alert("ON SUBMIT" + JSON.stringify(data, null, 2));
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
