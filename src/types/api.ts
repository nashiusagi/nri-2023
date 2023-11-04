export interface Bath {
  id: number;
  name: string; // 銭湯名
  kana: string; // 銭湯名かな名
  roman: string; // 銭湯名ローマ字名
  image_url: string; // 画像パス
  site_url: string; // サイトのURL
  introduction_text: string; // サイトの概要文
  mens_congestion_degree: number; // 男湯混雑段階
  ladies_congestion_degree: number; // 女湯混雑段階
  is_mens_fastest: boolean; // 一番風呂かどうか
  start_time: string; // 開業時間（1600など）
  end_time: string; // 終業時間
  created_at: Date;
  updated_at: Date
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
