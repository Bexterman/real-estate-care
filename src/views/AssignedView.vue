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
                <p class="create-report-explenation"><small>
                    1. Maak een rapport op.
                    <br> 2. Vul het algemeen formulier in.
                    <br> 3. Kies 1 of alle formulieren.
                    <br>4. Klik op "Nabewerken" om het rapport later te bewerken.
                    <br>5. Controleer het formulier en verzend deze naar de aannemer.
                    <br><em>Optioneel: u kunt ook alleen het algemeen formulier invulen en later nabewerken.</em>
                  </small>
                </p>
              </ion-card-title>
            </ion-card-header>

            <br>

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

                <ion-button class="btn__send-report" type="submit" expand="block">Nabewerken</ion-button>
              </v-form>

              <hr>
              <!-- Overview Submitted Reports -->
              <header>
                <h2 class="heading-overview-reports">Recent opgemaakt - nabewerking</h2>
                <p>
                  Klik op een tegel voor meer informatie.
                  <br>Klik een tweede keer op de tegel om deze in te klappen.
                  tegel te klikken.
                </p>
              </header>


              <br>

              <RecentAssignedReports :formSubmissions="formSubmissions" />
              <p>
                Controleer goed <strong>alle</strong> rapportage(s). Bent u tevreden? Verzend uw rapportage(s) naar de
                aannemer.
                <br> De pagina zal refreshen nadat de rapportage(s) zijn verzonden.
                <br><br><strong>LET OP!</strong> Zodra u op verzenden klikt worden <strong>ALLE</strong> rapportage(s)
                verzonden.
                <br><br>Het dringende advies om <strong>niet</strong> meerdere rapportages toe te wijzen.
              </p>

              <br>

              <ion-button @click="sendFormToBase">Verzend naar aannemer</ion-button>

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


import { defineComponent, ref, Ref, onMounted } from 'vue';
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

      localStorage.setItem('formSubmissions', JSON.stringify(formSubmissions.value));
    };

    const toggleForm = () => {
      showForm.value = !showForm.value;
    }

    onMounted(() => {
      const storedData = localStorage.getItem('formSubmissions');

      if (storedData) {
        formSubmissions.value = JSON.parse(storedData);
      }
    })

    const sendFormToBase = () => {
      const storedData: string | null = localStorage.getItem('formSubmissions');
      let confirmSending: boolean = confirm("Weet u zeker dat u alle rapportages wilt verzenden?");
      if (confirmSending) {
        if (storedData) {
          localStorage.removeItem('formSubmissions');
          location.reload();
        }
      }
    }

    return {
      onSubmit,
      selectedFormOption,
      showForm,
      toggleForm,
      formSubmissions,
      sendFormToBase,
    };
  },
});
</script>

<style src="../styles/assignedView.css"></style>