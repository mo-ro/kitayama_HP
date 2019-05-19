import style from './style.scss';

const Icon = props => {
  const Icon = require(`../../../images/icons/${props.icon}.svg`).default;
  const size = props.size;
  const color = props.color;

  return (
    <figure className={style[size]}>
      <Icon style={{"color": color}} />
    </figure>
  )
}

Icon.defaultProps = {
  size: "medium",
  color: "#ffffff"
}

export default Icon;