<template>
  <q-inner-loading :showing="loading">
    <q-spinner-orbit size="50px" color="secondary" />
    <span
      class="text-weight-light q-px-md"
      :class="[
        !$q.screen.xs && !$q.screen.sm && 'text-h6',
        $q.dark.isActive ? 'text-grey-2' : 'text-grey-8',
      ]"
      >Carregando... tente não virar uma versão maligna de si mesmo</span
    >
  </q-inner-loading>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { defineProps } from "vue";
defineProps<{ loading?: boolean }>();
const $q = useQuasar();
</script>

<style scoped lang="scss">
.loading {
  width: 100vw;
  height: 100vh;
}
</style>
