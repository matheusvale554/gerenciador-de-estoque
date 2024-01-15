import { Link, Outlet } from "react-router-dom";

export default function RootLayout(){

    return (
<>
<header>
<Link to="/" className="logo"> Projeto controle de estoque em React</Link>
<nav>
    <Link to="/" >Inicio</Link> 
    <Link to="/items">Items</Link>
    <Link to="/items/new">Novo item</Link>
</nav>
</header>
<div>
    <Outlet/>

</div>
<footer>
    Desenvolvido por Matheus ltdaº. todos os direitos reservados.
</footer>
</>
    )
}