import style from './style.scss';

const NewsItem = (props) => {
  return (
    <div className={style.newsItem}>
      <p className={style.date}>{props.date}</p>
      <div className={style.content}>{props.children}</div>
      <a className={style.additional}href={props.additional}>{props.additional}</a>
      {props.images && props.images.length > 0 && 
        props.images.map(image => (
          <figure className={style.imageWrapper}>
            <img src={image} alt="" className={style.image}/>
          </figure>
        ))
      }
    </div>
  )
}

export default NewsItem;