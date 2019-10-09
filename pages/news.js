import GlobalLayout from "../components/Layouts/GlobalLayout";
import NewsItem from "../components/NewsItem";
import Heading from '../components/elements/Heading';
import style from './style/news.scss';
import openImage from '../images/open.jpg';
import nowImage from '../images/now.jpg';
import eggImage from '../images/egg.jpg';
import eggTicketImage from '../images/egg_ticket.jpg';
import homeImage from '../images/home.jpg';
import mashHuntImage from '../images/mash_hunt.jpg';
import membersImage from '../images/members.jpg';
import oishiImage from '../images/oishi.jpg';


const News = () => (
  <GlobalLayout>
    <div className={style.container}>
    <NewsItem date="10/9" images={[membersImage, mashHuntImage]}>
        <Heading level="2" size="small-medium">2019年8月度のMASH PUSHに選出されました。</Heading><br/><br/>
        MASH A&Rさん(THE ORAL CIGARETTES,フレデリック等所属)がオーガナイズするオーディション企画「MASHHUNT」の8月度MASH PUSHに選出していただきました。<br/><br/>

        年末の12月15日(日)には渋谷wwwで選抜アーティストとリスナー投票で選ばれた数組でオーディションライブもあるみたいなのでその際には皆様投票等していただけるとありがたいです。<br/><br/>

        ご期待ください！
      </NewsItem>
      <NewsItem date="10/9" images={[eggTicketImage, oishiImage, homeImage]}>
        <Heading level="2" size="small-medium">11/21にアルバム「EGG」リリースイベント開催決定！</Heading><br/><br/>
        11/1にアルバムがリリースされるのを記念してリリースイベントを渋谷HOME<a target="_blank" href="https://toos.co.jp/home/" className={style.link}>(https://toos.co.jp/home/)</a>にて開催いたします。<br/>
        この日が初のバンドセットでお送りします。<br/>
        スペシャルアクトに8月にEPをリリースしたばかりの大石晴子さん<a target="_blank" href="https://oishiharuko.com" className={style.link}>(https://oishiharuko.com)</a>をお迎えします。<br/><br/>

        ご予約はお早めに。<br/><br/>

        北山颯「EGG」リリースイベント<br/>

        場所:渋谷HOME<br/>
        出演:北山颯(BANDSET)/大石晴子<br/>
        open/start 18:30/19:00<br/>
        TICKET ¥2000<br/><br/>

        チケットご予約→kitayama_hayate@yahoo.co.jp
      </NewsItem>
      <NewsItem date="10/9" images={[eggImage]}>
        <Heading level="2" size="small-medium">11/1にアルバム「EGG」がリリース</Heading><br/><br/>
        来たる11/1に初めてとなるフルアルバムがデジタル配信/ライブ会場限定リリースされます。<br/>
        タイトルは「EGG」<br/>
        全10曲収録のこのアルバムは、どこか懐かしいような、どこか新しいようなサウンドになっています！皆さま是非お聴きください。<br/><br/>

        Album 「EGG」収録曲<br/><br/>

        1.EGG<br/>
        2.スカイウォーカー<br/>
        3.corona<br/>
        4.アイトイウト<br/>
        5.now found it<br/>
        6.咽びます<br/>
        7.mannequin<br/>
        8.adult<br/>
        9.おやすみ<br/>
        10.SUNSET<br/>
      </NewsItem>
      <NewsItem date="7/1" images={[nowImage]}>
        <Heading level="2" size="small-medium">新曲『now found it』SoundCloudにて配信開始</Heading><br/><br/>
        新曲の配信が開始しました。タイトルは『now found it』自身初のラップも披露している意欲的な作品です。なおこの楽曲はSoundCloudでの限定無料配信です！ここでしか聞けない新曲を是非、通勤通学休日のお供にしてください！楽曲はこちらから↓<br/>
        <a className={style.link} href="https://soundcloud.com/hayate_kitayama/">https://soundcloud.com/hayate_kitayama/</a>
      </NewsItem>
      <NewsItem date="7/1" images={[openImage]}>
        <Heading level="2" size="small-medium">北山颯　公式ホームページが開設！</Heading><br/><br/>
        リリース情報やライブ情報はこちらで随時更新していきます！その他本人によるブログなども展開していきますのでお楽しみに！
      </NewsItem>
    </div>
  </GlobalLayout>
)

export default News