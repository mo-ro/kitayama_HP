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
            <Heading level="1" size="xLarge" styled vertical>北山 颯</Heading>
            <Heading level="2" size="small">KITAYAMA HAYATE</Heading>
          </div>
          <p className={style.text}>Born and raised in Saitama.<br/>
            The word "kangaroo" derives from the Guugu Yimithirr<br/>
            word gangurru, referring to grey kangaroos.
          </p>
          <div className={style.icons}>
            <Icon icon="twitter" href="/about" />
            <Icon icon="instagram" href="/about" />
            <Icon icon="apple" href="/about" />
            <Icon icon="spotify" href="/about" />
          </div>
        </div>
        <img src={personImage} className={style.person} />
      </div>
      <Circle className={style.circle} />
      <Triangle className={style.triangle} />
      <Sideline className={style.sideline} />
    </div>
  </GlobalLayout>
)


export default Index