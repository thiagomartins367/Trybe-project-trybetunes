import React, { Component } from 'react';

class GenericButton extends Component {
  render() {
    const { buttonContent, onClickEvent, disabledButton, dataTestId } = this.props;
    return (
      <div>
        {
          disabledButton ? (
            <button
              type="button"
              disabled
              onClick={ onClickEvent }
              data-testid={ dataTestId }
            >
              {buttonContent}
            </button>
          ) : (
            <button type="button" onClick={ onClickEvent } data-testid={ dataTestId }>
              { buttonContent }
            </button>
          )
        }
      </div>
    );
  }
}

export default GenericButton;
