import React, { Component } from "react";
import "./style.css";

class PurchaseForm extends Component {
  render() {
    const {
      product: { currentPrice },
      quantity,
      phone
    } = this.props;
    const totalPrice = (currentPrice * quantity).toFixed(1);
    return (
      <div className="purchaseForm">
        <div className="purchaseForm__wrapper">
          <div className="purchaseForm__row">
            <div className="purchaseForm__rowLabel">Quantity</div>
            <div className="purchaseForm__rowValue">
              <span
                className="purchaseForm__counter--dec"
                onClick={this.handleDecrease}
              >
                -
              </span>
              <input
                className="purchaseForm__quantity"
                type="number"
                onChange={this.handleChange}
                value={quantity}
              />
              <span
                className="purchaseForm__counter--inc"
                onClick={this.handleIncrease}
              >
                +
              </span>
            </div>
          </div>
          <div className="purchaseForm__row">
            <div className="purchaseForm__rowLabel">Subtotal</div>
            <div className="purchaseForm__rowValue">
              <span className="purchaseForm__totalPrice">${totalPrice}</span>
            </div>
          </div>
          <div className="purchaseForm__row">
            <div className="purchaseForm__rowLabel">Contact</div>
            <div className="purchaseForm__rowValue">{phone}</div>
          </div>
        </div>
        <ul className="purchaseForm__remark">
          <li className="purchaseForm__remarkItem">
            <i className="purchaseForm__sign" />
            <span className="purchaseForm__desc">Support free return</span>
          </li>
          <li>
            <i className="purchaseForm__sign" />
            <span className="purchaseForm__desc">Support free return on expired</span>
          </li>
        </ul>
        <a className="purchaseForm__submit" onClick={this.handleClick}>
          Submit
        </a>
      </div>
    );
  }

  handleDecrease = () => {
    const { quantity } = this.props;
    if (quantity > 0) {
      this.props.onSetQuantity(quantity - 1);
    }
  };

  handleIncrease = () => {
    const { quantity } = this.props;
    this.props.onSetQuantity(quantity + 1);
  };

  handleChange = e => {
    const quantity = e.target.value;
    this.props.onSetQuantity(Number.parseInt(quantity));
  };

  handleClick = () => {
    const { quantity } = this.props;
    if (quantity > 0) {
      this.props.onSubmit();
    }
  };
}

export default PurchaseForm;
