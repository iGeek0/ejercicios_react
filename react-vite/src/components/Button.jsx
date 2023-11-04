function Button() {
    const nombre = "Jesus Cardenas";

    let contenidoButton = "Azul";

    const showAlert = () => {
        alert("Hola " + nombre)
    }


    return (
        <button onClick={()=> showAlert()}>{contenidoButton}</button>
    );
}

export default Button;