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
          <p class="text-caption text-weight-light">{{ getEpisodeCode(episode) }}</p>
          <p class="text-bold text-accent">{{ getEpisodeName(episode) }}</p>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { Character, Episode } from "src/types/Character";
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{ character: Character }>();

const { t, locale } = useI18n({ useScope: "global" });

function getEpisodeCode(episode: Episode): string {
  return locale.value === "en-US"
    ? episode.episode
    : t(`episodes.episode.${episode.episode}`);
}

function getEpisodeName(episode: Episode): string {
  return locale.value === "en-US"
    ? episode.name
    : t(`episodes.name.${episode.episode}`);
}
</script>
