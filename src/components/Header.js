import Button from './Button';

const Header = (props) => {
    const onClick = () => {
        console.log("hola")
    }


  return (
    <header className='header'>
        <h1>{props.title} Tracker</h1>
        <Button color="green" text="helloWorld" onClick={onClick} />
    </header>
    )
}

export default Header;