<template>
  <header>
    <h2 class="form-heading">Algemene informatie</h2>
  </header>

  <ion-list class="assigned-view-form-list">

    <ion-item>
      <v-field name="id" v-slot="{ field }" :rules="[isRequired]">
        <v-error-message name="id" class="form-error" />
        <ion-input v-bind="field" name="id" class="form-input" label="Identificatienummer:" labelPlacement="floating"
          type="number" placeholder="Geef een unieke cijfercode"></ion-input>
      </v-field>
    </ion-item>

    <ion-item>
      <v-field name="date" v-slot="{ field }" :rules="isRequired">
        <v-error-message name="date" class="form-error" />
        <ion-input v-bind="field" class="form-input" label="Opmaakdatum:" labelPlacement="floating"
          type="date"></ion-input>
      </v-field>
    </ion-item>


    <ion-item>
      <v-field name="address" v-slot="{ field }" :rules="isRequired">
        <v-error-message name="address" class="form-error" />
        <ion-input v-bind="field" name="address" class="form-input" label="Adres:" labelPlacement="floating"
          placeholder="Voorbeeldstraat 12A, 3456BC Alfabetstad"></ion-input>
      </v-field>
    </ion-item>

  </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonInput, IonList } from '@ionic/vue';
import * as V from 'vee-validate/dist/vee-validate';

export default defineComponent({
  name: 'FormGlobal',
  components: {
    IonItem,
    IonInput,
    IonList,
    VField: V.Field,
    VErrorMessage: V.ErrorMessage,
  },
  setup() {
    const ionInputEl = ref();
    const inputModel = ref('');
    const isRequired = (value: any) => {
      if (!value) {
        return "vereist";
      }
      return true;
    }

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
      reset,
    };
  },
});
</script>