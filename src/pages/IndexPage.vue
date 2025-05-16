<template>
  <q-page padding class="container">
    <div class="header row justify-end items-start q-py-md">
      <q-btn
        v-if="$q.screen.xs || $q.screen.sm"
        icon="filter_alt"
        dense
        style="height: 40px; width: 40px"
        class="q-ml-sm"
        unelevated
        color="primary"
        @click="showFilter = !showFilter"
      />
      <template v-if="$q.screen.xs || $q.screen.sm">
        <q-slide-transition>
          <div
            class="col-12 q-mt-sm flex"
            style="gap: 10px; flex-direction: column"
            v-if="showFilter"
          >
            <FiltersComponent
              v-model:name="name"
              v-model:gender="gender"
              v-model:status="status"
              :filter="filter"
            />
          </div>
        </q-slide-transition>
      </template>
      <div v-else class="flex w-full filter justify-end">
        <FiltersComponent
          v-model:name="name"
          v-model:gender="gender"
          v-model:status="status"
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
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useCharacters } from "src/composables/useCharacters";
import CharactersCard from "src/components/CharactersCard.vue";
import { useQuasar } from "quasar";
import FiltersComponent from "src/components/FiltersComponent.vue";

const $q = useQuasar();
const name = ref<string>("");
const status = ref<{ value: string; label: string } | null>(null);
const gender = ref<{ value: string; label: string } | null>(null);
const showFilter = ref<boolean>(false);
const page = ref(1);
const { result, loading, error, refetch } = useCharacters({
  page: page.value,
  name: name.value,
  status: status.value ? status.value.value : "",
  gender: gender.value ? gender.value.value : "",
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
  });
});

function filter() {
  console.log(status.value);
  refetch({
    page: page.value,
    name: name.value,
    status: status.value ? status.value.value : "",
    gender: gender.value ? gender.value.value : "",
  });
}

const random = ref<number>(Math.floor(Math.random() * 3));
const randomError = computed(() => errors.value[random.value]);
</script>
<style lang="scss">
.container {
  height: calc(100vh - 50px);
  display: flex;
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
      .status {
        width: 20% !important;
      }
      .gender {
        width: 20%;
      }
      .name {
        width: 40%;
      }
    }
  }
}
</style>
