<template>
  <q-card class="character-card">
    <q-item class="full-width item-card" clickable>
      <q-img :src="character.image">
        <q-slide-transition>
          <div class="absolute-bottom full-height flex items-center info-card">
            <div class="full-width">
              <div class="text-subtitle1">{{ character.name }}</div>
              <div class="text-subtitle2">
                {{ getSpecieName(character.species) }}
              </div>
            </div>
            <q-btn
              :label="t('see_character')"
              class="full-width q-mt-md"
              color="secondary"
              unelevated
              :to="{ name: 'character', params: { id: character.id } }"
            />
          </div>
        </q-slide-transition>
      </q-img>
    </q-item>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import  { Character } from "src/types/Character";
import { useI18n } from "vue-i18n";
import useLang from "src/composables/useLang";

const { getSpecieName } = useLang();
const { t } = useI18n();
defineProps<{
  character: Character;
}>();


</script>

<style lang="scss" scoped>
:deep(.item-card) {
  padding: 0 !important;
}
.character-card {
  opacity: 0.8;
  width: calc((100% / 5) - 10px);
  @media (max-width: 695px) {
    width: calc((100% / 4) - 10px);
  }
  @media (max-width: 491px) {
    width: calc((100% / 2) - 10px);
  }
  .info-card {
    opacity: 0;
    transform: translateY(30%);
    transition: 0.3s ease-in-out;
  }
  &:hover {
    opacity: 1;
    .info-card {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
