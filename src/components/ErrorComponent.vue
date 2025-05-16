<template>
  <div class="full-width full-height row q-px-md">
    <q-img
      src="~/assets/images/error.png"
      class="col-12 col-md-5"
      :style="{
        height: !$q.screen.xs && !$q.screen.sm ? '100%' : '50%',
      }"
      fit="contain"
    />
    <div
      v-if="error"
      class="col-12 col-md-5"
      :class="[
        !$q.screen.xs &&
          !$q.screen.sm &&
          ' flex items-center justify-start',
      ]"
      :style="{
        height: !$q.screen.xs && !$q.screen.sm ? '100%' : '50%',
      }"
    >
      <p
        class="text-negative text-bold text-uppercase q-my-md"
        :class="[
          !$q.screen.xs && !$q.screen.sm
            ? 'text-h3 text-left'
            : 'text-h4 text-center',
        ]"
      >
        Erro!
      </p>
      <p
        class="text-weight-light"
        :class="[
            $q.dark.isActive ? 'text-grey-2' : 'text-grey-8',
          !$q.screen.xs && !$q.screen.sm
            ? 'text-h3 text-left'
            : 'text-h6 text-center',
        ]"
      >
        {{ randomErrorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ApolloError } from "@apollo/client/errors";
import { useQuasar } from "quasar";
import { defineProps, onMounted, ref } from "vue";
defineProps<{
  error?: ApolloError;
}>();
const errorMessages = [
  "Ah geez, algo deu errado... de novo!",
  "Essa dimensão está fora do ar. Tente outra timeline.",
  "Rick mexeu no servidor de novo... aguarde enquanto o universo se estabiliza.",
  "Erro 42: A resposta para tudo... menos esse problema.",
  "A API foi abduzida. Tente novamente depois que o portal estabilizar.",
  "Essa requisição morreu. Literalmente. Status: Dead.",
  "Morty, precisamos de mais ciência! A API quebrou.",
  "Erro interdimensional: A resposta está perdida no multiverso.",
  "Carregamento falhou. É como se o Sr. Meeseeks tivesse desistido.",
  "Esse dado evaporou como o último cérebro do Jerry.",
  "Erro ao carregar os dados. Talvez seja culpa do Rick... ou do servidor.",
];

const randomErrorMessage = ref<string>("");

const $q = useQuasar();
onMounted(() => {
  const index = Math.floor(Math.random() * errorMessages.length);
  if (index) randomErrorMessage.value = errorMessages[index] as string;
});
</script>

<style scoped></style>
