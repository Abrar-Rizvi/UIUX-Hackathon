
interface ButtonI {
  content: string;
  classname: string;
}
const Button = ({content, classname}: ButtonI) => {
  return (
    <div className={`${classname}`}>{content}</div>
  )
}

export default Button