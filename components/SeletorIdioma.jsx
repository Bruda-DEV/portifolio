import React from "react";

function SeletorIdioma(){ 
    const [inOn, setIsOn] = useState(false)

    
    return(
        <div>
        <label className="idioma">
            <input type="checkbox" checked={isOn} onChange={MudarIdidoma} />
            <span className="botao_sider"></span>
            </label>
    )

}

export default SeletorIdioma