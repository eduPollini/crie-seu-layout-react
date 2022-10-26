import React, {Component} from "react";

export default class SidebarGuide extends Component{

    constructor(props){
        super(props);
        this.state = {
            isSelected: false
        }
    }

    render(){
        return(
            <div className="sidebar__guide">
                <h3>{this.props.name}</h3>

            </div>
        );
    }
}