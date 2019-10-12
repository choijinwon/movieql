export const movies= [
    {
        id:"0",
        name:"Start Wars",
        score:"1",
    },
    {
        id:"1",
        name:"Start Wars-2",
        score:"2",
    },
    {
        id:"2",
        name:"Start War-3",
        score:"3",
    },
    {
        id:"3",
        name:"Start Wars",
        score:"4",
    },
    {
        id:"4",
        name:"Start Wars",
        score:"5",
    },
    {
        id:"5",
        name:"hello",
        score:"6",
    },
    ];

    export const getMovies = ()=> movies;

    export const getById = id => {
        const filteredMovies = movies.filter(movie => movie.id === String(id));
        return filteredMovies[0];
    }
    export const deletMovie = (id) => {
        const cleanedMovies = movies.filter(movie=>movie.id !== String(id));
        if(movies.length > cleanedMovies.length ){
            movie = cleanedMovies;
            return true;
        }else{
            return false;
        }
    }
    export const addMovie = (name,score) => {
        const newMovie = {
            id:`${movies.length + 1}`,
            name,
            score
        }
        movies.push(newMovie);
        return newMovie;
    }
