<template>
  <div class="card card-body mt-4">
    <form>
      <div class="form-group">
        <label>Naam</label>
        <input class="form-control" required>
      </div>

      <div class="form-froup mt-3">
        <label>Email</label>
        <input class="form-control" type="email" required>
      </div>

      <button type="submit" class="btn btn-btn-success mt-3"></button>
    </form>

    <div>

      <p v-for="user in users" :key="user.id">
        ID: {{ user.id }}<br>
        Voornaam: {{ user.firstName }}<br>
        Achternaam: {{ user.lastName }}<br>
        Geboortedatum: {{ user.dob }}<br><br>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonSelect, IonSelectOption, IonButton, IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonList, IonItem } from '@ionic/vue';

import db from '../../firebase/init.js';
import { onSnapshot, collection, addDoc, doc, getDoc, setDoc, query, getDocs, where, orderBy, limit, deleteField, deleteDoc, updateDoc } from 'firebase/firestore';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export default defineComponent({
  name: 'UserCreate',
  components: {
    IonPage,
    IonCard,
    IonContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return {
      users: [] as User[],
    }
  },
})

</script>