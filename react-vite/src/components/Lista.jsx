function Lista() {

    const frutas = [
        "manzana",
        "banana",
        "naranja",
        "uva",
        "kiwi",
        "fresa",
        "pera",
        "limón",
        "sandía",
        "cereza",
        "piña",
        "mango",
        "papaya",
        "coco",
        "melon",
        "ciruela",
        "lima",
        "frambuesa",
        "mora",
        "maracuyá"
    ];

    return (
        <ol>
            {
                frutas.map((fruta, index)=>{
                    return <li key={index}>{fruta}</li>
                })
            }
        </ol>
    );
}

export default Lista;