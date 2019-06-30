import GlobalLayout from "../components/Layouts/GlobalLayout";
import NewsItem from "../components/NewsItem";
import style from './style/news.scss';


const News = () => (
  <GlobalLayout>
    <div className={style.container}>
      <NewsItem date="5/6" additional="https://econews.jp/idea/life/20190426.html" image="https://econews.jp/idea/images/obachan_2.jpg">
      停電の際、懐中電灯の光だけでは部屋中を明るく照らすことはできませんが、
      ペットボトルがあれば明るさの範囲を広げられます。

      懐中電灯を立てて置きその上に水の入ったペットボトルを乗せるだけ。
      懐中電灯がランタンに代わります。
      いざというときのために一度試してみてはいかがですか。
      使用時はやけどなどに注意してくださいね。
      </NewsItem>
      <NewsItem date="5/6" additional="https://econews.jp/idea/life/20190426.html">
      停電の際、懐中電灯の光だけでは部屋中を明るく照らすことはできませんが、
      ペットボトルがあれば明るさの範囲を広げられます。

      懐中電灯を立てて置きその上に水の入ったペットボトルを乗せるだけ。
      懐中電灯がランタンに代わります。
      いざというときのために一度試してみてはいかがですか。
      使用時はやけどなどに注意してくださいね。
      </NewsItem>
    </div>
  </GlobalLayout>
)

export default News