<template>
  <div
    class="row q-px-md q-py-md container"
    :class="[$q.dark.isActive ? 'bg-dark' : 'bg-white']"
  >
    <q-img
      src="~/assets/images/404.png"
      class="col-12 col-md-5 error-image"
      fit="contain"
    />
    <div class="col-12 col-md-5 error-info">
      <span
        :class="[
          'logo-font',
          (!$q.screen.xs && !$q.screen.sm) || 'logo-font-md',
        ]"
        >Wubba Hub</span
      >
      <span
        class="text-weight-bolder text-negative"
        :class="[!$q.screen.xs && !$q.screen.sm ? 'text-h1' : 'text-h3']"
        >404</span
      >
      <span
        class="text-weight-light"
        :class="[
          $q.dark.isActive ? 'text-grey-2' : 'text-grey-8',
          !$q.screen.xs && !$q.screen.sm ? 'text-h6' : 'text-h6 text-center',
        ]"
        >{{ t("404") }}</span
      >
      <q-btn
        to="/"
        :label="t('back_to_home')"
        icon="west"
        class="q-mt-md"
        no-caps
        outline
        color="positive"
        :size="!$q.screen.xs && !$q.screen.sm ? 'lg' : 'sm'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const $q = useQuasar();
const height = computed<string>(() =>
  !$q.screen.xs && !$q.screen.sm ? "100%" : "50%"
);
</script>

<style scoped lang="scss">
.container {
  --height-var: v-bind(height);
  width: 100vw;
  height: 100vh;
  .error-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--height-var);
  }
  .error-image {
    height: var(--height-var);
  }
}
</style>
