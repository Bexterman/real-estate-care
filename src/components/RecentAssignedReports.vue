<template>
  <div v-if="formSubmissions.length > 0">
    <div v-for="(submission, index) in formSubmissions" :key="index">

      <ion-card-header>
      <header>
        <div @click="toggleDropdown(submission.id)">
        <h2>
          #{{ submission.id + ' | ' + submission.address }}
          <br><sub>Opmaakdatum: {{ submission.date }}</sub>
        </h2>
        </div>
      </header>
      <br>
      <div v-if="dropdownReport[submission.id]">
      <ul>

        <!-- Damage Report -->
        <li>
          <header>
            <h3>Beschadiging</h3>
          </header>
          <p><span>Locatie:</span> {{ submission.dmg_location }}</p> 
          <p><span>Type schade:</span> {{ submission.dmg_new }}</p>
          <p><span>Nieuwe schade:</span> {{ submission.dmg_type }}</p>
        </li>
      </ul>
      </div>

      <br>
        <hr>
      <br>
      </ion-card-header>
      <br>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';


export default defineComponent({
  name: 'RecentAssignedReports',
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton
  },
  props: {
    formSubmissions: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
  setup() {
    const dropdownReport = ref<Record<number, boolean>>({});

    const toggleDropdown = (reportId: number) => {
      dropdownReport.value[reportId] = !dropdownReport.value[reportId];
    };

    return {
      toggleDropdown,
      dropdownReport,
    }
  },
});
</script>

<style src="../styles/listCompletedReports.css"></style>
