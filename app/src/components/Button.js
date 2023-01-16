
const Button = ({ type = 'submit', className = 'button_line', handleClick, children = 'Make QR' }) => {
return (
    <button 
        type={type}
        className={className} 
        onClick={handleClick}>
    {children}
    </button>
);
};

export default Button;