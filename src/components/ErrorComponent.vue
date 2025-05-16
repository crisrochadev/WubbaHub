<template>
  <div class="full-width full-height row q-px-md">
    <q-img
      src="~/assets/images/error.png"
      class="col-12 col-md-5"
      :style="{
        height: containerHeight,
      }"
      fit="contain"
    />
    <div
      v-if="error"
      :class="['col-12 col-md-5', containerClass]"
      :style="{
        height: containerHeight,
      }"
    >
      <p
        class="text-negative text-bold q-my-md full-width"
        :class="[
          !$q.screen.xs && !$q.screen.sm
            ? 'text-h3 text-left'
            : 'text-h4 text-center',
        ]"
      >
        <span class="text-uppercase full-width block"> Erro! </span>
        <span
          class="text-weight-light"
          :class="[
            $q.dark.isActive ? 'text-grey-2' : 'text-grey-8',
            !$q.screen.xs && !$q.screen.sm
              ? 'text-h3 text-left'
              : 'text-h6 text-center',
          ]"
        >
          {{ randomErrorMessage }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ApolloError } from "@apollo/client/errors";
import { useQuasar } from "quasar";
import { defineProps, computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const $q = useQuasar();

defineProps<{
  error?: ApolloError;
}>();
const index = ref<number>(Math.floor(Math.random() * 10));
const randomErrorMessage = computed(() => {
  return t(`errorMessages[${index.value}]`) as string;
});

const containerHeight = computed(() =>
  !$q.screen.xs && !$q.screen.sm ? "100%" : "50%"
);

const isMdUp = computed(() => !$q.screen.xs && !$q.screen.sm);
const containerClass = computed(() =>
  isMdUp.value ? "flex items-center justify-start" : ""
);
</script>

<style scoped></style>
