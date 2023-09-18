<template>
  <ion-page>
    <ion-content>
      <div class="main-container">

        <ion-card class="main-card-container login__page">
          <ion-card-header class="main-card-header">
            <ion-card-title class="main-card-title">
              <h1>Login</h1>
            </ion-card-title>
          </ion-card-header>

          <ion-card-content class="main-card-content">
            <form @click.prevent>
              <div>
                <ion-input label="Email: " label-placement="floating" fill="outline" class="custom__input" type="email"
                  id="email" v-model="email" placeholder="Voer uw e-mailadres in"></ion-input>
              </div>
              <br>
              <div>
                <ion-input label="Wachtwoord: " label-placement="floating" fill="outline" class="custom__input"
                  type="password" id="password" v-model="password" placeholder="Voer uw wachtwoord in"></ion-input>
              </div>
              <br>
              <div>
                <ion-button @click="login"> Login </ion-button>
              </div>
            </form>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonButton } from '@ionic/vue';
import { supabase } from '../clients/supabase';
import router from '@/router';

export default defineComponent({
  name: 'LoginView',
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonInput,
    IonButton
  },
  setup() {
    let email = ref('');
    let password = ref('');
    let name = ref('');

    async function login() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
      });
      if (!error) {
        router.push("/animation");
      } else {
        alert("Ongeldig emailadress en/of wachtwoord")
      }
    }

    return {
      email,
      password,
      name,
      login,
    }
  }
});
</script>

<style src="../styles/loginView.css"></style>