function Sorts({bean}) {
    return(
        <div className="products">
        {bean.map((element => {
            const {id, name, price, image} = element;
            return(
                <div key={id} className="product-card">
                    <img src={image} width="400px" alt="coffeebean"/>
                    <h4 className="sort">{name}</h4>
                    <p className="sort">$ {price} CAD / bag 12 OZ</p>
                </div>
            )
        }))}
        </div>
    )
}

export default Sorts;