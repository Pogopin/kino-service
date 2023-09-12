<template>
  <div class="layout">
    <div class="layout__content">
      <AppLayout>
        <RouterView />
      </AppLayout>
    </div>
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.layout__content {
  flex: 1;
  background: url('./assets/images/tail-top.gif') left top repeat-x #1d1d1d;
}

</style>