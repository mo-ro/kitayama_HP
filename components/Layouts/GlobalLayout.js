import style from "./style.scss";

const Layout = (props) => (
  <div className={style.layout}>
    {props.children}
  </div>
)

export default Layout