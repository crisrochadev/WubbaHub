<template>
  <q-layout view="hHh Lpr lFf">
    <q-header
      bordered
      :class="[$q.dark.isActive ? 'bg-dark-page' : 'bg-white']"
    >
      <q-toolbar style="height: 70px">
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
          <div class="logo-font logo-font-md full-width text-center">
            {{ isMobile ? "WH" : "Wubba Hub" }}
          </div>
        </q-toolbar-title>

        <div>
          <LocaleSelect />
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

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      behavior="desktop"
      :class="[$q.dark.isActive ? 'bg-dark-page' : 'bg-white']"
    >
      <q-list>
        <LinkMenuComponent
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
import { computed, ref } from "vue";
import LinkMenuComponent, {
  type EssentialLinkProps,
} from "components/LinkMenuComponent.vue";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import LocaleSelect from "src/components/LocaleSelectComponent.vue";

const $q = useQuasar();
const { t } = useI18n();

const linksList = computed(() => [
  {
    title: t("links.characters"),
    caption: t("links.characters_caption"),
    icon: "person",
    link: "/",
    blank: false,
  },
  {
    title: t("links.repository"),
    caption: t("links.repository_caption"),
    icon: "code",
    link: "https://github.com/crisrochadev/WubbaHub",
    blank: true,
  },
  {
    title: t("links.portfolio"),
    caption: t("links.portfolio_caption"),
    icon: "cases",
    link: "https://linkedin.com/in/crisrochadev",
    blank: true,
  },
  {
    title: t("links.linkedin"),
    caption: t("links.linkedin_caption"),
    icon: "record_voice_over",
    link: "https://linkedin.com/in/crisrochadev",
    blank: true,
  },
]);

const leftDrawerOpen = ref(false);
const isMobile = computed(() => $q.screen.xs || $q.screen.sm);
function changeDarkMode() {
  $q.dark.set(!$q.dark.isActive);
}
</script>
