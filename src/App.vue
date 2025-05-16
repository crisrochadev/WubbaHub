<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

const $q = useQuasar();
watch(
  () => $q.dark.isActive,
  (val) => {
    $q.localStorage.setItem("dark", val);
  }
);
onMounted(() => {
  let dark = Boolean($q.localStorage.getItem("dark"));
  $q.dark.set(dark);

  let savedLocale = $q.localStorage.getItem("locale");
  if (savedLocale) {
    locale.value = savedLocale as string;
  } else {
    let currentLocale = $q.lang.getLocale();
    locale.value = currentLocale as string;
  }
});
</script>
