const Categories = ({items, onClickCategory, activeCategory}) => {
    return (
        <div className='categories'>
            <ul>
                <li onClick={() => onClickCategory(null)}
                    className={(activeCategory === null) ? 'active' : ''}>
                    All
                </li>
                {items &&
                    items.map((item, index) => {
                        return <li
                            onClick={() => onClickCategory(index)}
                            className={(index === activeCategory) ? 'active' : ''}
                            key={`${item}_${index}`}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Categories