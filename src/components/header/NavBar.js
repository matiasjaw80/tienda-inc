import CartWidget from "./CartWidget";
import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />

            </div>
            
            <div className="containerItemList">
                <ItemListContainer
                    itemUno = "Todos Los productos"
                    itemDos = "Abrigos"
                    itemTres = "Camisetas"
                    itemCuatro = "Pantalones"
                />
            </div>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;