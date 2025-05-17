<template>
  <q-page padding class="container">
    <div class="full-height full-width content" v-if="result">
      <div class="header row justify-end items-start q-pb-md">
        <q-btn
          v-if="$q.screen.xs || $q.screen.sm"
          icon="filter_alt"
          dense
          flat
          style="height: 40px; width: 40px"
          class="q-ml-sm"
          unelevated
          color="primary"
          :style="{
            height: '30px',
          }"
          @click="showFilter = !showFilter"
        />
        <q-slide-transition v-if="$q.screen.xs || $q.screen.sm">
          <div
            class="col-12 q-mt-sm flex"
            style="gap: 10px; flex-direction: column"
            v-if="showFilter"
          >
            <FiltersComponent
              v-model:name="name"
              v-model:gender="gender"
              v-model:status="status"
              v-model:specie="specie"
              v-model:type="type"
              :filter="filter"
            />
            <div class="flex justify-end">
              <q-btn
                :label="t('reset_filters')"
                dense
                color="grey-7"
                icon="close"
                unelevated
                class="q-mt-sm q-mr-xs"
                @click="resetFilter"
              />
              <q-btn
                :label="t('apply_filters')"
                dense
                color="primary"
                icon="done"
                unelevated
                class="q-mt-sm"
                @click="applyFilter"
              />
            </div>
          </div>
        </q-slide-transition>
        <div v-else class="flex w-full filter justify-end">
          <FiltersComponent
            v-model:name="name"
            v-model:gender="gender"
            v-model:status="status"
            v-model:specie="specie"
            v-model:type="type"
            :filter="filter"
          />
        </div>
      </div>
      <q-card class="body q-pl-sm q-py-sm">
        <q-scroll-area class="full-width full-height" v-if="result">
          <div class="full-width row body-content">
            <template v-for="char in result.characters.results" :key="char.id">
              <CharactersCard :character="char" />
            </template>
          </div>
        </q-scroll-area>
      </q-card>
      <div class="footer flex justify-end q-py-md">
        <q-pagination
          v-model="page"
          :max="totalPages"
          :max-pages="6"
          color="primary"
          direction-links
        />
      </div>
    </div>
    <ErrorComponent :error="error" v-else-if="error" />
    <ErrorComponent v-else-if="!loading" />

    <LoadingComponent :loading="loading" />
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useCharacters } from "src/composables/useCharacters";
import CharactersCard from "src/components/CharacterCardComponent.vue";
import { useQuasar } from "quasar";
import FiltersComponent from "src/components/FiltersComponent.vue";
import ErrorComponent from "src/components/ErrorComponent.vue";
import LoadingComponent from "src/components/LoadingComponent.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const $q = useQuasar();
const name = ref<string>("");
const status = ref<{ value: string; label: string } | null>(null);
const gender = ref<{ value: string; label: string } | null>(null);
const specie = ref<{ value: string; label: string } | null>(null);
const type = ref<{ value: string; label: string } | null>(null);
const showFilter = ref<boolean>(false);
const page = ref(1);
const { result, loading, error, refetch } = useCharacters({
  page: page.value,
  name: name.value,
  status: status.value ? status.value.value : "",
  gender: gender.value ? gender.value.value : "",
  specie: specie.value ? specie.value.value : "",
  type: type.value ? type.value.value : "",
});

const totalPages = computed(() => result.value?.characters.info.pages || 1);

const errors = ref<
  {
    error: string;
    pt: string;
  }[]
>([
  {
    error: "Sometimes science is more art than science, Morty.",
    pt: "Às vezes a ciência é mais arte do que ciência, Morty.",
  },
  {
    error:
      "To be fair, you have to have a very high IQ to understand this error.",
    pt: "Para ser justo, você precisa ter um QI muito alto para entender esse erro.",
  },
  {
    error: "What, so everyone’s supposed to restart the app now?",
    pt: "O quê, então todos deveriam reiniciar o aplicativo agora?",
  },
]);

// Reage à mudança da página
watch(page, (newPage) => {
  refetch({
    page: page.value,
    name: name.value,
    status: status.value ? status.value.value : "",
    gender: gender.value ? gender.value.value : "",
    specie: specie.value ? specie.value.value : "",
    type: type.value ? type.value.value : "",
  });
});

function filter() {
  console.log(specie.value)
  if (!showFilter.value) {
    refetch({
      page: page.value,
      name: name.value,
      status: status.value ? status.value.value : "",
      gender: gender.value ? gender.value.value : "",
      specie: specie.value ? specie.value.value : "",
      type: type.value ? type.value.value : "",
    });
  }
}

function applyFilter() {
  refetch({
    page: page.value,
    name: name.value,
    status: status.value ? status.value.value : "",
    gender: gender.value ? gender.value.value : "",
    specie: specie.value ? specie.value.value : "",
    type: type.value ? type.value.value : "",
  });
  showFilter.value = false;
}
function resetFilter() {
  name.value = "";
  status.value = null;
  gender.value = null;
  specie.value = null;
  type.value = null;
  applyFilter();
}

const random = ref<number>(Math.floor(Math.random() * 3));
const randomError = computed(() => errors.value[random.value]);
</script>
<style lang="scss">
.container {
  height: calc(100vh - 70px);
  .content {
    display: flex;
    flex-direction: column;
    flex-direction: column;
    .body {
      flex: 1;
      .body-content {
        overflow-y: auto;
        gap: 10px;
      }
    }
    .footer {
      @media (max-width: 480px) {
        justify-content: center;
      }
    }
    .header {
      .filter {
        gap: 10px;
        flex: 1;
        .type {
          width: calc(20% - 10px);
        }
        .specie {
          width: calc(20% - 10px);
        }
        .status {
          width: calc(20% - 10px);
        }
        .gender {
          width: calc(20% - 10px);
        }
        .name {
          width: calc(20% - 10px);
        }
      }
      .filter-mobile {
        height: 30px;
        margin-top: -5px;
      }
    }
  }
}
</style>
