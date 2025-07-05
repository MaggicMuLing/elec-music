import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    user: null as null | { name: string },
  }),
  actions: {
    increment() {
      this.count++;
    },
    setUser(user: { name: string }) {
      this.user = user;
    },
  },
});
