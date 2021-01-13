import {useState} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import btnSvg from '../../assets/img/btn.svg'
import Button from '../Button';


const PizzaBlock = ({id, imageUrl, name, price, types, sizes, onAddProductToCart, addedCountInCart}) => {

    const aviablesTypes = ['тонкое', 'традиционное']
    const aviablesSizes = [26, 30, 40]

    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(0)

    const toogleActiveType = index => setActiveType(index)
    const toogleActiveSize = index => setActiveSize(index)

    const handleProductAdd = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: aviablesSizes[activeSize],
            type: aviablesTypes[activeType]
        }
        onAddProductToCart(obj)
    }


    return (
        <div className='pizza-block'>
            <img
                className='pizza-block__image'
                src={imageUrl}
                alt='Pizza'
            />
            <h4 className='pizza-block__title'>{name}</h4>
            <div className='pizza-block__selector'>
                <ul>
                    {aviablesTypes.map((type, index) =>
                        <li key={type}
                            onClick={() => toogleActiveType(index)}
                            className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index)
                            })}>{type}</li>
                    )}
                </ul>
                <ul>
                    {aviablesSizes.map((size, index) =>
                        <li key={size}
                            onClick={() => toogleActiveSize(index)}
                            className={classNames({
                                active: activeSize === index,
                                disabled: !sizes.includes(size)
                            })}>{size} sm.</li>
                    )}
                </ul>
            </div>
            <div className='pizza-block__bottom'>
                <div className='pizza-block__price'>от {price} ₽</div>
                <Button className='button--add' outline onClick={handleProductAdd}>
                    <img src={btnSvg} alt=""/>
                    <span>Добавить</span>
                    {addedCountInCart && <i>{addedCountInCart }</i>}
                </Button>
            </div>
        </div>
    )
}

PizzaBlock.propTypes = {
    // required means only this type
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
}

PizzaBlock.defaultProps = {
    types: [],
    sizes: [],
}

export default PizzaBlock