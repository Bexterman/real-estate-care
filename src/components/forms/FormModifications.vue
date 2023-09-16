<template>
  <!-- Form Damage Report -->
  <header>
    <h2 class="form-heading"><ion-icon :icon="caretForwardOutline"></ion-icon>Modificaties inventariseren</h2>
  </header>

  <ion-list>
    <!-- ######### TO DO Modifications PDF ########## -->

    <!-- Location -->
    <ion-item>
      <v-field name="mfs_location" v-slot="{ field }">
        <ion-input v-bind="field" name="mfs_location" class="form-input" label="Locatie:" :value="inputModel"
          @ionInput="onInput($event)" ref="ionInputEl" labelPlacement="floating"
          placeholder="Woonkamer, vergaderruimte, balkon, etc."></ion-input>
      </v-field>
    </ion-item>

    <!-- Executed Party -->
    <ion-item>
      <v-field name="mfs_executed_party" v-slot="{ field }">
        <ion-select v-bind="field" label="Uitvoerende partij:" label-placement="floating" class="form-input"
          justify="start">
          <ion-select-option v-bind="field" name="huurder" value="Huurder">Huurder</ion-select-option>
          <ion-select-option v-bind="field" name="aannemer" value="Aannemer">Aannemer</ion-select-option>
          <ion-select-option v-bind="field" name="onbekend" value="Onbekend">Onbekend</ion-select-option>
        </ion-select>
      </v-field>
    </ion-item>

    <!-- Nature of Modification -->
    <v-field name="mfs_type" v-slot="{ field }" :rules="isRequired">
      <ion-item>
        <v-error-message name="mfs_type" class="form-error" />
        <ion-textarea v-bind="field" label="Omschrijving:" labelPlacement="floating" class="form-input"
          placeholder="Omschrijf de modificatie..."></ion-textarea>
      </ion-item>
    </v-field>

    <!-- Action Required -->
    <ion-item>
      <v-field name="mfs_action_required" v-slot="{ field }" :rules="isRequired">
        <v-error-message name="mfs_action_required" class="form-error" />
        <ion-select v-bind="field" label="Actie vereist:" label-placement="floating" class="form-input" justify="start">
          <ion-select-option v-bind="field" name="accepteren" value="Accepteren">Accepteren</ion-select-option>
          <ion-select-option v-bind="field" name="laten-keuren" value="Laten keuren">Laten keuren</ion-select-option>
          <ion-select-option v-bind="field" name="laten-verwijderen" value="Laten verwijderen">Laten
            verwijderen</ion-select-option>
          <ion-select-option v-bind="field" name="laten-aanpassen" value="Laten aanpassen">Laten
            aanpassen</ion-select-option>
          <ion-select-option v-bind="field" name="keuren" value="Keuren">Keuren</ion-select-option>
        </ion-select>
      </v-field>
    </ion-item>

    <!-- Commentary -->
    <v-field name="mfs_commentary" v-slot="{ field }">
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
      <v-field name="mfs_image_a" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding A:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>

    <ion-item>
      <v-field name="mfs_image_b" v-slot="{ field }">
        <input v-bind="field" accept="image/png, image/gif, image/jpeg" class="form-input input__type-file"
          label="Afbeelding B:" labelPlacement="floating" type="file">
      </v-field>
    </ion-item>

    <ion-item>
      <v-field name="mfs_image_c" v-slot="{ field }">
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
  name: 'FormModifications',
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
