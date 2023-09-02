function Button({children , onClick}){
    return(
        <div onClick={onClick} className='p-8 bg-red-400 cursor-pointer rounded'>
           <span>{children}</span> 
        </div>

    )

    
}

export default Button