export interface IRouterLink {
  description: string;
  path: string;
  icon?: string;
}

export interface IHero {
  id?: string;
  superhero?: string;
  publisher?: string;
  alter_ego?: string;
  first_appearance?: string;
  characters?: string;
  alt_img?: string;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}
