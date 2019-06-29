import GlobalLayout from "../components/Layouts/GlobalLayout";
import Heading from '../components/elements/Heading';

import profImage from '../images/prof.jpg';
import Sideline from '../images/sideline.svg';
import style from './style/about.scss';

const Index = () => (
  <GlobalLayout>
    <div className={style.container}>
      <figure className={style.imageWrapper}>
        <img src={profImage} alt="" className={style.image} />
      </figure>
      <div className={style.profArea}>
        <p className={style.profHead}>Name</p><Heading level="1" size="medium">北山 颯</Heading>
        <p className={style.profHead}>Birthplace</p><Heading level="1" size="small">火星</Heading>
        <p className={style.profHead}>Hobbies</p><Heading level="1" size="small">落語 / 盆栽 / アイスホッケー</Heading>
        <p className={style.profHead}>Comment</p>
        <p className={style.comment}>地球は太陽から3番目に位置する惑星です。直径は約1万3,000km、赤道のまわりは約4万kmあります。地球はよく「水の惑星」と呼ばれ、太陽系の中でも地球にだけ表面に大量の水が存在します。太陽からの距離がほどよいため、水を液体に保っていられるのです。その水のほとんどは海にあり、地球の表面の7割を占め、このおかげで生物が住みやすい環境ができているのです。今までの探査で分かっているかぎりでは、太陽系8つの惑星と160以上の衛星のなかでも、生物の存在が確認されているのは地球だけです。</p>
      </div>
      <Sideline className={style.sideline} />
      <Sideline className={style.sideline} />
      <Sideline className={style.sideline} />
    </div>
  </GlobalLayout>
)

export default Index