import GlobalLayout from "../components/Layouts/GlobalLayout";
import Heading from '../components/elements/Heading';

import profImage from '../images/prof.jpg';
import Sideline from '../images/sideline.svg';
import style from './style/about.scss';

const Index = () => (
  <GlobalLayout>
    <div className={style.container}>
      <Heading level="2" size="medium">About</Heading>
      <figure className={style.imageWrapper}>
        <img src={profImage} alt="" className={style.image} />
      </figure>
      <div className={style.profArea}>
        <p className={style.profHead}>Name</p><Heading level="1" size="small-medium">北山 颯</Heading>
        <p className={style.profHead}>Birth</p><Heading level="2" size="small">埼玉県出身 1997年6月23日生</Heading>
        <p className={style.profHead}>Comment</p>
        <p className={style.comment}>幼少期から父親の影響で音楽を聴いて育ち、
        16歳で作詞作曲活動を始める。<br/>
        その後コンスタントにYouTube、SoundCloud等に曲をアップロードし、
        2018年から本格的に活動が始動。<br/>
        活動開始直後にも関わらず行った地元埼玉県での弾き語りライブは満員の観客と共に大成功。<br/>
        R&B、ROCK、POPS、あらゆるジャンルの音楽をマッシュアップさせ、独自のワードセンスで織りなす楽曲が特徴。<br/>
        自身の楽曲ではすべての楽器を演奏し、編曲も行なっているマルチプレイヤーである。</p>
      </div>
      <Sideline className={style.sideline} />
      <Sideline className={style.sideline} />
      <Sideline className={style.sideline} />
    </div>
  </GlobalLayout>
)

export default Index