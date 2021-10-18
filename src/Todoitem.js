import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component{
    constructor(props){
        super(props)
        this.deleteItem=this.deleteItem.bind(this);
    }
    shouldComponentUpdate(nextProps, nextStates){
        if(nextProps.item !== this.props.item){
            return true
        }else{
            return false
        }
    }
    render(){
        const { item, test } = this.props
        return(
            <li
                onClick={this.deleteItem}
            >{test}-{item}</li>
        )
    }
    deleteItem(){
        const { handelDeleteItem, index } = this.props;
        handelDeleteItem(index)
    }
}

Todoitem.propTypes = {
    tset: PropTypes.string.isRequired,
    item: PropTypes.string,
    index: PropTypes.number,
    handelDeleteItem: PropTypes.func
}

Todoitem.defaultProps = {
    test: 'Hello World'
}

export default Todoitem;