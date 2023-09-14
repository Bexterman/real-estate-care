<template>
  <div>

    <div v-if="sortedReports.length > 0">
      <div v-for="report in sortedReports" :key="report.id">


        <br>

        <ion-card-header>
          <div @click="toggleDropdown(report.id)">
            <header>
              <h2>
                #{{ report.id + ' | ' + report.address }}
                <br><sub>Opmaakdatum: {{ report.date }}</sub>
              </h2>
            </header>
          </div>

          <br>
          <div v-if="dropdownReport[report.id]">
            <ul>
              <div v-for="(section, sectionKey) in report.report" :key="sectionKey">

                <!-- Damage Report -->
                <li v-if="section.damage">
                  <header>
                    <h3>Beschadiging</h3>
                  </header>
                  <p><span>Locatie:</span> {{ section.damage.dmg_location }}</p>
                  <p><span>Nieuwe schade:</span> {{ section.damage.dmg_new }}</p>
                  <p><span>Type schade:</span> {{ section.damage.dmg_type }} </p>
                  <p><span>Constatering:</span> {{ section.damage.dmg_noticed }} </p>
                  <p><span>Actie vereist:</span> {{ section.damage.dmg_action_required }} </p>
                  <p><span>Omschrijving:</span> {{ section.damage.dmg_description }} </p>

                  <br>
                  <p><strong>Bijlage</strong></p>
                  <p>Afbeelding 1: <a>{{ section.damage.dmg_image_a }}</a> </p>
                  <p>Afbeelding 2: <a>{{ section.damage.dmg_image_b }}</a></p>
                  <p>Afbeelding 3: <a>{{ section.damage.dmg_image_c }}</a> </p>
                </li>

                <hr>

                <!-- Maintenance Report -->
                <li v-if="section.maintenance">
                  <header>
                    <h3>Achterstallig onderhoud</h3>
                  </header>
                  <p><span>Locatie:</span> {{ section.maintenance.mtc_location }} </p>
                  <p><span>Type onderhoud:</span> {{ section.maintenance.mtc_type }} </p>
                  <p><span>Actie vereist:</span> {{ section.maintenance.mtc_action_required }} </p>
                  <p><span>Geschatte kosten:</span> {{ section.maintenance.mtc_estimated_expense }} </p>

                  <br>
                  <p><span>Bijlage</span></p>
                  <p>Afbeelding 1: <a>{{ section.maintenance.mtc_image_a }}</a> </p>
                  <p>Afbeelding 2: <a>{{ section.maintenance.mtc_image_b }}</a> </p>
                  <p>Afbeelding 3: <a>{{ section.maintenance.mtc_image_c }}</a> </p>
                </li>

                <!-- Technical Report -->
                <li v-if="section.technical">
                  <header>
                    <h3>Technische installatie</h3>
                  </header>
                  <p><span>Locatie:</span> {{ section.technical.tch_location }} </p>
                  <p><span>Type installatie:</span> {{ section.technical.tch_type }} </p>
                  <p><span>Gebreken:</span> {{ section.technical.tch_malfunction }} </p>
                  <p><span>Testprocedure:</span> {{ section.technical.tch_testprocedure }} </p>
                  <p><span>Goed gekeurd:</span> {{ section.technical.tch_approved }} </p>
                  <p><span>Commentaar:</span> {{ section.technical.tch_commentary }} </p>

                  <br>
                  <p><span>Bijlage</span></p>
                  <p>Afbeelding 1: <a>{{ section.technical.tch_image_a }}</a> </p>
                  <p>Afbeelding 2: <a>{{ section.technical.tch_image_b }}</a> </p>
                  <p>Afbeelding 3: <a>{{ section.technical.tch_image_c }}</a> </p>
                </li>

                <!-- Modifications Report -->
                <li v-if="section.modifications">
                  <header>
                    <h3>Modificaties</h3>
                  </header>
                  <p><span>Documentatie:</span> <a>{{ section.modifications.mfs_documented }}</a> </p>
                  <p><span>Locatie:</span> {{ section.modifications.mfs_location }} </p>
                  <p><span>Uitvoerende partij:</span> {{ section.modifications.mfs_executed_party }} </p>
                  <p><span>Modificatie:</span> {{ section.modifications.mfs_type }} </p>
                  <p><span>Actie vereist:</span> {{ section.modifications.mfs_action_required }} </p>
                  <p><span>Commentaar:</span> {{ section.modifications.mfs_commentary }} </p>

                  <br>
                  <p><span>Bijlage</span></p>
                  <p>Afbeelding 1: <a>{{ section.modifications.mfs_image_a }}</a> </p>
                  <p>Afbeelding 2: <a>{{ section.modifications.mfs_image_b }}</a> </p>
                  <p>Afbeelding 3: <a>{{ section.modifications.mfs_image_c }}</a> </p>
                </li>
              </div>
            </ul>
          </div>

          <br>
          <hr>
          <br>
        </ion-card-header>

      </div>
    </div>

    <div v-else>
      Geen rapportages beschikbaar.
    </div>



  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import dummyReports from '../../data/assignedReports.json';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'ListDummyReports',
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

    const sortedReports = computed(() => {
      return dummyReportsRef.rec_reports.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    });

    return {
      dummyReports: dummyReportsRef,
      toggleDropdown,
      dropdownReport,
      sortedReports,
    };
  },
})
</script>

<style src="../../styles/listCompletedReports.css" ></style>