<template>
  <q-card class="character-card">
    <q-item
      class="full-width"
      style="padding: 0 !important"
      clickable
      @mouseleave="showInfo = false"
      @mouseenter="showInfo = true"
    >
      <q-img :src="character.image">
        <q-slide-transition>
          <div class="absolute-bottom " v-show="showInfo">
              <div class="text-subtitle1">{{ character.name }}</div>
              <div class="text-subtitle2">{{ character.species }}</div>
              <q-btn label="Ver personagem" class="full- q-mt-md" color="secondary" unelevated/>
          </div>
        </q-slide-transition>
      </q-img>
    </q-item>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { CharacterType } from "src/types";
const props = defineProps<{
  character: CharacterType;
}>();
const showInfo = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.character-card {
  opacity: 0.8;
  width:calc((100% / 5) - 10px);
  @media(max-width:695px){
   width:calc((100% / 4) - 10px); 
  }
  @media(max-width:491px){
   width:calc((100% / 2) - 10px); 
  }
}
.character-card:hover {
  opacity: 1;
}
</style>
