<template>
    <section class="navigation">
        <div class="container">
          <div class="navigation__content">
            <ul class="navigation__list">

                <li v-for="(el) in menu_items" :key="el.title"
                  class="navigation__list-item"
                  @click="setActive(el)"
                  :class="[{ 'active': el === activeItem }]"
                >
                  <router-link :to="el.page"> {{el.title}} </router-link>

                </li>

					  </ul>
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
  justify-content: space-between;
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

const menu_items = ref([
    { title: 'Home', page: '/'},
    { title: 'Топ 20', page: '/top_20' },
    { title: 'Топ 100', page: '/top_100' },
    { title: 'Новинки', page: '/newFilms'}
])
const activeItem = ref(menu_items.value[0]);
function setActive(item) {
  activeItem.value = item;
}


</script>

