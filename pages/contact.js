import GlobalLayout from "../components/Layouts/GlobalLayout";
import Heading from '../components/elements/Heading';
import style from './style/contact.scss';
import Icon from '../components/elements/Icon';



const Contact = () => (
  <GlobalLayout>
    <div className={style.container}>
      <section className={style.section}>
        <Heading>SNS</Heading>
        <div className={style.icons}>
          <div className={style.iconWrapper}>
            <Icon icon="twitter" target="_blank" href="http://twitter.com/kitayama_hayate/" />
            <p className={style.iconText}>Twitter</p>
          </div>
          <div className={style.iconWrapper}>
            <Icon icon="instagram" target="_blank" href="https://instagram.com/kitayama_hayate_jp/" />
            <p className={style.iconText}>Instagram</p>
          </div>
          <div className={style.iconWrapper}>
            <Icon icon="apple" target="_blank" href="https://music.apple.com/jp/artist/%E5%8C%97%E5%B1%B1%E9%A2%AF/1309417579" />
            <p className={style.iconText}>Apple</p>
          </div>
          <div className={style.iconWrapper}>
            <Icon icon="spotify" target="_blank" href="https://open.spotify.com/artist/740kgEcS0A1nf1RtphcYXt?si=MGQzxb9rRx6479UZtKSUGg" />
            <p className={style.iconText}>Spotify</p>
          </div>
        </div>
      </section>

      <section className={style.section}>
        <Heading>e-mail</Heading>
        <div className={style.email}>
          kitayamahayate@yahoo.co.jp
        </div>
      </section>

      {/* <section className={style.section}>
        <Heading>フォーム</Heading>
        <div className={style.icons}>
          
        </div>
      </section> */}
    </div>
  </GlobalLayout>
)

export default Contact;