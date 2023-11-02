import { getUrl } from "@/composable/common/getUrl";
import { rest } from "msw";

export const sampleRequest = () => {
  const url = getUrl("/msw/", "index");
  return [
    rest.get(url, (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: "明神湯",
            body: "昔ながらの宮造りの外観に番台、高い折上天井の脱衣場、ペンキ絵を眺めリラックスできます。男湯には玉砂利を敷いた庭があり、涼むのもよろしいかと思います。是非、お越しください。",
            link: "https://ota1010.com/explore/%e6%98%8e%e7%a5%9e%e6%b9%af/",
            numUsers: 20,
            imageUrl: "_test_/myojin.jpg",
          },
          {
            id: 2,
            title: "天神湯",
            body: "男女日替わりで１階と２階の全く雰囲気の違うお風呂が楽しめます。１階はブラックシリカ風呂が女性に人気です。２階の露天風呂も青空の下、開放感いっぱいです。土、日は家族連れも多く駐車場も10台とめられます。小腹が空いたら軽食コーナーもありますので、どうぞご利用ください。ラーメンがいち押しです。(土.日祝のみ営業)",
            link: "https://ota1010.com/explore/%e5%a4%a9%e7%a5%9e%e6%b9%af/",
            numUsers: 4,
            imageUrl: "_test_/tenjin.jpg",
          },
          {
            id: 3,
            title: "稲荷湯",
            body: "入口には大水槽、週1回季節によってレイアウトを変えています。店内はパネルで１つづつブース分けした洗い場もあり、隣の人にお湯がかかる心配がなく、特にお子様連れの方に好評です。お湯は天然黒湯温泉で肌がつるっとすると好評です。",
            link: "https://ota1010.com/explore/%e7%a8%b2%e8%8d%b7%e6%b9%af/",
            numUsers: 0,
            imageUrl: "_test_/inari.jpg",
          },
          {
            id: 1,
            title: "明神湯",
            body: "昔ながらの宮造りの外観に番台、高い折上天井の脱衣場、ペンキ絵を眺めリラックスできます。男湯には玉砂利を敷いた庭があり、涼むのもよろしいかと思います。是非、お越しください。",
            link: "https://ota1010.com/explore/%e6%98%8e%e7%a5%9e%e6%b9%af/",
            numUsers: 20,
            imageUrl: "_test_/myojin.jpg",
          },
          {
            id: 2,
            title: "天神湯",
            body: "男女日替わりで１階と２階の全く雰囲気の違うお風呂が楽しめます。１階はブラックシリカ風呂が女性に人気です。２階の露天風呂も青空の下、開放感いっぱいです。土、日は家族連れも多く駐車場も10台とめられます。小腹が空いたら軽食コーナーもありますので、どうぞご利用ください。ラーメンがいち押しです。(土.日祝のみ営業)",
            link: "https://ota1010.com/explore/%e5%a4%a9%e7%a5%9e%e6%b9%af/",
            numUsers: 4,
            imageUrl: "_test_/tenjin.jpg",
          },
          {
            id: 3,
            title: "稲荷湯",
            body: "入口には大水槽、週1回季節によってレイアウトを変えています。店内はパネルで１つづつブース分けした洗い場もあり、隣の人にお湯がかかる心配がなく、特にお子様連れの方に好評です。お湯は天然黒湯温泉で肌がつるっとすると好評です。",
            link: "https://ota1010.com/explore/%e7%a8%b2%e8%8d%b7%e6%b9%af/",
            numUsers: 0,
            imageUrl: "_test_/inari.jpg",
          },
          {
            id: 1,
            title: "明神湯",
            body: "昔ながらの宮造りの外観に番台、高い折上天井の脱衣場、ペンキ絵を眺めリラックスできます。男湯には玉砂利を敷いた庭があり、涼むのもよろしいかと思います。是非、お越しください。",
            link: "https://ota1010.com/explore/%e6%98%8e%e7%a5%9e%e6%b9%af/",
            numUsers: 20,
            imageUrl: "_test_/myojin.jpg",
          },
          {
            id: 2,
            title: "天神湯",
            body: "男女日替わりで１階と２階の全く雰囲気の違うお風呂が楽しめます。１階はブラックシリカ風呂が女性に人気です。２階の露天風呂も青空の下、開放感いっぱいです。土、日は家族連れも多く駐車場も10台とめられます。小腹が空いたら軽食コーナーもありますので、どうぞご利用ください。ラーメンがいち押しです。(土.日祝のみ営業)",
            link: "https://ota1010.com/explore/%e5%a4%a9%e7%a5%9e%e6%b9%af/",
            numUsers: 4,
            imageUrl: "_test_/tenjin.jpg",
          },
          {
            id: 3,
            title: "稲荷湯",
            body: "入口には大水槽、週1回季節によってレイアウトを変えています。店内はパネルで１つづつブース分けした洗い場もあり、隣の人にお湯がかかる心配がなく、特にお子様連れの方に好評です。お湯は天然黒湯温泉で肌がつるっとすると好評です。",
            link: "https://ota1010.com/explore/%e7%a8%b2%e8%8d%b7%e6%b9%af/",
            numUsers: 0,
            imageUrl: "_test_/inari.jpg",
          },
        ]),
      );
    }),
  ];
};
