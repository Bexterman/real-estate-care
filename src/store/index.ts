import { createStore } from 'vuex';
import axios from 'axios';
const url = 'https://my-json-server.typicode.com/Bexterman/real-estate-care/db';

export default createStore({
  state: {
    posts: [],
    loading: true,
    error: '',
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get(url);
        commit('SET_POSTS', response.data.rec_reports);
        commit('SET_LOADING', false);
      } catch (error) {
        commit('SET_ERROR', 'Er is iets fout gegaan tijdens het ophalen van data.');
        commit('SET_LOADING', false);
      }
    },
  },
  getters: {
    // data sorteren op datum
    sortedPosts(state) {
      function sortByDate(a: any, b: any) {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      }
      return state.posts.slice().sort(sortByDate);
    },
  },
});
