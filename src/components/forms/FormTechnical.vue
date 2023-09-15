<template>
  <!-- Form Damage Report -->
  <header>
    <h2 class="form-heading"><ion-icon :icon="caretForwardOutline"></ion-icon>Installatie opnemen</h2>
  </header>

  <ion-list>

    <!-- Location -->
    <ion-item>
      <v-field name="tch_location" v-slot="{ field }">
        <ion-input v-bind="field" name="tch_location" class="form-input" label="Locatie:" :value="inputModel"
          @ionInput="onInput($event)" ref="ionInputEl" labelPlacement="floating"
          placeholder="Woonkamer, vergaderruimte, balkon, etc."></ion-input>
      </v-field>
    </ion-item>

    <!-- Type -->
    <ion-item>
      <v-field name="tch_type" v-slot="{ field }" :rules="isRequired">
        <v-error-message name="tch_type" class="form-error" />
        <ion-select v-bind="field" label="Soort schade" label-placement="floating" class="form-input" justify="start">
          <ion-select-option v-bind="field" name="koeling" value="Koeling">Koeling</ion-select-option>
          <ion-select-option v-bind="field" name="verwarming" value="Verwarming">Verwarming</ion-select-option>
          <ion-select-option v-bind="field" name="luchtverversing"
            value="Luchtverversing">Luchtverversing</ion-select-option>
          <ion-select-option v-bind="field" name="elektra" value="Elektra">Elektra</ion-select-option>
          <ion-select-option v-bind="field" name="beveiliging" value="Beveiliging">Beveiliging</ion-select-option>
        </ion-select>
      </v-field>
    </ion-item>

    <!-- Malfunction -->
    <v-field name="tch_malfunction" v-slot="{ field }" :rules="isRequired">
      <ion-item>
        <v-error-message name="tch_malfunction" class="form-error" />
        <ion-textarea v-bind="field" label="Gemelde storingen:" labelPlacement="floating" class="form-input"
          placeholder="Omschrijf de storing..."></ion-textarea>
      </ion-item>
    </v-field>

    <!-- Test Procedure 
    <Router-link to="/knowledgebase">
      <ion-button expand=“full” (click)=“openLocalPdf()”>Open Local PDF</ion-button>
    </Router-link>

    *** NOG TE DOEN 
    https://ionicframework.com/docs/native/filesystem
    -->

    <!-- Approved -->
    <ion-item>
      <v-field name="tch_approved" v-slot="{ field }" :rules="isRequired">
        <v-error-message name="tch_approved" class="form-error" />
        <ion-radio-group v-bind="field" name="tch_approved" class="form-input"><span>Goedgekeurd</span>
          <ion-radio value="true">ja</ion-radio>
          <ion-radio value="false">nee</ion-radio>
        </ion-radio-group>
      </v-field>
    </ion-item>

    <!-- Commentary -->
    <v-field name="tch_commentary" v-slot="{ field }">
      <ion-item>
        <ion-textarea v-bind="field" label="Opmerkingen:" labelPlacement="floating" class="form-input"
          placeholder="Voeg opmerkingen toe..."></ion-textarea>
      </ion-item>
    </v-field>


    <!-- Upload Files -->
    <ion-item lines="none">
      <span class="custom-label__disabled">Afbeelding toevoegen:</span>
    </ion-item>

    <ion-item>
      <v-field name="tch_image_a" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding A:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>

    <ion-item>
      <v-field name="tch_image_b" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding B:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>

    <ion-item>
      <v-field name="tch_image_c" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding C:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>


  </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonInput, IonList, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonTextarea, IonButton, IonIcon } from '@ionic/vue';
import * as V from 'vee-validate/dist/vee-validate';

import { caretForwardOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'FormTechnical',
  components: {
    IonItem,
    IonInput,
    IonList,
    IonRadio,
    IonRadioGroup,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonButton,
    IonIcon,
    VField: V.Field,
    VErrorMessage: V.ErrorMessage,
  },
  setup(_, { emit }) {
    const ionInputEl = ref();
    const inputModel = ref('');
    const isRequired = (value: any) => {
      if (!value) {
        return "vereist veld";
      }
      return true;
    };

    const onInput = (ev: any) => {
      const value = ev.target!.value;
      const filteredValue = value.replace(/[^a-zA-Z0-9\,\s]/g, '');
      inputModel.value = filteredValue;
      const inputCmp = ionInputEl.value;

      if (inputCmp !== undefined) {
        inputCmp.$el.value = filteredValue;
      }
    };

    const reset = () => {
      inputModel.value = '';
      const inputCmp = ionInputEl.value;

      if (inputCmp !== undefined) {
        inputCmp.$el.value = '';
      }
    };

    return {
      ionInputEl,
      inputModel,
      onInput,
      isRequired,
      caretForwardOutline,
      reset,
    };
  },
});
</script>
