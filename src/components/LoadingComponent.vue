<template>
  <q-inner-loading :showing="loading">
    <q-spinner-orbit size="50px" color="secondary" />
    <span
      class="text-weight-light q-px-md"
      :class="[headingClass, textClass]"
      >{{ t("loading") }}</span
    >
  </q-inner-loading>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, defineProps } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

withDefaults(defineProps<{ loading?: boolean }>(), {
  loading: false,
});
const $q = useQuasar();
const isMobile = computed(() => $q.screen.xs || $q.screen.sm);
const textClass = computed(() =>
  $q.dark.isActive ? "text-grey-2" : "text-grey-8"
);
const headingClass = computed(() => (isMobile.value ? "" : "text-h6"));
</script>

<style scoped lang="scss">
.loading {
  width: 100vw;
  height: 100vh;
}
</style>
