

const Button = ({onClick, children}:{onClick: ()=>void, children : React.ReactNode}) => {
  return (
    <div><button onClick={onClick}className="bg-green-600 hover:bg-green-800 text-white text-2xl font-bold py-4 px-8 rounded ">{children}</button></div>
  )
}

export default Button