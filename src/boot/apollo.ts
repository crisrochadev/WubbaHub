import { boot } from 'quasar/wrappers';
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from 'src/plugins/apollo-client';

export default boot(({ app }) => {
  app.provide(DefaultApolloClient, apolloClient);
});
