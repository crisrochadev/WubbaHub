<template>
  <q-btn
    v-for="localeOption in localeOptions"
    :key="localeOption.value"
    dense
    unelevated
    :flat="localeOption.value != locale"
    :icon="localeOption.icon"
    @click="locale = localeOption.value"
    color="primary"
    class="q-pt-none"
  />
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });
const $q = useQuasar();
interface ValueType {
  value: string;
  icon: string;
}
const localeOptions = ref<ValueType[]>([
  { value: "en-US", icon: "img:/images/eua.png" },
  { value: "pt-BR", icon: "img:/images/brasil.png" },
  { value: "es-ES", icon: "img:/images/espanha.png" },
]);
watch(locale, (newLocale) => {
  $q.localStorage.setItem('locale', newLocale);
})
</script>
