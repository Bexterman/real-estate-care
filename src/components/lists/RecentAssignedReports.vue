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
              <p><span>Type schade:</span> {{ submission.dmg_type }} </p>
              <p><span>Constatering:</span> {{ submission.dmg_noticed }} </p>
              <p><span>Actie vereist:</span> {{ submission.dmg_action_required }} </p>
              <p><span>Omschrijving:</span> {{ submission.dmg_description }} </p>

              <br>
              <p><strong>Bijlage</strong></p>
              <p>Afbeelding 1: <a>{{ submission.dmg_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ submission.dmg_image_b }}</a></p>
              <p>Afbeelding 3: <a>{{ submission.dmg_image_c }}</a> </p>
            </li>

            <hr>

            <!-- Maintenance Report -->
            <li>
              <header>
                <h3>Achterstallig Onderhoud</h3>
              </header>
              <p><span>Locatie:</span> {{ submission.mtc_location }} </p>
              <p><span>Type onderhoud:</span> {{ submission.mtc_type }} </p>
              <p><span>Actie vereist:</span> {{ submission.mtc_action_required }} </p>
              <p><span>Geschatte kosten:</span> {{ submission.mtc_estimated_expense }} </p>

              <br>
              <p><span>Bijlage</span></p>
              <p>Afbeelding 1: <a>{{ submission.mtc_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ submission.mtc_image_b }}</a> </p>
              <p>Afbeelding 3: <a>{{ submission.mtc_image_c }}</a> </p>
            </li>

            <hr>

            <!-- Technical Report -->
            <li>
              <header>
                <h3>Technische Installatie</h3>
              </header>
              <p><span>Locatie:</span> {{ submission.tch_location }} </p>
              <p><span>Type installatie:</span> {{ submission.tch_type }} </p>
              <p><span>Gebreken:</span> {{ submission.tch_malfunction }} </p>
              <p><span>Testprocedure:</span> {{ submission.tch_testprocedure }} </p>
              <p><span>Goed gekeurd:</span> {{ submission.tch_approved }} </p>
              <p><span>Commentaar:</span> {{ submission.tch_commentary }} </p>

              <br>
              <p><span>Bijlage</span></p>
              <p>Afbeelding 1: <a>{{ submission.tch_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ submission.tch_image_b }}</a> </p>
              <p>Afbeelding 3: <a>{{ submission.tch_image_c }}</a> </p>
            </li>

            <hr>

            <!-- Modifications Report -->
            <li>
              <header>
                <h3>Modificaties</h3>
              </header>
              <p><span>Documentatie:</span> <a>{{ submission.mfs_documented }}</a> </p>
              <p><span>Locatie:</span> {{ submission.mfs_location }} </p>
              <p><span>Uitvoerende partij:</span> {{ submission.mfs_executed_party }} </p>
              <p><span>Modificatie:</span> {{ submission.mfs_type }} </p>
              <p><span>Actie vereist:</span> {{ submission.mfs_action_required }} </p>
              <p><span>Commentaar:</span> {{ submission.mfs_commentary }} </p>

              <br>
              <p><span>Bijlage</span></p>
              <p>Afbeelding 1: <a>{{ submission.mfs_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ submission.mfs_image_b }}</a> </p>
              <p>Afbeelding 3: <a>{{ submission.mfs_image_c }}</a> </p>
            </li>
          </ul>
        </div>
        <br>
        <hr>
        <br>
      </ion-card-header>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';
import ListDummyReports from '@/components/lists/ListDummyReports.vue';

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
    IonButton,
    ListDummyReports,
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

<style src="../../styles/listCompletedReports.css"></style>
