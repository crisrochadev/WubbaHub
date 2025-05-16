<template>
  <q-page class="about-page q-pa-xl">
    <q-slide-fade appear>
      <header class="q-mb-xl text-center">
        <h1 class="text-primary text-h4 q-mb-sm">{{ t('about_page.title') }}</h1>
        <p class="text-subtitle1 text-grey-7">
          {{ t('about_page.development_by') }} <strong>Cristiane da Rocha</strong> — {{ t('about_page.developer_role') }}.
        </p>
      </header>

      <section class="q-mb-xl">
        <h2 class="text-h6 text-weight-bold">🧩 {{ t('about_page.tecnologies') }}</h2>
        <ul class="q-ml-md q-mt-sm">
          <li>{{ t('about_page.vue_3_composition') }}</li>
          <li>{{ t('about_page.typescript') }}</li>
          <li>{{ t('about_page.quasar') }}</li>
          <li>{{ t('about_page.vue_i18n') }}</li>
          <li>{{ t('about_page.reusable_component_architecture') }}</li>
        </ul>
      </section>

      <section class="q-mb-xl">
        <h2 class="text-h6 text-weight-bold">✨ {{ t('about_page.features') }}</h2>
        <ul class="q-ml-md q-mt-sm">
          <li>{{ t('about_page.filtering_by_type_species_and_more') }}</li>
          <li>{{ t('about_page.search_and_pagination') }}</li>
          <li>{{ t('about_page.view_details') }}</li>
          <li>{{ t('about_page.loading_error_messages') }}</li>
          <li>{{ t('about_page.action_buttons') }}</li>
        </ul>
      </section>

      <section class="q-mb-xl">
        <h2 class="text-h6 text-weight-bold">🌍 {{ t('about_page.language_support') }}</h2>
        <p class="q-ml-md">
          {{ t('about_page.supported_languages_description') }}
        </p>
        <ul class="q-ml-md">
          <li>{{ t('about_page.portuguese') }}</li>
          <li>{{ t('about_page.english') }}</li>
          <li>{{ t('about_page.spanish') }}</li>
        </ul>
      </section>

      <section class="q-mb-xl">
        <h2 class="text-h6 text-weight-bold">🎯 {{ t('about_page.objective') }}</h2>
        <p class="q-ml-md">
          {{ t('about_page.project_objective_description') }}
        </p>
      </section>

      <section class="q-mb-lg text-center">
        <h2 class="text-h6 text-weight-bold">📬 {{ t('about_page.contact') }}</h2>
        <div class="q-mt-sm">
          <q-btn
            flat
            icon="mdi-github"
            :label="t('about_page.github')"
            href="https://github.com/crisrochadev"
            target="_blank"
            class="q-mr-sm"
            color="primary"
          />
          <q-btn
            flat
            icon="mdi-linkedin"
            :label="t('about_page.linkedin')"
            href="https://linkedin.com/in/crisrochadev"
            target="_blank"
            color="primary"
          />
        </div>
      </section>
    </q-slide-fade>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: auto;
}
ul {
  list-style-type: disc;
}
</style>
