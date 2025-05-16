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
      />
      <div class="col-10 row">
        <div
          class="text-h5 col-12 col-md-9 text-accent text-bold"
          :class="[$q.screen.xs || $q.screen.sm ? 'text-center' : '']"
        >
          {{ character.name }}
        </div>
        <div class="col-12 col-md-3 justify-center flex">
          <span
            class="text-center q-mr-md text-bold"
            :class="[`text-${getStatusColor(character.status)}`]"
            >{{ character.status }}</span
          >
          <span
            class="text-center text-bold"
            :class="[`text-${getStatusColor(character.status)}`]"
            >{{ character.species }}</span
          >
        </div>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts" setup>
import { Character } from "src/types/Character";
import { defineProps } from "vue";
import { useRouter } from "vue-router";
defineProps<{ character: Character }>();
function getStatusColor(status: string) {
  switch (status) {
    case "Alive":
      return "green";
    case "Dead":
      return "red";
    default:
      return "grey";
  }
}
const router = useRouter();
</script>

<style scoped></style>
