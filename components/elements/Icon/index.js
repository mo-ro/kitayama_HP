import InlineSVG from 'svg-inline-react';

const Icon = props => {
  const Icon = require(`../../../images/icons/${props.icon}.svg`).default;
  const color = props.color || "#ffffff";
  return (
    <Icon style={{"color": color}} />
  )
}

export default Icon;