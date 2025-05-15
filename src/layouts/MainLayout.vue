<template>
  <q-layout view="hHh Lpr lFf">
    <q-header :class="[$q.dark.isActive ? 'bg-dark' : 'bg-white']" bordered>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="leftDrawerOpen ? 'close' : 'menu'"
          color="primary"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <div class="logo-font logo-font-sm full-width text-center">Wubba Hub</div>
        </q-toolbar-title>

        <div>
          <q-btn
            color="primary"
            round
            dense
            flat
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            @click="changeDarkMode"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" overlay elevated>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EssentialLink, {
  type EssentialLinkProps,
} from "components/EssentialLink.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const linksList: EssentialLinkProps[] = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function changeDarkMode() {
  $q.dark.set(!$q.dark.isActive);
}
</script>
