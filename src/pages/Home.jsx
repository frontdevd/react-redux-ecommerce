import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setCategory, setsortby} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas';
import {Categories, LoadingBlock, PizzaBlock, SortPopup} from '../components'
import {addPizzaToCart} from '../redux/actions/cart';

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({pizza}) => pizza.items)
    const cartItems = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizza}) => pizza.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    console.log(cartItems);

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [dispatch, category, sortBy])

    const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const sortItems = [
        {name: 'popular', type: 'popular'},
        {name: 'price', type: 'price'},
        {name: 'name', type: 'title'},
    ]

    const onSelectCategories = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch])

    const onSelectSort = React.useCallback((type) => {
        dispatch(setsortby(type))
    }, [dispatch])


    const onAddProductToCart = obj => {
        dispatch(addPizzaToCart(obj))
    }


    return (
        <div className='container'>
            <div className='content__top'>
                <Categories
                    activeCategory={category}
                    items={categories}
                    onClickCategory={onSelectCategories}/>
                <SortPopup
                    onChangeSort={onSelectSort}
                    activeSort={sortBy}
                    items={sortItems}/>
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
                {isLoaded
                    ? items.map((item) => <PizzaBlock
                        onAddProductToCart={(obj)=> onAddProductToCart(obj)}
                        key={item.id}
                        addedCountInCart={cartItems[item.id] && cartItems[item.id].items.length}

                        {...item}  />)
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <LoadingBlock key={index}/>)
                }
            </div>
        </div>
    )
}

export default Home