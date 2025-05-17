<template>
  <q-list dense separator>
    <q-item
      v-for="episode in props.character.episode"
      :key="episode.id"
      dense
      class="item q-mt-sm"
    >
      <q-item-section avatar>
        <q-icon name="movie" color="secondary" />
      </q-item-section>
      <q-item-section>
        <q-item-label>
          <p class="text-caption text-weight-light">
            {{ getEpisodeCode(episode) }}
          </p>
          <p class="text-bold text-accent">{{ getEpisodeName(episode) }}</p>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { Character } from "src/types/Character";
import { defineProps } from "vue";
import useLang from "src/composables/useLang";

const { getEpisodeCode, getEpisodeName } = useLang();

const props = defineProps<{ character: Character }>();
</script>
