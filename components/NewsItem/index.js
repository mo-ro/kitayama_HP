import style from './style.scss';

const NewsItem = (props) => {
  return (
    <div className={style.newsItem}>
      <p className={style.date}>5/6</p>
      <div className={style.content}>{props.children}</div>
      <a className={style.additional}href={props.additional}>{props.additional}</a>
      {props.image && 
        <figure className={style.imageWrapper}>
          <img src={props.image} alt="" className={props.image}/>
        </figure>}
    </div>
  )
}

export default NewsItem;