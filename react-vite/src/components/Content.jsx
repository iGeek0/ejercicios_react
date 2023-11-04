import Button from "./Button";
import Lista from "./Lista";
import Movies from "./Movies";

function Content() {
    const frase = "Jesus";

    return (
        <>
        <h1>Contenido del componente content</h1>
        <Button/>
        <p>
            Lorem ipsum dolor sit <b>{frase}</b> consectetur adipisicing elit. Corrupti temporibus tenetur quasi dolorum modi at sequi. Optio quas corporis facilis? Officiis deserunt <b>{frase}</b> laborum quibusdam eum architecto corrupti beatae quas.
        </p>
        <p>Suma : {10+30}</p>
        <p>Mayusculas : {frase.toUpperCase()}</p>
        <Lista/>
        <Movies/>
        </>
    );
}

export default Content;