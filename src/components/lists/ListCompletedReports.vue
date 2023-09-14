<template>
  <!-- Main Content -->
  <div v-for="filteredReport in filteredList" :key="filteredReport.id">

    <!-- Card -->
    <ion-card-content v-if="filteredReport.report" class="main-card-content">

      <!-- Card Header -->
      <ion-card-header>
        <div @click="toggleDropdown(filteredReport.id)">
          <h2>
            #{{ filteredReport.id }} | {{ filteredReport.address }}
            <br><sub>Opmaakdatum: {{ filteredReport.date }}</sub>
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
              <p><span>Locatie:</span> {{ filteredReport.report[0].damage.dmg_location }} </p>
              <p><span>Nieuwe schade:</span> {{ filteredReport.report[0].damage.dmg_new }} </p>
              <p><span>Type schade:</span> {{ filteredReport.report[0].damage.dmg_type }} </p>
              <p><span>Constatering:</span> {{ filteredReport.report[0].damage.dmg_noticed }} </p>
              <p><span>Actie vereist:</span> {{ filteredReport.report[0].damage.dmg_action_required }} </p>
              <p><span>Omschrijving:</span> {{ filteredReport.report[0].damage.dmg_description }} </p>

              <br>
              <p><strong>Bijlage</strong></p>
              <p>Afbeelding 1: <a>{{ filteredReport.report[0].damage.dmg_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ filteredReport.report[0].damage.dmg_image_b }}</a></p>
              <p>Afbeelding 3: <a>{{ filteredReport.report[0].damage.dmg_image_c }}</a> </p>
            </li>

            <hr>

            <!-- Maintenance Report -->
            <li>
              <header>
                <h3>Achterstallig Onderhoud</h3>
              </header>
              <p><span>Locatie:</span> {{ filteredReport.report[1].maintenance.mtc_location }} </p>
              <p><span>Type onderhoud:</span> {{ filteredReport.report[1].maintenance.mtc_type }} </p>
              <p><span>Actie vereist:</span> {{ filteredReport.report[1].maintenance.mtc_action_required }} </p>
              <p><span>Geschatte kosten:</span> {{ filteredReport.report[1].maintenance.mtc_estimated_expense }}
              </p>

              <br>
              <p><span>Bijlage</span></p>
              <p>Afbeelding 1: <a>{{ filteredReport.report[1].maintenance.mtc_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ filteredReport.report[1].maintenance.mtc_image_b }}</a> </p>
              <p>Afbeelding 3: <a>{{ filteredReport.report[1].maintenance.mtc_image_c }}</a> </p>
            </li>

            <hr>

            <!-- Technical Report -->
            <li>
              <header>
                <h3>Technische Installatie</h3>
              </header>
              <p><span>Locatie:</span> {{ filteredReport.report[2].technical.tch_location }} </p>
              <p><span>Type installatie:</span> {{ filteredReport.report[2].technical.tch_type }} </p>
              <p><span>Gebreken:</span> {{ filteredReport.report[2].technical.tch_malfunction }} </p>
              <p><span>Testprocedure:</span> {{ filteredReport.report[2].technical.tch_testprocedure }} </p>
              <p><span>Goed gekeurd:</span> {{ filteredReport.report[2].technical.tch_approved }} </p>
              <p><span>Commentaar:</span> {{ filteredReport.report[2].technical.tch_commentary }} </p>

              <br>
              <p><span>Bijlage</span></p>
              <p>Afbeelding 1: <a>{{ filteredReport.report[2].technical.tch_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ filteredReport.report[2].technical.tch_image_b }}</a> </p>
              <p>Afbeelding 3: <a>{{ filteredReport.report[2].technical.tch_image_c }}</a> </p>
            </li>

            <hr>

            <!-- Modifications Report -->
            <li>
              <header>
                <h3>Modificaties</h3>
              </header>
              <p><span>Documentatie:</span> <a>{{ filteredReport.report[3].modifications.mfs_documented }}</a>
              </p>
              <p><span>Locatie:</span> {{ filteredReport.report[3].modifications.mfs_location }} </p>
              <p><span>Uitvoerende partij:</span> {{ filteredReport.report[3].modifications.mfs_executed_party
              }} </p>
              <p><span>Modificatie:</span> {{ filteredReport.report[3].modifications.mfs_type }} </p>
              <p><span>Actie vereist:</span> {{ filteredReport.report[3].modifications.mfs_action_required }}
              </p>
              <p><span>Commentaar:</span> {{ filteredReport.report[3].modifications.mfs_commentary }} </p>

              <br>
              <p><span>Bijlage</span></p>
              <p>Afbeelding 1: <a>{{ filteredReport.report[3].modifications.mfs_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ filteredReport.report[3].modifications.mfs_image_b }}</a> </p>
              <p>Afbeelding 3: <a>{{ filteredReport.report[3].modifications.mfs_image_c }}</a> </p>
            </li>

          </ul>
        </div>

        <hr>

      </ion-card-header>

    </ion-card-content>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, PropType } from 'vue';
import { useStore } from 'vuex';

import { IonCardContent, IonCardHeader } from '@ionic/vue';

export type DamageReport = {
  dmg_location: string,
  dmg_new: boolean,
  dmg_type: string,
  dmg_noticed: Date,
  dmg_action_required: boolean,
  dmg_description: string,
  dmg_image_a: File,
  dmg_image_b: File,
  dmg_image_c: File
}
export type MaintenanceReport = {
  mtc_location: string,
  mtc_type: string,
  mtc_noticed: Date,
  mtc_action_required: boolean,
  mtc_estimated_expense: string,
  mtc_image_a: File,
  mtc_image_b: File,
  mtc_image_c: File
}
export type TechnicalReport = {
  tch_location: string,
  tch_type: string,
  tch_malfunction: string,
  tch_testprocedure: File,
  tch_approved: boolean,
  tch_commentary: string,
  tch_image_a: File,
  tch_image_b: File,
  tch_image_c: File
}
export type ModificationsReport = {
  mfs_documented: File,
  mfs_location: string,
  mfs_executed_party: string,
  mfs_type: string,
  mfs_action_required: string,
  mfs_commentary: string,
  mfs_image_a: File,
  mfs_image_b: File,
  mfs_image_c: File
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
  address: string,
  report: ReportType[]
}

// ----------------------------------------------------- [export default]
export default defineComponent({
  name: 'CompletedView',
  components: {
    IonCardContent,
    IonCardHeader,
  },
  props: {
    filteredList: {
      type: Array as PropType<Report[]>, // Replace with your data type
      required: true,
    },
    toggleDropdown: {
      type: Function as PropType<(reportId: number) => void>,
      required: true,
    },
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

        store.state.posts.forEach((report: Reports) => {
          dropdownReport.value[report.id] = false;
        });
      });
    });

    const filteredList = computed(() => {
      return store.getters.sortedPosts.filter((filteredReport: any) => {
        const matchedLocation = filteredReport.address.toLowerCase().includes(locationSearch.value.toLowerCase());
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

<style src="../../styles/listCompletedReports.css"></style>
