import GlobalLayout from "../components/Layouts/GlobalLayout";
import Heading from '../components/elements/Heading';
import NewsItem from "../components/NewsItem";
import style from './style/contact.scss';
import Icon from '../components/elements/Icon';



const Contact = () => (
  <GlobalLayout>
    <div className={style.container}>
      <section className={style.section}>
        <Heading>SNS</Heading>
        <div className={style.icons}>
          <div className={style.iconWrapper}>
            <Icon icon="twitter" href="/" />
            <p className={style.iconText}>Twitter</p>
          </div>
          <div className={style.iconWrapper}>
            <Icon icon="instagram" href="/" />
            <p className={style.iconText}>Instagram</p>
          </div>
          <div className={style.iconWrapper}>
            <Icon icon="apple" href="/" />
            <p className={style.iconText}>Apple</p>
          </div>
          <div className={style.iconWrapper}>
            <Icon icon="spotify" href="/" />
            <p className={style.iconText}>Spotify</p>
          </div>
        </div>
      </section>

      <section className={style.section}>
        <Heading>E-mail</Heading>
        <div className={style.email}>
          emaildayo@gmail.com
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