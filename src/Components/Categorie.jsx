import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Categorie = ({genre}) => {
    return <>
        {/*Pour la page avec les props*/}
        {/*<Link to={"/categories/"+genre.id+"/films"} >*/}
        {/*Pour la page avec les states */}
        <Link to={"/categories/films"} state={genre}>
            <Button color={"info"}>{genre.name}</Button>
        </Link>
    </>;
};

export default Categorie;