import React from 'react';
import OrderHistoryItem from './OrderHistoryitem';

const OrderHistoryItemContainer = () => {
    return (
        <div className="row" style={{ height: '300px', overflow: 'auto' }}>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header" style={{ backgroundColor: '#8650DC', color: 'white' }}>
                        <h5>Order History</h5>
                    </div>
                    <OrderHistoryItem />
                    
                </div>
            </div>
        </div>
    );
};

export default OrderHistoryItemContainer;
