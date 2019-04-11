import React from 'react';

export default function ProductListItem(props) {
    return(
        <div className='product-list-item'>
            <h3>{props.product.title}</h3>
            <img height={100}
            title={ props.product.title }
            //src={`/products/${props.image}`}
            //src={`../../../static/products/${props.product.sku}_1.jpg`}
            src={require(`../../static/products/${props.product.sku}_1.jpg`)}
            alt={props.product.title}
            />
            <div>{props.product.style}</div>
            <div>
                {props.product.currencyFormat}
                {props.product.price}
            </div>
            <div>
                <button onClick={()=>props.addToCart(props.product)}>
                ADD TO CART ({
                     (props.cartItem && props.cartItem.quantity) || 0
                })
                </button>
            </div>
            <div>
                {
                    props.cartItem
                    ?<button onClick={()=>props.removeFromCart(props.cartItem)}>REMOVE </button>
                    : null
                }
                
            </div>
        </div>
    )
}