import style from "./style.scss";
import Header from '../elements/Header';

const Layout = (props) => (
  <div className={style.layout}>
    <Header />
    {props.children}
  </div>
)

export default Layout