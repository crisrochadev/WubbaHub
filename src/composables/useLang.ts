import { useI18n } from "vue-i18n";
import { Character, Episode } from "src/types/Character";

export default function useLang() {
  const { t, locale } = useI18n();
  function getSpecieName(species: string): string {
    return locale.value === "en-US" ? species : t(`species.${species}`);
  }
  function getLocationName(location: string): string {
    return locale.value === "en-US" ? location : t(`location.${location}`);
  }
  function getTypeName(type: string): string {
    return locale.value === "en-US" ? type : t(`type.${type}`);
  }
  function getEpisodeCode(episode: Episode): string {
  return locale.value === "en-US"
    ? episode.episode
    : t(`episodes.episode.${episode.episode}`);
}

function getEpisodeName(episode: Episode): string {
  return locale.value === "en-US"
    ? episode.name
    : t(`episodes.name.${episode.episode}`);
}

  return {getSpecieName, getLocationName, getTypeName, getEpisodeCode, getEpisodeName}
}
