<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { onMounted, watch } from "vue";

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
});
</script>
