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
        :class="[
          !$q.screen.xs && !$q.screen.sm ? 'text-h1' : 'text-h3',
        ]"
        >404</span
      >
      <span
        class="text-weight-light"
        :class="[
          $q.dark.isActive ? 'text-grey-2' : 'text-grey-8',
          !$q.screen.xs && !$q.screen.sm ? 'text-h6' : 'text-h6 text-center',
        ]"
        >Morty! Nós erramos a dimensão… DE NOVO!</span
      >
      <q-btn
        to="/"
        label="Voltar para a realidade segura (página inicial)"
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

const $q = useQuasar();
const height = computed<string>(() =>
  !$q.screen.xs && !$q.screen.sm ? "100%" : "50%"
);
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  .error-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: v-bind(height);
  }
  .error-image {
    height: v-bind(height);
  }
}
</style>
