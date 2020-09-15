import React from 'react';

function ProductCard(props) {
    return (
        <div className="card puntero">
            <img src={`http://${props.image}`} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <p> 
                    <b className="card-title">{props.brand}&nbsp;</b>
                    <span className="card-desc">
                        {props.description}
                    </span>
                </p>
                {props.deal ? (
                    <div>
                        <p className="card-text">
                            ${props.price}&nbsp;
                            <span className="badge badge-pill badge-primary custom-badge">
                                50%
                            </span>
                        </p>
                        <p className="current-price">
                            ${props.price * 2}
                        </p>
                    </div>
                ): (
                    <p className="card-text">
                        ${props.price}
                    </p>
                )}
            </div>
        </div>
    );
}

export default ProductCard;