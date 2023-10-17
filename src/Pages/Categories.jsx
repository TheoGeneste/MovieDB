import React, {useEffect, useState} from 'react';
import Categorie from "../Components/Categorie";
import CategoriesService from "../Services/categoriesService";

const Categories = () => {
    const [genres, setGenres] = useState([]);

    const fetchGenres = async () => {
        try{
            const response = await CategoriesService.getGenres();
            setGenres(response.data.genres)
        }catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchGenres()
    }, [])

    return <>
        {genres.map(genre => {
            return <Categorie genre={genre} />
        })}

    </>;
};

export default Categories;