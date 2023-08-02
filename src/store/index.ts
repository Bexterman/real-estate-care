import { createStore } from "vuex";

import damage from './modules/damage-store';
import maintenance from './modules/maintenance-store';
import technical from './modules/technical-store';
import modifications from './modules/modifications-store';

const store = createStore({
  modules: {
    damage,
    maintenance,
    technical,
    modifications
  },
});

export default store;