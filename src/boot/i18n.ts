import { defineBoot } from "#q-app/wrappers";
import { createI18n } from "vue-i18n";

import messages from "src/i18n";

export type MessageLanguages = keyof typeof messages;
export type MessageSchema = (typeof messages)["pt-BR"];

declare module "vue-i18n" {
  export interface DefineLocaleMessage extends MessageSchema {}
  export interface DefineDateTimeFormat {}
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */

export default defineBoot(({ app }) => {
  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: "pt-BR",
    legacy: false,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
