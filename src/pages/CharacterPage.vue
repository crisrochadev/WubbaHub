<template>
  <q-page style="height: calc(100vh - 70px)">
    <q-card
      class="full-width full-height q-py-sm q-px-sm bg-transparent"
      flat
      v-if="character"
    >
      <q-card-section
        :horizontal="!$q.screen.xs && !$q.screen.sm"
        class="full-width full-height"
        style="overflow-y: hidden"
      >
        <CharacterInfoCard
          :character="character"
          v-if="$q.screen.xs || $q.screen.sm"
        />
        <q-img
          class="col-5"
          :src="character.image"
          :style="{
            height: $q.screen.xs || $q.screen.sm ? '30%' : '100%',
          }"
        />
        <div
          class="col-7"
          :class="[!$q.screen.xs && !$q.screen.sm ? 'q-px-md' : 'q-py-md']"
          :style="{
            height: $q.screen.xs || $q.screen.sm ? '60%' : '100%',
          }"
        >
          <CharacterInfoCard
            :character="character"
            v-if="!$q.screen.xs && !$q.screen.sm"
          />
          <q-scroll-area class="full-height">
            <div class="text-grey-6 text-uppercase q-mb-xs q-px-sm">
              Informações:
            </div>
            <div class="full-width row q-mb-md">
              <q-item
                class="col-12 q-mb-xs item"
                :class="[character.type ? 'col-md-3' : 'col-md-4']"
              >
                <q-item-section side>
                  <q-icon name="person" color="accent" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-7"
                    >Gênero</q-item-label
                  >
                  <q-item-label class="text-secondary text-bold">{{
                    character.gender
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="col-12 q-mb-xs"
                :class="[character.type ? 'col-md-3' : 'col-md-4']"
              >
                <q-item-section side>
                  <q-icon name="location_on" color="accent" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-7"
                    >Origem</q-item-label
                  >
                  <q-item-label caption class="text-secondary text-bold">{{
                    character.origin.name
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                class="col-12 q-mb-xs"
                :class="[character.type ? 'col-md-3' : 'col-md-4']"
              >
                <q-item-section side>
                  <q-icon name="place" color="accent" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-7"
                    >Localização Atual</q-item-label
                  >
                  <q-item-label caption class="text-secondary text-bold">{{
                    character.location.name
                  }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item
                v-if="character.type"
                class="col-12 q-mb-xs"
                :class="[character.type ? 'col-md-3' : 'col-md-4']"
              >
                <q-item-section avatar>
                  <q-icon name="category" color="orange" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-grey-7">Tipo</q-item-label>
                  <q-item-label class="text-secondary text-bold">{{
                    character.type
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="text-grey-6 text-uppercase q-px-sm">Aparece em:</div>
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
import CharacterInfoCard from "src/components/CharacterInfoCard.vue";

const route = useRoute();
const $q = useQuasar();
const id = route.params.id as string;

const { result: characterData, loading, error } = useCharacter(id);

// Reactive computed for better readability
const character = computed(() => characterData.value?.character);
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
