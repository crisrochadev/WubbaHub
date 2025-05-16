import { useQuery } from "@vue/apollo-composable";
import { watch } from "vue";
import { Loading } from "quasar";
import { GET_CHARACTER } from "src/graphql/queries"; // ajuste o caminho conforme sua estrutura

export function useCharacter(id: string) {
  const { result, loading, error, refetch } = useQuery(
    GET_CHARACTER,
    () => ({ id }) // reativo
  );

  watch(loading, (newLoading) => {
    if (newLoading) Loading.show();
    else Loading.hide();
  });

  return { result, loading, error, refetch };
}
