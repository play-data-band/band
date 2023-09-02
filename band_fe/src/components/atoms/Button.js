import classes from "../../styles/atoms/Button.module.css"
const Button = (props) => {
  return (
    <div className={classes.btnWrap}>
      <button onClick={props.onClick} className={classes.btn}>{props.value}</button>
    </div>
  )
}

export default Button;