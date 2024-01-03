
function Header(props){
    let color = "";
  const handleClick = () => {
    color = (color === "orange" ? "red" : "orange");
  };
    return (
        <header className="header">
            <h1>{props.tittle}</h1>
            <ul >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button type="submit" id="ab" style={{backgroundColor : color}} onClick={handleClick}>{props.type}</button>
        </header>
    )
}

export default Header;