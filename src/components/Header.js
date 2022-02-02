import Button from './Button';

const Header = (props) => {
    const onClick = () => {
        console.log("new task")
    }


  return (
    <header className='header'>
        <h1>{props.title} Tracker</h1>
        <Button color="purple" text="New Task" onClick={onClick} />
    </header>
    )
}

export default Header;