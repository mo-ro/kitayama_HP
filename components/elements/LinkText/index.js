import style from './style.scss';

const LinkText = props => (
  <a href={props.href} className={style.link}>{props.children}</a>
);

export default LinkText;