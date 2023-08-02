<template>
  <ListCompletedReports></ListCompletedReports>
</template>

<script lang="ts">
import ListCompletedReports from '@/components/ListCompletedReports.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompletedView',
  components: {
    ListCompletedReports
  }
});
</script>
