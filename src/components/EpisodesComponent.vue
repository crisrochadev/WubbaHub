<template>
  <q-list dense separator >
    <q-item clickable v-for="episode in character.episode" dense :key="episode.id" class="item  q-mt-sm">
      <q-item-section avatar>
        <q-icon name="movie" color="secondary" />
      </q-item-section>
      <q-item-section>
        <q-item-label caption>{{ episode.episode }}</q-item-label>
        <q-item-label class=" text-bold text-accent">{{ episode.name }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { Character } from "src/types/Character";
import { defineProps } from "vue";
defineProps<{ character: Character }>();
</script>


