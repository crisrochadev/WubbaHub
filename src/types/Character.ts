export interface Episode {
  id: string;
  name: string;
  episode: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { name: string };
  type: string;
  episode: Episode[];
}
