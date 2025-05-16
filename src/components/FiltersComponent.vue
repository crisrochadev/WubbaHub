<template>
  <q-select
    class="status"
    dense
    filled
    v-model="status"
    clearable
    :options="[
      { value: 'alive', label: 'Vivo' },
      { value: 'dead', label: 'Morto' },
      { value: 'unknown', label: 'Desconhecido' },
    ]"
    label="Filtrar por status"
    @update:model-value="filter"
  />
  <q-select
    class="gender"
    dense
    filled
    clearable
    v-model="gender"
    :options="[
      { value: 'female', label: 'Feminino' },
      { value: 'male', label: 'Masculino' },
      { value: 'genderless', label: 'Sem Gênero' },
      { value: 'unknown', label: 'Desconhecido' },
    ]"
    label="Filtrar por gênero"
    @update:model-value="filter"
  />
  <q-input
    class="name"
    dense
    filled
    v-model="name"
    clearable
    @keyup.enter="filter"
    @clear="filter"
    label="Filtrar pelo nome"
  >
    <template #append>
      <q-btn dense flat icon="search" @click="filter" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

interface ValueType {
  value: string;
  label: string;
}
const props = defineProps<{
  gender: ValueType | null;
  name: string;
  status: ValueType | null;
  filter: () => void;
}>();
const emit = defineEmits<{
  "update:gender": [gender: ValueType | null];
  "update:name": [name: string];
  "update:status": [status: ValueType | null];
}>();

const gender = computed<ValueType | null>({
  get() {
    return props.gender;
  },
  set(new_gender: ValueType | null) {
    emit("update:gender", new_gender);
  },
});
const name = computed<string>({
  get() {
    return props.name;
  },
  set(new_name: string) {
    emit("update:name", new_name);
  },
});
const status = computed<ValueType | null>({
  get() {
    return props.status;
  },
  set(new_status: ValueType | null) {
    emit("update:status", new_status);
  },
});
</script>

<style scoped></style>
