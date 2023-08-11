<template>
    <header>
      <h2>Algemene informatie</h2>
    </header>
    
    <ion-list class="assigned-view-form-list">

      <ion-item>
        <ion-input class="assigned-view-form-input" label="Identificatienummer:" labelPlacement="floating" type="number" :readonly="true" placeholder="" value="6"></ion-input>
      </ion-item>

      <ion-item>
        <ion-input class="assigned-view-form-input" label="Aanmaakdatum:" labelPlacement="floating" type="date"></ion-input>
      </ion-item>

      <ion-item>
        <ion-input class="assigned-view-form-input" label="Adres:" :value="inputModel" @ionInput="onInput($event)" ref="ionInputEl" labelPlacement="floating" placeholder="Voorbeeldstraat 12A, 3456BC Alfabetstad"></ion-input>
      </ion-item>
      
    </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonItem, IonInput, IonList } from '@ionic/vue';

export default defineComponent({
name: 'FormGlobal',
components: {
IonItem,
IonInput,
IonList,
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
