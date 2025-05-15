import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";
import { watch } from "vue";
import { Loading } from "quasar";

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String, $status: String, $gender: String) {
    characters(page: $page, filter: { name: $name , status: $status, gender:$gender}) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
      }
    }
  }
`;

export function useCharacters(variables: { page: number; name: string , status:string, gender:string}) {
  const { result, loading, error, refetch } = useQuery(
    GET_CHARACTERS,
    variables
  );

  watch(loading, (newLoading) => {
    if (newLoading) Loading.show();
    else Loading.hide();
  });

  return { result, loading, error, refetch };
}
