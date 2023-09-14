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
                <h1>Zoeken naar rapportages</h1>
              </ion-card-title>

              <!-- Page Subheader -->
              <ion-card-subtitle class="main-card-subtitle">
                <br><label>Zoeken op id-nummer</label>
                <br><input type="text" v-model="idSearch" placeholder="Typ id nummer">
                <br><br><label>Zoeken op locatie</label>
                <br><input type="text" v-model="locationSearch" placeholder="Typ adres en/of postcode..." />
              </ion-card-subtitle>
            </ion-card-header>

            <br>
            <br>
            <p><em>Klik op het rapport voor meer informatie</em></p>
            <br>

            <ListCompletedReports v-if="displaySearchedReport" :filteredList="filteredList"
              :toggleDropdown="toggleDropdown" />

          </ion-card>
        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import ListCompletedReports from '@/components/lists/ListCompletedReports.vue';
import PageLayout from '@/components/includes/PageLayout.vue';
import { useReportList } from '@/compositions/useReportList';

export default defineComponent({
  name: 'SearchReportView',
  components: {
    PageLayout,
    ListCompletedReports,
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  setup() {
    const locationSearch = ref('');
    const idSearch = ref('');
    const { loading, error, filteredList, toggleDropdown, displaySearchedReport } = useReportList(locationSearch, idSearch);

    return {
      locationSearch,
      idSearch,
      loading,
      error,
      filteredList,
      toggleDropdown,
      displaySearchedReport,
    };
  },
});
</script>

<style src="../styles/listCompletedReports.css"></style>
