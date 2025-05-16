<template>
  <q-select
    :q-option-value="(opt:any) => opt.value"
    :q-option-label="(opt:any) => opt.label"
    class="type"
    dense
    filled
    v-model="type"
    clearable
    :options="[
      { value: '', label: t('all') },
      { value: 'Parasite', label: t('type.Parasite') },
      { value: 'Human with antennae', label: t('type.Human with antennae') },
      { value: 'Clone', label: t('type.Clone') },
      { value: 'Robot', label: t('type.Robot') },
      { value: 'Mytholog', label: t('type.Mytholog') },
      { value: 'Cronenberg', label: t('type.Cronenberg') },
      { value: 'Hivemind', label: t('type.Hivemind') },
      { value: 'Disease', label: t('type.Disease') },
      { value: 'Alien', label: t('type.Alien') },
    ]"
    :label="t('filter_by_type')"
    @update:model-value="filter"
  />
  <q-select
    :q-option-value="(opt:any) => opt.value"
    :q-option-label="(opt:any) => opt.label"
    class="specie"
    dense
    filled
    v-model="specie"
    clearable
    :options="[
      { value: '', label: t('Unknown') },
      { value: 'Human', label: t('species.Human') },
      { value: 'Alien', label: t('species.Alien') },
      { value: 'Humanoid', label: t('species.Humanoid') },
      { value: 'Robot', label: t('species.Robot') },
      { value: 'Cronenberg', label: t('species.Cronenberg') },
      { value: 'Animal', label: t('species.Animal') },
      {
        value: 'MythologicalCreature',
        label: t('species.MythologicalCreature'),
      },
      { value: 'Disease', label: t('species.Disease') },
      { value: 'Vampire', label: t('species.Vampire') },
      { value: 'Poopybutthole', label: t('species.Poopybutthole') },
    ]"
    :label="t('filter_by_specie')"
    @update:model-value="filter"
  />
  <q-select
    :q-option-value="(opt:any) => opt.value"
    :q-option-label="(opt:any) => opt.label"
    class="status"
    dense
    filled
    v-model="status"
    clearable
    :options="[
      { value: 'alive', label: t('Alive') },
      { value: 'dead', label: t('Dead') },
      { value: 'unknown', label: t('Unknown') },
    ]"
    :label="t('filter_by_status')"
    @update:model-value="filter"
  />
  <q-select
    :q-option-value="(opt:any) => opt.value"
    :q-option-label="(opt:any) => opt.label"
    class="gender"
    dense
    filled
    clearable
    v-model="gender"
    :options="[
      { value: 'female', label: t('Female') },
      { value: 'male', label: t('Male') },
      { value: 'genderless', label: t('Genderless') },
      { value: 'unknown', label: t('Unknown') },
    ]"
    :label="t('filter_by_gender')"
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
    :label="t('filter_by_name')"
  >
    <template #append>
      <q-btn dense flat icon="search" @click="filter" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface ValueType {
  value: string;
  label: string;
}
const props = defineProps<{
  gender: ValueType | null;
  name: string;
  status: ValueType | null;
  specie: ValueType | null;
  type: ValueType | null;
  filter: () => void;
}>();
const emit = defineEmits<{
  "update:gender": [gender: ValueType | null];
  "update:name": [name: string];
  "update:status": [status: ValueType | null];
  "update:specie": [specie: ValueType | null];
  "update:type": [type: ValueType | null];
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
const type = computed<ValueType | null>({
  get() {
    return props.type;
  },
  set(new_type: ValueType | null) {
    emit("update:type", new_type);
  },
});
const specie = computed<ValueType | null>({
  get() {
    return props.specie;
  },
  set(new_specie: ValueType | null) {
    emit("update:specie", new_specie);
  },
});
</script>

<style scoped></style>
