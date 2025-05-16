<template>
  <q-page style="height: calc(100vh - 70px)">
    <q-card
      class="full-width full-height q-py-sm q-px-sm bg-transparent"
      flat
      v-if="character"
    >
      <q-card-section
        :horizontal="!isXs"
        class="full-width full-height"
        style="overflow-y: hidden"
      >
        <CharacterInfoCard
          :character="character"
          v-if="isXs "
        />
        <q-img
          class="col-5"
          :fit="isXs  ? 'contain' : 'cover'"
          :src="character.image"
          :style="{
            height: isXs  ? '30%' : '100%',
          }"
        />
        <div
          class="col-7"
          :class="[!isXs ? 'q-px-md' : 'q-py-md']"
          :style="{
            height: isXs ? '60%' : '100%',
          }"
        >
          <CharacterInfoCard
            :character="character"
            v-if="!isXs "
          />
          <q-scroll-area class="full-height">
            <div class="text-grey-6 text-uppercase q-mb-xs q-px-sm">
              {{ t('information_s') }}
            </div>
            <div class="full-width row q-mb-md">
              <q-item
                class="col-12 q-mb-xs item"
                :class="[character.type ? 'col-md-3' : 'col-md-4']"
              >
                <q-item-section side>
                  <q-icon name="person" color="accent"  aria-hidden="true"  />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-7"
                    >{{ t('gender') }}</q-item-label
                  >
                  <q-item-label class="text-secondary text-bold">{{
                    t(character.gender)
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="col-12 q-mb-xs"
                :class="[character.type ? 'col-md-3' : 'col-md-4']"
              >
                <q-item-section side>
                  <q-icon name="location_on" color="accent"  aria-hidden="true"  />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-7"
                    >{{ t('origin') }}</q-item-label
                  >
                  <q-item-label caption class="text-secondary text-bold">{{
                    t(`location.${character.origin.name}`)
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="col-12 q-mb-xs"
                :class="[character.type ? 'col-md-3' : 'col-md-4']"
              >
                <q-item-section side>
                  <q-icon name="place" color="accent"  aria-hidden="true" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-7"
                    >{{ t('current_location') }}</q-item-label
                  >
                  <q-item-label caption class="text-secondary text-bold">{{
                    t(`location.${character.location.name}`)
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                v-if="character.type"
                class="col-12 q-mb-xs"
                :class="[character.type ? 'col-md-3' : 'col-md-4']"
              >
                <q-item-section avatar>
                  <q-icon name="category" color="orange"  aria-hidden="true" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-7">Tipo</q-item-label>
                  <q-item-label class="text-secondary text-bold">{{
                    t(`type.${character.type}`)
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="text-grey-6 text-uppercase q-px-sm">{{ t('appears_in') }}</div>
            <EpisodesComponent :character="character" class="q-pb-md" />
          </q-scroll-area>
        </div>
      </q-card-section>
    </q-card>
    <ErrorComponent :error="error" v-else-if="error" />
    <ErrorComponent v-else-if="!loading" />

    <LoadingComponent :loading="loading" />
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCharacter } from "src/composables/useCharacter";
import { computed } from "vue";
import { useQuasar } from "quasar";
import EpisodesComponent from "src/components/EpisodesComponent.vue";
import ErrorComponent from "src/components/ErrorComponent.vue";
import LoadingComponent from "src/components/LoadingComponent.vue";
import CharacterInfoCard from "src/components/CharacterInfoComponent.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const route = useRoute();
const $q = useQuasar();
const id = route.params.id as string;

const { result: characterData, loading, error } = useCharacter(id);

const character = computed(() => characterData.value?.character);

const isXs = computed(() => $q.screen.xs);


</script>

<style lang="scss">
.sticky {
  position: sticky;
  top: 0;
  z-index: 5;
}
.item {
  user-select: none;
  cursor: pointer;
  height: 50px;
  border-radius: 3px;
}
</style>
