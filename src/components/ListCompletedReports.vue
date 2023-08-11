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

            <!-- Main Content -->
            <div v-for="filteredReport in filteredList" :key="filteredReport.id">

              <!-- Card -->
              <ion-card-content v-if="filteredReport.report" class="main-card-content">

                <!-- Card Header -->
                <ion-card-header>
                  <div @click="toggleDropdown(filteredReport.id)">
                    <h2>
                      #{{ filteredReport.id }} | {{ filteredReport.location }}
                      <br><sub>Datum: {{ filteredReport.date }}</sub>
                    </h2>
                  </div>

                  <!-- Card Content -->
                  <div v-if="dropdownReport[filteredReport.id]">
                    <ul>

                      <!-- Damage Report -->
                      <li>
                        <header>
                          <h3>Beschadiging</h3>
                        </header>
                        <p><span>Locatie:</span> {{ filteredReport.report[0].damage.room }} </p> 
                        <p><span>Nieuwe schade:</span> {{ filteredReport.report[0].damage.new }} </p>
                        <p><span>Type schade:</span> {{ filteredReport.report[0].damage.type }} </p>
                        <p><span>Constatering:</span> {{ filteredReport.report[0].damage.noticed }} </p>
                        <p><span>Actie vereist:</span> {{ filteredReport.report[0].damage.action_required }} </p>
                        <p><span>Omschrijving:</span> {{ filteredReport.report[0].damage.description }} </p>

                        <br><p><strong>Bijlage</strong></p>
                        <p>Afbeelding 1: <a>{{ filteredReport.report[0].damage.image_a }}</a> </p>
                        <p>Afbeelding 2: <a>{{ filteredReport.report[0].damage.image_b }}</a></p> 
                        <p>Afbeelding 3: <a>{{ filteredReport.report[0].damage.image_c }}</a> </p>
                      </li>

                      <hr>

                      <!-- Maintenance Report -->
                      <li>
                        <header>
                          <h3>Achterstallig Onderhoud</h3>
                        </header>
                        <p><span>Locatie:</span> {{ filteredReport.report[1].maintenance.room }} </p>
                        <p><span>Type onderhoud:</span> {{ filteredReport.report[1].maintenance.type }} </p>
                        <p><span>Actie vereist:</span> {{ filteredReport.report[1].maintenance.action_required }} </p>
                        <p><span>Geschatte kosten:</span> {{ filteredReport.report[1].maintenance.estimated_expense }} </p>

                        <br><p><span>Bijlage</span></p>
                        <p>Afbeelding 1: <a>{{ filteredReport.report[1].maintenance.image_a }}</a> </p>
                        <p>Afbeelding 2: <a>{{ filteredReport.report[1].maintenance.image_b }}</a> </p>
                        <p>Afbeelding 3: <a>{{ filteredReport.report[1].maintenance.image_c }}</a> </p>
                      </li>

                      <hr>

                      <!-- Technical Report -->
                      <li>
                        <header>
                          <h3>Technische Installatie</h3>
                        </header>
                        <p><span>Locatie:</span> {{ filteredReport.report[2].technical.room }} </p>
                        <p><span>Type installatie:</span> {{ filteredReport.report[2].technical.type }} </p>
                        <p><span>Gebreken:</span> {{ filteredReport.report[2].technical.malfunction }} </p>
                        <p><span>Testprocedure:</span> {{ filteredReport.report[2].technical.testprocedure }} </p>
                        <p><span>Goed gekeurd:</span> {{ filteredReport.report[2].technical.approved }} </p>
                        <p><span>Commentaar:</span> {{ filteredReport.report[2].technical.commentary }} </p>

                        <br><p><span>Bijlage</span></p>
                        <p>Afbeelding 1: <a>{{ filteredReport.report[2].technical.image_a }}</a> </p>
                        <p>Afbeelding 2: <a>{{ filteredReport.report[2].technical.image_b }}</a> </p>
                        <p>Afbeelding 3: <a>{{ filteredReport.report[2].technical.image_c }}</a> </p>
                      </li>

                      <hr>

                      <!-- Modifications Report -->
                      <li>
                        <header>
                          <h3>Modificaties</h3>
                        </header>
                        <p><span>Documentatie:</span> <a>{{ filteredReport.report[3].modifications.documented }}</a> </p>
                        <p><span>Locatie:</span> {{ filteredReport.report[3].modifications.room }} </p>
                        <p><span>Uitvoerende partij:</span> {{ filteredReport.report[3].modifications.executed_party }} </p>
                        <p><span>Modificatie:</span> {{ filteredReport.report[3].modifications.type }} </p>
                        <p><span>Actie vereist:</span> {{ filteredReport.report[3].modifications.action_required }} </p>
                        <p><span>Commentaar:</span> {{ filteredReport.report[3].modifications.commentary }} </p>
                        
                        <br><p><span>Bijlage</span></p>
                        <p>Afbeelding 1: <a>{{ filteredReport.report[3].modifications.image_a }}</a> </p>
                        <p>Afbeelding 2: <a>{{ filteredReport.report[3].modifications.image_b }}</a> </p>
                        <p>Afbeelding 3: <a>{{ filteredReport.report[3].modifications.image_c }}</a> </p>
                      </li>

                    </ul>
                  </div>
                  
                  <hr>

                </ion-card-header>

              </ion-card-content>

            </div>

          </ion-card>
        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import PageLayout from '@/components/PageLayout.vue';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';

export type DamageReport = {
  room: string,
  new: boolean,
  type: string,
  noticed: Date,
  action_required: boolean,
  description: string,
  image_a: File,
  image_b: File,
  image_c: File
}
export type MaintenanceReport = {
  room: string,
  type: string,
  noticed: Date,
  action_required: boolean,
  estimated_expense: string,
  image_a: File,
  image_b: File,
  image_c: File
}
export type TechnicalReport = {
  room: string,
  type: string,
  malfunction: string,
  testprocedure: File,
  approved: boolean,
  commentary: string,
  image_a: File,
  image_b: File,
  image_c: File
}
export type ModificationsReport = {
  documented: File,
  room: string,
  executed_party: string,
  type: string,
  action_required: string,
  commentary: string,
  image_a: File,
  image_b: File,
  image_c: File
}

export type ReportType = {
  damage: DamageReport,
  maintenance: MaintenanceReport,
  technical: TechnicalReport,
  modifications: ModificationsReport
}

export type Reports = {
  id: number,
  date: Date,
  location: string,
  report: ReportType[]
}

// ----------------------------------------------------- [export default]
export default defineComponent({
  name: 'CompletedView',
  components: {
    PageLayout,
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
    const store = useStore();
    const loading = ref(false);
    const error = null as string | null;
    const locationSearch = ref('');
    const idSearch = ref('');
    const dropdownReport = ref<Record<number, boolean>>({});
    const toggleDropdown = (reportId: number) => {
      dropdownReport.value[reportId] = !dropdownReport.value[reportId];
    }

    onMounted(() => {
      loading.value = true;
      store.dispatch('fetchPosts').then(() => {
        loading.value = false;

        // dropdown functie
        store.state.posts.forEach((report: Reports) => {
          dropdownReport.value[report.id] = false;
        });
      });
    });

    const filteredList = computed(() => {
      return store.getters.sortedPosts.filter((filteredReport: any) => {
        const matchedLocation = filteredReport.location.toLowerCase().includes(locationSearch.value.toLowerCase());
        const matchedId = filteredReport.id.toString().includes(idSearch.value);
        return matchedLocation && matchedId;
      });
    });

    return {
      locationSearch,
      idSearch,
      filteredList,
      error,
      loading,
      dropdownReport,
      toggleDropdown
    };
  }
});
</script>

<style src="../styles/listCompletedReports.css"></style>
