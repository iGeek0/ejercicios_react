function Movies() {
    const personajesPeliculas = [
        { nombre: "Luke Skywalker", pelicula: "Star Wars: Episode IV - A New Hope" },
        { nombre: "Darth Vader", pelicula: "Star Wars: Episode IV - A New Hope" },
        { nombre: "Hermione Granger", pelicula: "Harry Potter and the Sorcerer's Stone" },
        { nombre: "Frodo Baggins", pelicula: "The Lord of the Rings: The Fellowship of the Ring" },
        { nombre: "Indiana Jones", pelicula: "Raiders of the Lost Ark" },
        { nombre: "Wonder Woman", pelicula: "Wonder Woman" },
        { nombre: "Jack Sparrow", pelicula: "Pirates of the Caribbean: The Curse of the Black Pearl" },
        { nombre: "Elsa", pelicula: "Frozen" },
        { nombre: "Sherlock Holmes", pelicula: "Sherlock Holmes" },
        { nombre: "Tony Stark (Iron Man)", pelicula: "Iron Man" },
        { nombre: "Ellen Ripley", pelicula: "Alien" },
        { nombre: "Marty McFly", pelicula: "Back to the Future" },
        { nombre: "John Wick", pelicula: "John Wick" },
        { nombre: "Harry Potter", pelicula: "Harry Potter and the Sorcerer's Stone" },
        { nombre: "Neo", pelicula: "The Matrix" },
        { nombre: "Princess Leia", pelicula: "Star Wars: Episode IV - A New Hope" },
        { nombre: "Bilbo Baggins", pelicula: "The Lord of the Rings: The Fellowship of the Ring" },
        { nombre: "Daenerys Targaryen", pelicula: "Game of Thrones" },
        { nombre: "Ellie (Up)", pelicula: "Up" },
        { nombre: "Shrek", pelicula: "Shrek" }
    ];
    return (
        <>
        {
            personajesPeliculas.map((personaje, i)=>{
                // return <h2 key={i}>{personaje.pelicula} - {personaje.nombre}</h2>
                return <h2 key={i}>{`${personaje.pelicula} - ${personaje.nombre}`}</h2>
            })
        }
        </>
    );
}

export default Movies;