<template>
  <div class="line-hor"></div>
  <Slick/>

</template>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.line-hor {
    /* overflow: hidden; */
    font-size: 0;
    line-height: 0;
    width: 100%;
    height: 8px;
    /* margin-left: 11px; */
    background: url('@/assets/images/line-hor.gif') repeat-x left top;
    z-index: 1;
    position: relative;
}

</style>
<script setup>
import { Slick } from '@/components/widgets/'
</script>

