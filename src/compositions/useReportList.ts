// useReportList.ts
import { ref, computed, onMounted, Ref } from 'vue';
import { useStore } from 'vuex';

export interface Report {
  id: number;
  date: Date;
  address: string;
  report: ReportType[]
}

export type ReportType = {
  damage: DamageReport,
  maintenance: MaintenanceReport,
  technical: TechnicalReport,
  modifications: ModificationsReport
}

export type DamageReport = {
  dmg_location: string,
  dmg_new: boolean,
  dmg_type: string,
  dmg_noticed: Date,
  dmg_action_required: boolean,
  dmg_description: string,
  dmg_image_a: File,
  dmg_image_b: File,
  dmg_image_c: File
}
export type MaintenanceReport = {
  mtc_location: string,
  mtc_type: string,
  mtc_noticed: Date,
  mtc_action_required: boolean,
  mtc_estimated_expense: string,
  mtc_image_a: File,
  mtc_image_b: File,
  mtc_image_c: File
}
export type TechnicalReport = {
  tch_location: string,
  tch_type: string,
  tch_malfunction: string,
  tch_testprocedure: File,
  tch_approved: boolean,
  tch_commentary: string,
  tch_image_a: File,
  tch_image_b: File,
  tch_image_c: File
}
export type ModificationsReport = {
  mfs_documented: File,
  mfs_location: string,
  mfs_executed_party: string,
  mfs_type: string,
  mfs_action_required: string,
  mfs_commentary: string,
  mfs_image_a: File,
  mfs_image_b: File,
  mfs_image_c: File
}

export function useReportList(locationSearch: Ref<string>, idSearch: Ref<string>) {
  const store = useStore();
  const loading = ref(false);
  const error = ref<string | null>(null);
  const dropdownReport = ref<Record<number, boolean>>({});

  onMounted(() => {
    loading.value = true;
    store.dispatch('fetchPosts').then(() => {
      loading.value = false;

      store.state.posts.forEach((report: Report) => {
        dropdownReport.value[report.id] = false;
      });
    });
  });

  const filteredList = computed(() => {
    return store.getters.sortedPosts.filter((filteredReport: Report) => {
      const matchedLocation = filteredReport.address.toLowerCase().includes(locationSearch.value.toLowerCase());
      const matchedId = filteredReport.id.toString().includes(idSearch.value);
      return matchedLocation && matchedId;
    });
  });

  const toggleDropdown = (reportId: number) => {
    dropdownReport.value[reportId] = !dropdownReport.value[reportId];
  };

  const displaySearchedReport = computed(() => {
    const isLocationSearchNotEmpty = locationSearch.value.trim() !== '';
    const isIdSearchNotEmpty = idSearch.value.trim() !== '';

    return isLocationSearchNotEmpty || isIdSearchNotEmpty;
  });

  return {
    loading,
    error,
    filteredList,
    toggleDropdown,
    displaySearchedReport,
  };
}
