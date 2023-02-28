import NavBarJSX from "./NavBarJSX"


const NavBar:React.FC<{setSelectedComponent}> = ({
setSelectedComponent
}) => {

    return (
        <NavBarJSX setSelectedComponent={setSelectedComponent} transparent />
    )
}

export default NavBar