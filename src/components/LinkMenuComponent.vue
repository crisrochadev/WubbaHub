<template>
  <q-item
    clickable
    tag="a"
    :target="blank ? '_blank' : undefined"
    :rel="blank ? 'noopener' : undefined"
    :href="link"
    aria-label="title"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="accent" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-secondary text-weight-bold text-uppercase">{{
        title
      }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  blank?: boolean;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: "",
  link: "#",
  icon: "",
});
</script>
