import style from './style.scss';

const Heading = props => {
  const Tag = 'h' + props.level;
  const size = props.size;
  return (
    <Tag className={`${style.heading} ${props.styled && style.underline} ${style[size]} ${props.vertical && style.vertical}`}>{props.children}</Tag>
  )
};

Heading.defaultProps = {
  size: "medium"
}

export default Heading;