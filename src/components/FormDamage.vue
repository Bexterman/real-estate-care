<template>
  <!-- Form Damage Report -->
    <header>
      <h2>Schade rapportage</h2>
    </header>
    
    <ion-list>

      <!-- Location -->
      <ion-item>
        <ion-input class="assigned-view-form-input" label="Locatie:" :value="inputModel" @ionInput="onInput($event)" ref="ionInputEl" labelPlacement="floating" placeholder="Woonkamer, vergaderruimte, balkon, etc."></ion-input>
      </ion-item>

      <!-- New -->
      <ion-item>
        <ion-radio-group allow-empty-selection>
          <ion-radio value="true">Nieuwe schade:</ion-radio>
        </ion-radio-group>
      </ion-item>

      <!-- Type -->
      <ion-item>
        <ion-select label="Soort schade" label-placement="floating" justify="start">
          <ion-select-option value="moedwillig">Moedwillig</ion-select-option>
          <ion-select-option value="slijtage">Slijtage</ion-select-option>
          <ion-select-option value="geweld">Geweld</ion-select-option>
          <ion-select-option value="normaal-gebruik">Normaal gebruik</ion-select-option>
          <ion-select-option value="calamiteit">Calamiteit</ion-select-option>
          <ion-select-option value="anders">Anders</ion-select-option>
        </ion-select>
      </ion-item>
      
    </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonInput, IonList, IonRadio, IonRadioGroup, IonSelect, IonSelectOption } from '@ionic/vue';

export default defineComponent({
name: 'FormDamage',
components: {
  IonItem,
  IonInput,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonSelect,
  IonSelectOption
},
setup() {
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

return { ionInputEl, inputModel, onInput };
},
});
</script>
