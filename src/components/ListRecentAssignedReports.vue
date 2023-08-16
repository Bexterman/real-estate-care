<template>
    <div>

      <div v-if="dummyReports.rec_reports.length > 0">
        <div v-for="report in dummyReports.rec_reports" :key="report.id">
          <br>
          
          <ion-card-header>
          <header>
            <div @click="toggleDropdown(report.id)">
              <h2>
                #{{ report.id + ' | ' + report.address }}
                <br><sub>Opmaakdatum: {{ report.date }}</sub>
              </h2>
            </div>
          </header>
          <br>
          <div v-if="dropdownReport[report.id]">
          <ul>
            <li v-for="(section, sectionKey) in report.report" :key="sectionKey">
              <header>
                <h3>{{ sectionKey }}</h3>
              </header>
              <!-- Display the section's details -->
              <!-- You can access properties like section.damage.dmg_location, section.maintenance.mtc_type, etc. -->
              <!-- Add more HTML here to display each section's details -->
            </li>
          </ul>
          </div>

          <br>
            <hr>
          <br>
        </ion-card-header>

          </div>
        </div>

        <div v-else>
          No reports available.
        </div>

      </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import dummyReports from '../data/assignedReports.json';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'ListRecentAssignedReports',
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
  setup() {
    const dummyReportsRef = dummyReports;
    const dropdownReport = ref<Record<number, boolean>>({});

    const toggleDropdown = (reportId: number) => {
      dropdownReport.value[reportId] = !dropdownReport.value[reportId];
    };

    return {
      dummyReports: dummyReportsRef,
      toggleDropdown,
      dropdownReport,
    }
  }
})
</script>

<style src="../styles/listCompletedReports.css" ></style>