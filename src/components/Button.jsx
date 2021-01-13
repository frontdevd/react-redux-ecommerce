import classNames from 'classnames'

const Button = ({className, outline, children, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className)}>
            {children}
        </button>
    )
}

export default Button