import { useQuery } from "@vue/apollo-composable";
import { watch } from "vue";
import { Loading } from "quasar";
import { GET_CHARACTERS } from "src/graphql/queries";



export function useCharacters(variables: { page: number; name: string , status:string, gender:string}) {
  const { result, loading, error, refetch } = useQuery(
    GET_CHARACTERS,
    variables
  );


  return { result, loading, error, refetch };
}
