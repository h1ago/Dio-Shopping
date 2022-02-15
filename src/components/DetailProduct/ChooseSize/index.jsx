import React, {useState} from "react";
import {Container, Wrapper, Title} from "./styles"
import ChooseSizeButton from './ChooseSizeButton';

export default function FieldChooseSize(props){
    const [selected, setSelected] = useState("");
    const handleClick = (e) => {
        setSelected(e);
        props.handleClick(e);
    };

    let sizes = [];

    if(props.product.size_pp)
        sizes.push('PP');
    if(props.product.size_p)
        sizes.push('P');
    if(props.product.size_m)
        sizes.push('M');
    if(props.product.size_g)
        sizes.push('G');
    if(props.product.size_gg)
        sizes.push('GG');

    return (
        <Container>
            <Title>Escolha o tamanho:</Title>

            <Wrapper>

                {
                    sizes.map(sizeTitle => (
                        <ChooseSizeButton handleClick={handleClick} selected={selected}>{sizeTitle}</ChooseSizeButton>
                    ))
                }

            </Wrapper>

        </Container>
    )
}