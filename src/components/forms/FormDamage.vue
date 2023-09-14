<template>
  <!-- Form Damage Report -->
  <header>
    <h2 class="form-heading"><ion-icon :icon="caretForwardOutline"></ion-icon>Schade opnemen</h2>
  </header>

  <ion-list>

    <!-- Location -->
    <ion-item>
      <v-field name="dmg_location" v-slot="{ field }">
        <ion-input v-bind="field" name="dmg_location" class="form-input" label="Locatie:" :value="inputModel"
          @ionInput="onInput($event)" ref="ionInputEl" labelPlacement="floating"
          placeholder="Woonkamer, vergaderruimte, balkon, etc."></ion-input>
      </v-field>
    </ion-item>

    <!-- New -->
    <ion-item>
      <v-field name="dmg_new" v-slot="{ field }">
        <ion-radio-group v-bind="field" name="dmg_new" class="form-input"><span>Nieuwe schade:</span>
          <ion-radio value="true">ja</ion-radio>
          <ion-radio value="false">nee</ion-radio>
        </ion-radio-group>
      </v-field>
    </ion-item>

    <!-- Type -->
    <ion-item>
      <v-field name="dmg_type" v-slot="{ field }">
        <ion-select v-bind="field" label="Soort schade" label-placement="floating" class="form-input" justify="start">
          <ion-select-option v-bind="field" name="moedwillig" value="Moedwillig">Moedwillig</ion-select-option>
          <ion-select-option v-bind="field" name="slijtage" value="Slijtage">Slijtage</ion-select-option>
          <ion-select-option v-bind="field" name="geweld" value="Geweld">Geweld</ion-select-option>
          <ion-select-option v-bind="field" name="normaal-gebruik" value="Normaal gebruik">Normaal
            gebruik</ion-select-option>
          <ion-select-option v-bind="field" name="calamiteit" value="Calamiteit">Calamiteit</ion-select-option>
          <ion-select-option v-bind="field" name="anders" value="Anders">Anders</ion-select-option>
        </ion-select>
      </v-field>
    </ion-item>

    <!-- Noticed -->
    <ion-item>
      <v-field name="dmg_date" v-slot="{ field }">
        <ion-input v-bind="field" class="form-input" label="Datum:" labelPlacement="floating" type="date"></ion-input>
      </v-field>
    </ion-item>


    <!-- Action Required -->
    <ion-item>
      <v-field name="dmg_action_required" v-slot="{ field }" :rules="isRequired">
        <ion-radio-group v-bind="field" name="dmg_action_required" class="form-input"><span>Acute actie:</span>
          <ion-radio value="true">ja</ion-radio>
          <ion-radio value="false">nee</ion-radio>
        </ion-radio-group>
      </v-field>
    </ion-item>
    <v-error-message name="dmg_action_required" class="form-error" />

    <!-- Description -->
    <v-field name="dmg_description" v-slot="{ field }">
      <ion-item>
        <ion-textarea v-bind="field" label="Omschrijving:" labelPlacement="floating" class="form-input"
          placeholder="Omschrijf de schade..."></ion-textarea>
      </ion-item>
    </v-field>


    <!-- Upload Files -->
    <ion-item lines="none">
      <span class="custom-label__disabled">Afbeelding toevoegen:</span>
    </ion-item>

    <ion-item>
      <v-field name="dmg_image_a" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding A:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>

    <ion-item>
      <v-field name="dmg_image_b" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding B:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>

    <ion-item>
      <v-field name="dmg_image_c" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding C:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>


  </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonInput, IonList, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonTextarea, IonIcon } from '@ionic/vue';
import * as V from 'vee-validate/dist/vee-validate';

import { caretForwardOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'FormDamage',
  components: {
    IonItem,
    IonInput,
    IonList,
    IonRadio,
    IonRadioGroup,
    IonSelect,
    IonSelectOption,
    IonTextarea,
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
