import Image from "./image";
import "../../styles/cardItem.css";
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import ImgPrueba from "../../img/abrigos/01.jpg";

const CardItem = () => {
    return(
        <div className="cardItem">
            <Image imagen={ImgPrueba}/>
            <Description 
                title="Campera 01"
                cantidad = {5}
                precio = {20000}
                />
            <div className="buttons">
                <ButtonDetalles />
                <ButtonAddCart />
            </div>
        </div>   
    )
}

export default CardItem;