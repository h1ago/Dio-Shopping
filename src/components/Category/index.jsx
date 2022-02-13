import React, {useState, useEffect} from "react"
import { Container, Title, TitleClub } from "./styles"
import { useDispatch } from "react-redux";
import {categoryApi} from '../../service/api';
import Loading from "../Loading";
import Error from "../Error";


export default function Category(){
    const dispatch = useDispatch();
    const [listCategory, setListCategory] = useState([]);

    useEffect( async () => {
        
        try {
            setListCategory(await categoryApi());
        } catch (error) {
            setListCategory(null);
        }
    }, [] );

    function handleClick(category){
        dispatch({type: 'FILTER_CATALOG', payload: category});
    }

    if(listCategory == null)
        return <Error/>

    if(listCategory == [])
        return <Loading/>
    
    return (
        <Container>
            <Title>CATEGORIAS</Title>

            <TitleClub onClick={() => handleClick('All')}>
                Todos
            </TitleClub>

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