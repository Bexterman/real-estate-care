<template>
  <!-- Form Damage Report -->
  <header>
    <h2 class="form-heading"><ion-icon :icon="caretForwardOutline"></ion-icon>Onderhoud opnemen</h2>
  </header>

  <ion-list>

    <!-- Location -->
    <ion-item>
      <v-field name="mtc_location" v-slot="{ field }">
        <ion-input v-bind="field" name="mtc_location" class="form-input" label="Locatie:" :value="inputModel"
          @ionInput="onInput($event)" ref="ionInputEl" labelPlacement="floating"
          placeholder="Woonkamer, vergaderruimte, balkon, etc."></ion-input>
      </v-field>
    </ion-item>

    <!-- Type -->
    <ion-item>
      <v-field name="mtc_type" v-slot="{ field }">
        <ion-select v-bind="field" label="Soort" label-placement="floating" class="form-input" justify="start">
          <ion-select-option v-bind="field" name="schilderwerk" value="Schilderwerk">Schilderwerk</ion-select-option>
          <ion-select-option v-bind="field" name="houtrot" value="Houtrot">Houtrot</ion-select-option>
          <ion-select-option v-bind="field" name="elektra" value="Elektra">Elektra</ion-select-option>
          <ion-select-option v-bind="field" name="leidingwerk" value="Leidingwerk">Leidingwerk</ion-select-option>
          <ion-select-option v-bind="field" name="calamiteit" value="Calamiteit">Calamiteit</ion-select-option>
          <ion-select-option v-bind="field" name="beglazing" value="Beglazing">Beglazing</ion-select-option>
        </ion-select>
      </v-field>
    </ion-item>

    <!-- Action Required -->
    <ion-item>
      <v-field name="mtc_action_required" v-slot="{ field }" :rules="isRequired">
        <v-error-message name="mtc_action_required" class="form-error" />
        <ion-radio-group v-bind="field" name="mtc_action_required" class="form-input"><span>Acute actie</span>
          <ion-radio value="true">ja</ion-radio>
          <ion-radio value="false">nee</ion-radio>
        </ion-radio-group>
      </v-field>
    </ion-item>

    <!-- Indication costs -->
    <v-field name="mtc_estimated_expense" v-slot="{ field }">
      <ion-select v-bind="field" label="Kostenindicatie" label-placement="floating" class="form-input" justify="start">
        <ion-select-option v-bind="field" name="0-500" value="0-500">0-500</ion-select-option>
        <ion-select-option v-bind="field" name="500-1.500" value="500-1.500">500-1.500</ion-select-option>
        <ion-select-option v-bind="field" name="1.500+" value="1.500+">1.500+</ion-select-option>
      </ion-select>
    </v-field>


    <!-- Upload Files -->
    <ion-item lines="none">
      <span class="custom-label__disabled">Afbeelding toevoegen:</span>
    </ion-item>

    <ion-item>

      <v-field name="mtc_image_a" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding A:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>

    <ion-item>
      <v-field name="mtc_image_b" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding B:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>

    <ion-item>
      <v-field name="mtc_image_c" v-slot="{ field }">
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
  name: 'FormMaintenance',
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
        return "vereist";
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
