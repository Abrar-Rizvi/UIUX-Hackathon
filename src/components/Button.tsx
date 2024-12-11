
interface ButtonI {
  children: string;
  classname: string;
}
const Button = ({children, classname}: ButtonI) => {
  return (
    <div className={`${classname}`}>{children}</div>
  )
}

export default Button