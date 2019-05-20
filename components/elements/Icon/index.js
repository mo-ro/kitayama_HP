import style from './style.scss';
import Link from 'next/link';

const Icon = props => {
  const Icon = require(`../../../images/icons/${props.icon}.svg`).default;
  const size = props.size;
  const color = props.color;
  return (
    props.href ?
      <Link href={props.href}>
        <a className={`${style[size]} ${style.icon}`}><Icon style={{"color": color}} /></a>
      </Link> :
      <figure className={style[size]}>
        <Icon style={{"color": color}} />
      </figure>
  )
}

Icon.defaultProps = {
  size: "medium",
  color: "#ffffff",
  href: ""
}

export default Icon;