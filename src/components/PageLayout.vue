<template>
    <ion-page class="maximum-width">
      <ion-header class="container-page-header">

        <div class="page-fancy-bar"></div>
        <ion-toolbar>
          
          <div class="wrapper-page-header">
            <!-- Logo -->
            <ion-list class="container-logo" lines="none" color="none">
              <ion-item class="hover-routerlink" router-link="/">
                <img class="logo" src="../assets/logo/logo-icon.png" alt="logo"/>
                <img class="logo-text" src="../assets/logo/logo-text.png" alt="bedrijfsnaam"/>
              </ion-item>
            </ion-list>

            <!-- Navigation -->
            <ion-list lines="none" class="header-nav">
              <!-- Routerlink maken voor noticifation -->
              <ion-item class="header-nav-icon" router-link="/notifications">
                <ion-icon class="hover-routerlink" :src="notifications" size="large"></ion-icon>
              </ion-item>

              <ion-item class="header-nav-icon" router-link="/settings">
                <ion-icon class="hover-routerlink" :src="settings" size="large"></ion-icon>
              </ion-item>
            </ion-list>
          </div>

        </ion-toolbar>
      </ion-header>
      <slot/>

      <ion-footer class="container-page-footer">
        <ion-toolbar>
          <div class="wrapper-page-footer">

            <ion-list class="footer-nav" lines="none">

              <ion-item>
                <div class="footer-icon-wrapper hover-routerlink">
                  <ion-icon class="footer-icon" :src="buildOutline"></ion-icon>
                  <span class="footer-icon-text">Actieve taak</span>
                </div>
              </ion-item>

              <ion-item>
                <div class="footer-icon-wrapper hover-routerlink">
                  <ion-icon class="footer-icon" :src="searchOutline"></ion-icon>
                  <span class="footer-icon-text">Zoeken</span>
                </div>
              </ion-item>

              <ion-item>
                <div class="footer-icon-wrapper hover-routerlink">
                  <ion-icon class="footer-icon" :src="informationCircleOutline"></ion-icon>
                  <span class="footer-icon-text">Informatie</span>
                </div>
              </ion-item>

            </ion-list>

          </div>
        </ion-toolbar>
      </ion-footer>

    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonImg, IonIcon, IonNav, IonList, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';
import { settings, notifications, informationCircleOutline, notificationsOutline, buildOutline, searchOutline, } from 'ionicons/icons'


export default defineComponent({
  name: 'PageLayout',
  components: {
    IonContent, 
    IonHeader, 
    IonFooter,
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonImg,
    IonIcon,
    IonNav,
    IonList,
    IonItem
  },
  setup() {
    return {
      settings,
      notifications,
      informationCircleOutline,
      notificationsOutline,
      buildOutline,
      searchOutline,
    }
  }
});
</script>