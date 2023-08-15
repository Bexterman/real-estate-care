<template>
  <!-- Form Damage Report -->
    <header>
      <h2 class="form-heading">Schade rapportage</h2>
    </header>
    
    <ion-list>

      <!-- Location -->
      <ion-item>
        <v-field name="dmg_location" v-slot={field} :rules="isRequired">
          <ion-input v-bind="field" name="dmg_location" class="form-input" label="Locatie:" :value="inputModel" @ionInput="onInput($event)" ref="ionInputEl" labelPlacement="floating" placeholder="Woonkamer, vergaderruimte, balkon, etc."></ion-input>
        </v-field>
      </ion-item>
    <v-error-message name="dmg_location" class="form-error"/>

      <!-- New -->
      <ion-item>
        <v-field name="dmg_new" v-slot={field} :rules="isRequired">
          <ion-radio-group v-bind="field" name="dmg_new" class="form-input"><span>Nieuwe schade:</span>
            <ion-radio value="true">ja</ion-radio>
            <ion-radio value="false">nee</ion-radio>
          </ion-radio-group>
        </v-field>
      </ion-item>
    <v-error-message name="dmg_location" class="form-error"/>

      <!-- Type -->
      <ion-item>
        <v-field name="dmg_type" v-slot={field} :rules="isRequired">
          <ion-select v-bind="field" label="Soort schade" label-placement="floating" class="form-input" justify="start">
            <ion-select-option v-bind="field" name="moedwillig" value="Moedwillig">Moedwillig</ion-select-option>
            <ion-select-option v-bind="field" name="slijtage" value="Slijtage">Slijtage</ion-select-option>
            <ion-select-option v-bind="field" name="geweld" value="Geweld">Geweld</ion-select-option>
            <ion-select-option v-bind="field" name="normaal-gebruik" value="Normaal gebruik">Normaal gebruik</ion-select-option>
            <ion-select-option v-bind="field" name="calamiteit" value="Calamiteit">Calamiteit</ion-select-option>
            <ion-select-option v-bind="field" name="anders" value="Anders">Anders</ion-select-option>
          </ion-select>
        </v-field>
      </ion-item>
    <v-error-message name="dmg-type" class="form-error"/>

      
    </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonInput, IonList, IonRadio, IonRadioGroup, IonSelect, IonSelectOption } from '@ionic/vue';
import * as V from 'vee-validate/dist/vee-validate';

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
  VField : V.Field,
  VErrorMessage : V.ErrorMessage,
},
setup() {
    // field validations
    const isRequired = (value: any) => {
      console.log("isRequired", value);
      if (!value) {
        return "vereist veld";
      }

      return true;
    }
  
    const ionInputEl = ref();
    const inputModel = ref('');
    const onInput = (ev: any) => {
    const value = ev.target!.value;

    const filteredValue = value.replace(/[^a-zA-Z0-9\,\s]/g, '');

    inputModel.value = filteredValue;

    const inputCmp = ionInputEl.value;
    if (inputCmp !== undefined) {
        inputCmp.$el.value = filteredValue;
      }
    };

    return {
      ionInputEl,
      inputModel,
      onInput,
      isRequired
    };
},
});
</script>
