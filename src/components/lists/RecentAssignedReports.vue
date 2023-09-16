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
              <header class="recent-assigned-form__header">
                <h3>Beschadiging</h3>
              </header>

              <!-- Location -->
              <ion-item>
                <ion-input name="dmg_location" class="form-input" label="Locatie:" labelPlacement="floating"
                  v-model="submission.dmg_location" :disabled="!submission.editing"></ion-input>
              </ion-item>

              <!-- New -->
              <ion-item>
                <ion-radio-group name="dmg_new" class="form-input" v-model="submission.dmg_new"><span>Nieuwe
                    schade:</span>
                  <ion-radio :disabled="!submission.editing" value="true">ja</ion-radio>
                  <ion-radio :disabled="!submission.editing" value="false">nee</ion-radio>
                </ion-radio-group>
              </ion-item>

              <!-- Type -->
              <ion-item>
                <ion-select name="dmg_type" label="Soort schade" label-placement="floating" class="form-input"
                  justify="start" v-model="submission.dmg_type" :disabled="!submission.editing">
                  <ion-select-option name="moedwillig" value="Moedwillig"
                    :disabled="!submission.editing">Moedwillig</ion-select-option>
                  <ion-select-option name="slijtage" value="Slijtage"
                    :disabled="!submission.editing">Slijtage</ion-select-option>
                  <ion-select-option name="geweld" value="Geweld"
                    :disabled="!submission.editing">Geweld</ion-select-option>
                  <ion-select-option name="normaal-gebruik" value="Normaal gebruik"
                    :disabled="!submission.editing">Normaal
                    gebruik</ion-select-option>
                  <ion-select-option name="calamiteit" value="Calamiteit"
                    :disabled="!submission.editing">Calamiteit</ion-select-option>
                  <ion-select-option name="anders" value="Anders"
                    :disabled="!submission.editing">Anders</ion-select-option>
                </ion-select>
              </ion-item>

              <!-- Noticed -->
              <ion-item>
                <ion-input name="dmg_date" class="form-input" label="Datum:" labelPlacement="floating" type="date"
                  v-model="submission.dmg_date" :disabled="!submission.editing"></ion-input>
              </ion-item>

              <!-- Action Required -->
              <ion-item>
                <v-error-message name="dmg_action_required" class="form-error" />
                <ion-radio-group :rules="isRequired" name="dmg_action_required" class="form-input"
                  v-model="submission.dmg_action_required" :disabled="!submission.editing"><span>Acute actie:</span>
                  <ion-radio value="true" :disabled="!submission.editing">ja</ion-radio>
                  <ion-radio value="false" :disabled="!submission.editing">nee</ion-radio>
                </ion-radio-group>
              </ion-item>


              <!-- Description -->
              <ion-item>
                <ion-textarea label="Omschrijving:" labelPlacement="floating" class="form-input"
                  v-model="submission.dmg_description" :disabled="!submission.editing"></ion-textarea>
              </ion-item>


              <br>
              <strong>Afbeeldingen kunnen niet gewijzigd worden</strong>
              <br>
              <p><strong>Bijlage</strong></p>
              <p>Afbeelding 1: <a>{{ submission.dmg_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ submission.dmg_image_b }}</a></p>
              <p>Afbeelding 3: <a>{{ submission.dmg_image_c }}</a> </p>'
              <br>

              <ion-button class="edit__form-btn" @click="editDamage(submission.id)">Bewerken</ion-button>
              <ion-button class="edit__form-btn" @click="saveDamage(submission.id)"
                v-if="submission.editing">Opslaan</ion-button>
            </li>

            <hr>











            <!-- Maintenance Report -->
            <li>
              <header class="recent-assigned-form__header">
                <h3>Achterstallig Onderhoud</h3>
              </header>

              <!-- Location -->
              <ion-item>
                <ion-input name="mtc_location" class="form-input" label="Locatie:" labelPlacement="floating"
                  v-model="submission.mtc_location" :disabled="!submission.editing"></ion-input>
              </ion-item>

              <!-- Type -->
              <ion-item>
                <ion-select name="mtc_type" label="Soort schade" label-placement="floating" class="form-input"
                  justify="start" v-model="submission.mtc_type" :disabled="!submission.editing">
                  <ion-select-option name="schilderwerk" value="Schilderwerk"
                    :disabled="!submission.editing">Schilderwerk</ion-select-option>
                  <ion-select-option name="houtrot" value="Houtrot"
                    :disabled="!submission.editing">Houtrot</ion-select-option>
                  <ion-select-option name="elektra" value="Elektra"
                    :disabled="!submission.editing">Elektra</ion-select-option>
                  <ion-select-option name="leidingwerk" value="Leidingwerk"
                    :disabled="!submission.editing">Leidingwerk</ion-select-option>
                  <ion-select-option name="calamiteit" value="Calamiteit"
                    :disabled="!submission.editing">Calamiteit</ion-select-option>
                  <ion-select-option name="beglazing" value="Beglazing"
                    :disabled="!submission.editing">Beglazing</ion-select-option>
                </ion-select>
              </ion-item>

              <!-- Action Required -->
              <ion-item>
                <v-error-message name="dmtc_action_required" class="form-error" />
                <ion-radio-group :rules="isRequired" name="mtc_action_required" class="form-input"
                  v-model="submission.mtc_action_required" :disabled="!submission.editing"><span>Acute actie:</span>
                  <ion-radio value="true" :disabled="!submission.editing">ja</ion-radio>
                  <ion-radio value="false" :disabled="!submission.editing">nee</ion-radio>
                </ion-radio-group>
              </ion-item>

              <!-- Indication costs -->
              <ion-item>
                <ion-select name="mtc_estimated_expense" label="Kostenindicatie" label-placement="floating"
                  class="form-input" justify="start" v-model="submission.mtc_estimated_expense"
                  :disabled="!submission.editing">
                  <ion-select-option name="0-500" value="0-500" :disabled="!submission.editing">0-500</ion-select-option>
                  <ion-select-option name="500-1.500" value="500-1.500"
                    :disabled="!submission.editing">500-1.500</ion-select-option>
                  <ion-select-option name="1.500+" value="1.500+"
                    :disabled="!submission.editing">1.500+</ion-select-option>
                </ion-select>
              </ion-item>

              <br>
              <strong>Afbeeldingen kunnen niet gewijzigd worden</strong>
              <br>
              <p><span>Bijlage</span></p>
              <p>Afbeelding 1: <a>{{ submission.mtc_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ submission.mtc_image_b }}</a> </p>
              <p>Afbeelding 3: <a>{{ submission.mtc_image_c }}</a> </p>
              <br>

              <ion-button class="edit__form-btn" @click="editDamage(submission.id)">Bewerken</ion-button>
              <ion-button class="edit__form-btn" @click="saveDamage(submission.id)"
                v-if="submission.editing">Opslaan</ion-button>
            </li>

            <hr>











            <!-- Technical Report -->
            <li>
              <header class="recent-assigned-form__header">
                <h3>Technische Installatie</h3>
              </header>

              <!-- Location -->
              <ion-item>
                <ion-input name="tch_location" class="form-input" label="Locatie:" labelPlacement="floating"
                  v-model="submission.tch_location" :disabled="!submission.editing"></ion-input>
              </ion-item>

              <!-- Type -->
              <ion-item>
                <ion-select name="tch_type" label="Soort schade" label-placement="floating" class="form-input"
                  justify="start" v-model="submission.tch_type" :disabled="!submission.editing">
                  <ion-select-option name="koeling" value="Koeling"
                    :disabled="!submission.editing">Koeling</ion-select-option>
                  <ion-select-option name="verwarming" value="Verwarming"
                    :disabled="!submission.editing">Verwarming</ion-select-option>
                  <ion-select-option name="luchtverversing" value="Luchtverversing"
                    :disabled="!submission.editing">Luchtverversing</ion-select-option>
                  <ion-select-option name="elektra" value="Elektra"
                    :disabled="!submission.editing">Elektra</ion-select-option>
                  <ion-select-option name="beveiliging" value="Beveiliging"
                    :disabled="!submission.editing">Beveiliging</ion-select-option>
                </ion-select>
              </ion-item>

              <!-- Malfunction -->
              <ion-item>
                <v-error-message name="tch_approved" class="form-error" />
                <ion-textarea :rules="isRequired" label="Gemelde storing:" labelPlacement="floating" class="form-input"
                  v-model="submission.tch_description" :disabled="!submission.editing"></ion-textarea>
              </ion-item>

              <!-- ################# TO DO ################## -->
              <p><span>Testprocedure:</span> {{ submission.tch_testprocedure }} </p>

              <!-- Approved -->
              <ion-item>
                <v-error-message name="tch_approved" class="form-error" />
                <ion-radio-group :rules="isRequired" name="tch_approved" class="form-input"
                  v-model="submission.tch_approved" :disabled="!submission.editing"><span>Acute actie:</span>
                  <ion-radio value="true" :disabled="!submission.editing">ja</ion-radio>
                  <ion-radio value="false" :disabled="!submission.editing">nee</ion-radio>
                </ion-radio-group>
              </ion-item>

              <!-- Commentary -->
              <ion-item>
                <ion-textarea label="Opmerkingen:" labelPlacement="floating" class="form-input"
                  v-model="submission.tch_commentary" :disabled="!submission.editing"></ion-textarea>
              </ion-item>

              <br>
              <strong>Afbeeldingen kunnen niet gewijzigd worden</strong>
              <br>
              <p><span>Bijlage</span></p>
              <p>Afbeelding 1: <a>{{ submission.tch_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ submission.tch_image_b }}</a> </p>
              <p>Afbeelding 3: <a>{{ submission.tch_image_c }}</a> </p>
              <br>

              <ion-button class="edit__form-btn" @click="editDamage(submission.id)">Bewerken</ion-button>
              <ion-button class="edit__form-btn" @click="saveDamage(submission.id)"
                v-if="submission.editing">Opslaan</ion-button>
            </li>

            <hr>











            <!-- Modifications Report -->
            <li>
              <header class="recent-assigned-form__header">
                <h3>Modificaties</h3>
              </header>

              <!-- ################# TO DO ################## -->
              <p><span>Documentatie:</span> <a>{{ submission.mfs_documented }}</a> </p>


              <!-- Location -->
              <ion-item>
                <ion-input name="mfs_location" class="form-input" label="Locatie:" labelPlacement="floating"
                  v-model="submission.mfs_location" :disabled="!submission.editing"></ion-input>
              </ion-item>

              <!-- Executed Party -->
              <ion-item>
                <ion-select name="mfs_executed_party" label="Uitvoerende partij:" label-placement="floating"
                  class="form-input" justify="start" v-model="submission.mfs_executed_party"
                  :disabled="!submission.editing">
                  <ion-select-option name="huurder" value="Huurder"
                    :disabled="!submission.editing">Huurder</ion-select-option>
                  <ion-select-option name="aannemer" value="Aannemer"
                    :disabled="!submission.editing">Aannemer</ion-select-option>
                  <ion-select-option name="onbekend" value="Onbekend"
                    :disabled="!submission.editing">Onbekend</ion-select-option>
                </ion-select>
              </ion-item>

              <!-- Nature of Modification -->
              <ion-item>
                <v-error-message name="mfs_type" class="form-error" />
                <ion-textarea :rules="isRequired" label="Omschrijving:" labelPlacement="floating" class="form-input"
                  v-model="submission.mfs_type" :disabled="!submission.editing"></ion-textarea>
              </ion-item>

              <!-- Action Required -->
              <ion-item>
                <v-error-message name="mfs_action_required" class="form-error" />
                <ion-select :rules="isRequired" label="Actie vereist:" label-placement="floating" class="form-input"
                  justify="start" v-model="submission.mfs_action_required" :disabled="!submission.editing">
                  <ion-select-option name="accepteren" value="Accepteren"
                    :disabled="!submission.editing">Accepteren</ion-select-option>
                  <ion-select-option name="laten-keuren" value="Laten keuren" :disabled="!submission.editing">Laten
                    keuren</ion-select-option>
                  <ion-select-option name="laten-verwijderen" value="Laten verwijderen"
                    :disabled="!submission.editing">Laten
                    verwijderen</ion-select-option>
                  <ion-select-option name="laten-aanpassen" value="Laten aanpassen" :disabled="!submission.editing">Laten
                    aanpassen</ion-select-option>
                  <ion-select-option name="keuren" value="Keuren"
                    :disabled="!submission.editing">Keuren</ion-select-option>
                </ion-select>
              </ion-item>

              <!-- Commentary -->
              <ion-item>
                <ion-textarea label="Opmerkingen:" labelPlacement="floating" class="form-input"
                  v-model="submission.mfs_commentary" :disabled="!submission.editing"></ion-textarea>
              </ion-item>

              <br>
              <strong>Afbeeldingen kunnen niet gewijzigd worden</strong>
              <br>
              <p><span>Bijlage</span></p>
              <p>Afbeelding 1: <a>{{ submission.mfs_image_a }}</a> </p>
              <p>Afbeelding 2: <a>{{ submission.mfs_image_b }}</a> </p>
              <p>Afbeelding 3: <a>{{ submission.mfs_image_c }}</a> </p>
              <br>

              <ion-button class="edit__form-btn" @click="editDamage(submission.id)">Bewerken</ion-button>
              <ion-button class="edit__form-btn" @click="saveDamage(submission.id)"
                v-if="submission.editing">Opslaan</ion-button>
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
import { IonPage, IonContent, IonCard, IonCardContent, IonRadio, IonTextarea, IonSelect, IonSelectOption, IonRadioGroup, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonInput, IonButton } from '@ionic/vue';
import ListDummyReports from '@/components/lists/ListDummyReports.vue';
import * as V from 'vee-validate/dist/vee-validate';


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
    IonRadio,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonRadioGroup,
    IonItem,
    IonInput,
    ListDummyReports,
    VErrorMessage: V.ErrorMessage,
  },
  props: {
    formSubmissions: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
  setup() {
    const isRequired = (value: any) => {
      if (!value) {
        return "vereist veld";
      }
      return true;
    };

    const dropdownReport = ref<Record<number, boolean>>({});

    const toggleDropdown = (reportId: number) => {
      dropdownReport.value[reportId] = !dropdownReport.value[reportId];
    };

    return {
      toggleDropdown,
      dropdownReport,
      isRequired
    }
  },
  methods: {
    editDamage(id: any) {
      const submission = this.formSubmissions.find(submission => submission.id === id);
      submission.editing = true;
    },
    saveDamage(id: any) {
      const submission = this.formSubmissions.find(submission => submission.id === id);
      submission.editing = false;
    },
  },
});
</script>
