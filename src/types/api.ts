export interface Bath {
  id: number;
  name: string; // 銭湯名
  kana: string; // 銭湯名かな名
  roman: string; // 銭湯名ローマ字名
  image_url: string; // 画像パス
  site_url: string; // サイトのURL
  introduction_text: string; // サイトの概要文
  created_at: Date;
  updated_at: Date
  mens_congestion_degree: number; // 男湯混雑段階
  ladies_congestion_degree: number; // 女湯混雑段階
  start_time: string; // 開業時間（1600など）
  end_time: string; // 終業時間
  mens_count: number; // いまの男湯の人数
  ladies_count: number; // いまの女湯の人数
  is_mens_fastest: boolean; // 男湯が一番風呂かどうか
  is_ladies_fastest: boolean; // 女湯が一番風呂かどうか
  is_opened: boolean; // 営業中かどうか
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
