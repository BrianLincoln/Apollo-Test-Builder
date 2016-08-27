import React from 'react';

const ConfirmElementExistsAction = (props) => {
    ConfirmElementExistsAction.propTypes = {
        handleSelectorChange: React.PropTypes.func.isRequired,
        selector: React.PropTypes.string
    };
    const handleSelectorChange = (event) => {
        props.handleSelectorChange(event.target.value);
    };
    return (
        <div>
            <div className="form-group">
                <label htmlFor="field-type">Selector: </label>
                <input className="form-control" id="field-type" onChange={handleSelectorChange.bind(this)} type="text" value={props.selector} />
            </div>
        </div>
    );
};

export default ConfirmElementExistsAction;