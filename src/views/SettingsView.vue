<template>
  <ion-page>
    <page-layout>

      <!-- Content -->
      <ion-content>
        <div class="main-container">
          <ion-card class="main-card-container settings__page">

            <!-- Page Header -->
            <ion-card-header class="main-card-header">
              <ion-card-title class="main-card-title">
                <h1>Instellingen</h1>
              </ion-card-title>
            </ion-card-header>

            <!-- Main Content -->
            <ion-card-content class="main-card-content">

              <!-- Theme Settings -->
              <section>
                <header>
                  <h2>Thema</h2>
                </header>
                <ion-button id="toggle-btn" class="themeToggle" @click="toggleDarkMode">
                  Wijzig
                </ion-button>
              </section>

              <!-- User Settings -->
              <section>
                <header>
                  <h2>Gebruiker</h2>
                </header>
                <ion-button class="themeToggle">Log uit</ion-button>

              </section>

            </ion-card-content>

          </ion-card>
        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLayout from '@/components/includes/PageLayout.vue';
import { IonPage, IonIcon, IonContent, IonCard, IonToggle, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonInput } from '@ionic/vue';


export default defineComponent({
  name: "SettingsView",
  components: {
    IonPage,
    IonIcon,
    IonContent,
    IonCard,
    IonToggle,
    IonButton,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
  },
  data() {
    return {
      darkTheme: false,
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkTheme = !this.darkTheme;

      localStorage.setItem("darkTheme", this.darkTheme ? "enabled" : "disabled");
    },
  },
  created() {
    const darkTheme = localStorage.getItem("darkTheme");

    if (darkTheme === "enabled") {
      this.darkTheme = true;
    }
  },
  watch: {
    darkTheme(newValue) {
      let theme: any = document.getElementById("theme");
      const toggleBtn = document.getElementById("toggle-btn");


      if (newValue) {
        theme.classList.add("darkTheme");
        toggleBtn?.classList.remove("themeToggle");
      } else {
        theme.classList.remove("darkTheme");
        toggleBtn?.classList.add("themeToggle");
      }
    },
  }
});
</script>

<style src="../styles/settingsView.css"></style>