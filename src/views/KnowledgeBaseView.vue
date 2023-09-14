<template>
  <ion-page>
    <page-layout>

      <ion-content>
        <div class="main-container">

          <ion-card class="main-card-container">
            <ion-card-header class="main-card-header">
              <ion-card-title class="main-card-title">
                <h1>Kennisbank</h1>
              </ion-card-title>

              <ion-card-subtitle class="main-card-subtitle">
                <p><em>Selecteer een artikel</em></p>
              </ion-card-subtitle>
            </ion-card-header>

            <ion-card class="theme-card" v-for="(theme, index) in themes" :key="index">
              <ion-card-header class="theme-card-header" @click="toggleCard(index)">
                <ion-icon name="book"></ion-icon>
                <div>{{ theme.header }}</div>
              </ion-card-header>

              <ion-card-content v-html="theme.content" v-if="theme.showContent"></ion-card-content>
            </ion-card>

          </ion-card>
        </div>
      </ion-content>

    </page-layout>
  </ion-page>
</template>

<script lang="ts">
import PageLayout from '@/components/includes/PageLayout.vue';
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/vue';

import knowledgeData from '@/data/files/dummyBaseFiles.json';

export default defineComponent({
  name: 'KnowledgeBaseView',
  components: {
    PageLayout,
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    knowledgeData,
    IonIcon,

  },
  data() {
    return {
      themes: [] as { header: string; content: string; showContent: boolean }[],
    };
  },
  methods: {
    toggleCard(index: any) {
      this.themes[index].showContent = !this.themes[index].showContent;
    }
  },
  created() {
    this.themes = knowledgeData.themes;
  },
})
</script>

<style scoped src="../styles/knowledgeView.css"></style>