
<script lang="ts" setup>
const clicka = () => {
  alert('按钮被点击了');
};
</script>
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <v-card-title>Vuetify 集成成功 🎉</v-card-title>
          <v-card-text>
            你现在可以在 Electron + Vue3 + Vuetify 项目中愉快地使用 Vuetify 组件了。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn color="primary" @click="clicka()">
      前往下一步
    </v-btn>
  </v-container>
</template>


<style scoped>
</style>