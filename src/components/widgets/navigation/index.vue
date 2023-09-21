<template>
    <section class="navigation">
        <div class="container">
          <div class="navigation__content">
            <ul class="navigation__list">
                <li v-for="(_, tab) in tabs" :key="tab"
                  @click="currentTab = tab"
                  :class="['navigation__list-item', { 'active': currentTab === tab }]"
                >
                  {{ tab }}
                </li>
			</ul>
            <component :is="tabs[currentTab]"></component>
          </div>
        </div>
    </section>
</template>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.navigation__list {
  display: flex;
  /* justify-content: space-between; */
}
.navigation__list-item {
  padding: 5px 106px;
  font-size: 18px;
  line-height: 2.4em;
  background-color: #000;
  color: white;
  cursor: pointer;
  border-radius: 15px 15px 0 0;
}
.navigation__list-item:hover {
  color: #d72a18;
}
.navigation__list-item.active {
  color: #d72a18 !important;
  background-color: lightgray;
}
.router-link-active.router-link-exact-active {
  color: #d72a18;
}

</style>
<script setup>
import { ref } from 'vue';
import { Home, Top20 } from '@/components/widgets/';

const currentTab = ref('Home');
const tabs = {
  Home, Top20
}

</script>

