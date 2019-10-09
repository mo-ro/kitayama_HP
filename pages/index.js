import GlobalLayout from "../components/Layouts/GlobalLayout";
import Icon from '../components/elements/Icon';
import Heading from '../components/elements/Heading';
import Header from '../components/elements/Header';
import LinkText from '../components/elements/LinkText';

import personImage from '../images/person.png';
import Circle from '../images/circle.svg';
import Triangle from '../images/triangle.svg';
import Sideline from '../images/sideline.svg';

import style from './style/index.scss';

const Index = () => (
  <GlobalLayout>
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.left}>
          <div className={style.headingArea}>
            <Heading level="1" size="medium" styled>北山 颯</Heading>
            <Heading level="2" size="small">KITAYAMA HAYATE</Heading>
          </div>
          <p className={style.text}>
            musician / composer
          </p>
          <div className={style.icons}>
            <Icon color="#fff" icon="twitter" target="_blank" href="http://twitter.com/kitayama_hayate/" />
            <Icon color="#fff" icon="instagram" target="_blank" href="https://instagram.com/kitayama_hayate_jp/" />
            <Icon color="#fff" icon="apple" target="_blank" href="https://music.apple.com/jp/artist/%E5%8C%97%E5%B1%B1%E9%A2%AF/1309417579" />
            <Icon color="#fff" icon="spotify" target="_blank" href="https://open.spotify.com/artist/740kgEcS0A1nf1RtphcYXt?si=MGQzxb9rRx6479UZtKSUGg" />
          </div>
        </div>
        <img src={personImage} className={style.person} />
      </div>
      {/* <Circle className={style.circle} />
      <Triangle className={style.triangle} />
      <Sideline className={style.sideline} /> */}
    </div>
  </GlobalLayout>
)


export default Index