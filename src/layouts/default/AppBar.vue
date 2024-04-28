<script lang="ts" setup>
// import -------------------------
import {reactive, ref} from 'vue'
import router from "@/router";
// variable -------------------------
const drawer = ref(true);
const menuList = reactive([
  { type:'menu',
    title : 'sample',
    path: '',
    children: [
      {type:'menu', title : 'env', path: '/envSample'},
    ],
    isLeaf: false,
  },
  { type:'menu',
    title : 'utils',
    path: '',
    children: [
      {type:'menu', title : 'vconsole', path: '/util/vconsole'},
    ],
    isLeaf: false,
  }
]);
const openMenus = ref([]); // 열려있는 메뉴들
// function -------------------------
function gogoMenu(path :string) {
  drawer.value = false;
  router.push(path)
}
</script>

<template>
  <v-app-bar app>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </template>
    <v-app-bar-title>vue3 + vutify3 + ts</v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer">
    <v-list v-model:opened="openMenus">
      <template v-for="(menu1, idx) in menuList" :key="idx">
<!--        1depth-leaf-->
        <v-list-item
          v-if="menu1.isLeaf"
          :title="menu1.title"
          @click="gogoMenu(menu1.path)"
        />
<!--        1depth-group-->
        <v-list-group
          v-else
          :value="menu1.title"
          :title="menu1.title"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="menu1.title"
            />
          </template>
<!--          2depth-leaf-->
          <v-list-item
            v-for="(menu2, idx2) in menu1.children"
            :key="idx2"
            :title="menu2.title"
            :value="menu2.title"
            @click="gogoMenu(menu2.path)"
          />
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

