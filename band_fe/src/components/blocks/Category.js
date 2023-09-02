import classes from "../../styles/blocks/Category.module.css";

const Category = (props) => {
  return (
    <div className={classes.categoryWrap}>
      <div className={classes.imgWrap}>
        <img className={classes.img} src={props.imgPath} />
      </div>
      <div className={classes.textWrap}>
        <p style={{color : props.color}} className={classes.itemParam}>{props.value}</p>
      </div>
    </div>
  )
}

export default Category;