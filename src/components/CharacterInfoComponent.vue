<template>
  <q-card flat class="q-py-sm q-mb-md sticky bg-transparent">
    <div class="row q-mt-sm q-mx-md">
      <q-btn
        icon="west"
        dense
        class="q-mr-xs col-1"
        color="primary"
        flat
        @click="router.back()"
        aria-label="Voltar"
      />
      <div class="col-10 row">
        <div
          class="text-h5 col-12 col-md-9 text-accent text-bold"
          :class="[isCentered]"
        >
          {{ character.name }}
        </div>
        <div class="col-12 col-md-3 justify-center flex">
          <span
            class="text-center q-mr-md text-bold"
            :class="[`text-${statusColor}`]"
            >{{ t(character.status) }}</span
          >
          <span
            class="text-center text-bold"
            :class="[`text-${statusColor}`]"
            >{{ t(`species.${character.species}`) }}</span
          >
        </div>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts" setup>
import { Character } from "src/types/Character";
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { getStatusColor } from "src/composables/useCharacterUtils";
import { useQuasar } from "quasar";

const props = defineProps<{ character: Character }>();
const { t } = useI18n();
const $q = useQuasar();
const router = useRouter();

const statusColor = computed(() => getStatusColor(props.character.status));
const isCentered = computed(() =>
  $q.screen.xs || $q.screen.sm ? "text-center" : ""
);
</script>

<style scoped></style>
