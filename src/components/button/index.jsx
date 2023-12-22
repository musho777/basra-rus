import './style.css'
export const Button = ({ text, active, green, onClick = () => { }, black }) => {
    return <div onClick={() => onClick()} id={active ? 'aciveButton' : ''} className={
        green ? 'greenButton' : black ? 'blackButton' : 'button'

    }>
        <p id={active ? 'activeText' : ''} className={green ? 'greenText' : black ? 'black' : ''}>{text}</p>
    </div>
}