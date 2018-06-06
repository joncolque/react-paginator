import React, { Component } from 'react';

import { UltimatePagination } from './paginator'

export default class GotenPagination extends Component {
    constructor(){
        super()
        this.childRef = React.createRef()
      }
    
    changePage = (newPage) => {
        const searcherMethod = this.props.searcherMethod ? this.props.searcherMethod : "search" 
        this.childRef.current[searcherMethod]((newPage-1)*this.props.limit, this.props.limit)
    }

    render(){
        return(
            <div>
                {React.cloneElement(this.props.children[0],{ref: this.childRef})}
                {this.props.children[1]}
                <UltimatePagination onChange={this.changePage} currentPage={this.props.currentPage} 
                    totalPages={Math.ceil(this.props.totalPages/2)}/>
            </div>
        )
    }
}
