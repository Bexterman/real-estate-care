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
                <h1>Uitgevoerde rapportages</h1>
              </ion-card-title>

            </ion-card-header>

            <br>
            <br>
            <p><em>Klik op het rapport voor meer informatie</em></p>
            <br>

            <ListCompletedReports :filteredList="filteredList" :toggleDropdown="toggleDropdown"></ListCompletedReports>

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
  name: 'CompletedView',
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
    const { loading, error, filteredList, toggleDropdown } = useReportList(locationSearch, idSearch);

    return {
      locationSearch,
      idSearch,
      loading,
      error,
      filteredList,
      toggleDropdown,
    };
  },
});
</script>