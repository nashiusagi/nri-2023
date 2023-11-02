export interface Bath {
  id: number;
  title: string;
  body: string;
  link: string;
  numUsers: number;
  imageUrl: string;
}

export interface BathesData {
  data: Bath[];
  isLoaded: boolean;
  error: object;
}

export interface BathData {
  data: Bath;
  isLoaded: boolean;
  error: object;
}
