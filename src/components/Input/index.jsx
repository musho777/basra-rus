import './style.css'
export const Input = ({ placeholder, type = 'text', value, onChange = () => { } }) => {
    return <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='Input'
    />
}