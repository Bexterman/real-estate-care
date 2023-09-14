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
  methods: {
    async createUser() { // voegt telkens nieuwe user toe met uniek ID
      // collection reference
      const colRef = collection(db, 'users');

      // data to send - hardcoded
      const dataObj = {
        id: "10",
        firstName: "Kinky",
        lastName: "Vloerkleed",
        dob: "1990"
      }
      //create document and return referencte to it
      const docRef = await addDoc(colRef, dataObj);

      // access auto generated ID with .id
      console.log('Document was created with ID: ', docRef.id);
    },

    async updateUser() { // overrites data als 'property value' veranderd, zoals firstName
      await setDoc(doc(db, 'users', '3'), { // voegt dus niet als addDoc data toe 
        id: "3",
        firstName: 'Barry',
        lastName: 'Gozert',
        dob: '2011'
      });
    },

    async getUser() {
      const docSnap = await getDoc(doc(db, 'users', '6'));

      // if it exists, log to console
      if (docSnap.exists()) {
        console.log(docSnap.data());
      } else {
        console.log('Document does not exist');
      }


    },

    async getAllUsers() {
      const querySnap = await getDocs(query(collection(db, 'users')));

      // add each doc to users array
      querySnap.forEach((doc) => {
        this.users.push(doc.data() as User);
      });

      // filter to get users dob after 1990
      // om te testen, verwijder alle dummy data in database
      const q = query(collection(db, 'users'), where('dob', '>', '1990'));
      const querySnapTwee = await getDocs(q);

      // dit aantal zal na de twee ingevoerde data's verschijnen
      querySnapTwee.forEach((doc) => {
        this.users.push(doc.data() as User);
      });

      // users filteren
      const qF = query(collection(db, 'users'), orderBy('firstName'), limit(3));
      const queryFsnap = await getDocs(qF);

      queryFsnap.forEach((doc) => {
        this.users.push(doc.data() as User);
      });
    },

    async deleteUser() {
      await deleteDoc(doc(db, 'users', 'test3')); // voeg test3 user toe in firebase en refresh page

      // delete user field
      await updateDoc(doc(db, 'users', 'test4'), {
        dob: deleteField()
      })
    },

  },
  created() {
    this.createUser();
    this.updateUser();
    this.getUser();
    this.getAllUsers();
    this.deleteUser();
  },
  data() {
    return {
      users: [] as User[],
    }
  },
})

</script>