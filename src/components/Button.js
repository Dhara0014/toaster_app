import React from 'react';

const Button = ({name, style, onClick}) => {
  return (
    <div>
        <button style={style ?? {padding: "1rem", backgroundColor: "#959ff8", border: "1px solid #959ff8", color: "white", cursor: "pointer"}} onClick={onClick} >
            {name}
        </button>
    </div>
  )
}

export default Button