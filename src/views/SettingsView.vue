<template>
  <ion-page>
    <page-layout>

      <!-- Content -->
      <ion-content>
        <div class="main-container">
          <ion-card class="main-card-container">

            <!-- Page Header -->
            <ion-card-header class="main-card-header">
              <ion-card-title class="main-card-title">
                <h1>Instellingen</h1>
              </ion-card-title>
            </ion-card-header>

            <!-- Main Content -->
            <ion-card-content class="main-card-content">
              <article>
                <header>
                  <h2>Algemeen</h2>
                </header>
                
                <!-- Notification Settings -->
                <section>
                  <header>
                    <h4>Meldingen</h4>
                  </header>
                  <div>
                    <ion-toggle v-model="notificationsToggleChecked"></ion-toggle>
                    <ion-icon class="settings-view-icon transition-delay" :src="notificationsToggleChecked ? notifications : notificationsOff" :style="{color: notificationsToggleChecked ? '#03c8bf' : ''}"></ion-icon>
                  </div>
                </section>

                <!-- Sound Settings -->
                <section>
                  <header>
                    <h4>Geluid</h4>
                  </header>
                  <div>
                    <ion-toggle v-model="volumeToggleChecked" :checked="true"></ion-toggle>
                    <ion-icon class="settings-view-icon  transition-delay" :src="volumeToggleChecked ? volumeHigh : volumeMute" :style="{color: volumeToggleChecked ? '#03c8bf' : ''}"></ion-icon>
                  </div>
                </section>

                <!-- Theme Settings -->
                <section>
                  <header>
                    <h4>Thema</h4>
                  </header>
                  <div>
                    <ion-toggle v-model="themeToggleChecked" :checked="true"  @click="changeTheme"></ion-toggle>
                    <ion-icon class="settings-view-icon  transition-delay" :src="themeToggleChecked ? sunny : moon" :style="{color: themeToggleChecked ? '#03c8bf' : ''}"></ion-icon>
                  </div>
                </section>

              </article>
            </ion-card-content>

          </ion-card>
          </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PageLayout from '@/components/PageLayout.vue';
import { IonPage, IonIcon, IonContent, IonCard, IonToggle, IonButton, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { moon, sunny, volumeHigh, volumeMute, notifications, notificationsOff } from 'ionicons/icons'


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
    IonCardContent
  },
  setup() {
    
    const notificationsIcon = ref(notifications);
    const volumesIcon = ref(volumeHigh);
    const themesIcon = ref(sunny);

    const notificationsToggleChecked = ref(true);
    const volumeToggleChecked = ref(true);
    const themeToggleChecked = ref(true);

    return {
      notifications,
      notificationsOff,
      volumeMute,
      volumeHigh,
      sunny,
      moon,

      notificationsIcon,
      volumesIcon,
      themesIcon,

      notificationsToggleChecked,
      volumeToggleChecked,
      themeToggleChecked
    }
  },
  methods: {
    changeTheme(e: any) {
      if (e.target.checked) {
        document.body.classList.add("themeToggle"); 
      } else {
        document.body.classList.remove("themeToggle");
      }
    }
  }
  
});
</script>

<style src="../styles/settingsView.css"></style>