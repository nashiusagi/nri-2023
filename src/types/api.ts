export interface Bath {
  mens_congestion_degree: number; // 混雑段階
  id: number;
  title: string;
  body: string;
  link: string;
  numUsers: number;
  imageUrl: string;
  is_fastest: boolean; // 一番風呂かどうか
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
