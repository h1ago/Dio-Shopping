import React, {useEffect} from "react"
import { Container, Title, TitleClub } from "./styles"
import { useSelector, useDispatch } from "react-redux";
import mock from '../../service/mock.json';

export default function Category(){
    const dispatch = useDispatch();
    const listCategory = useSelector( state => state.catalog.categories );

    useEffect( () => {
        dispatch({type: 'GET_CATEGORY_PRODUCTS'});
    }, [] );

    function handleClick(category){
       
        dispatch({type: 'FILTER_CATALOG', payload: category});
    }


    return (
        <Container>
            <Title>CATEGORIAS</Title>

            {   
                listCategory.map((category, index) => {
                    return (
                            <TitleClub 
                                onClick={() => handleClick(category)}
                                key={category.id}
                            >
                                {category.name}
                            </TitleClub>
                        );
                })
            }
        </Container>
    )
}