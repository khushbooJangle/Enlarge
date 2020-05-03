import React from 'react';
import ShoutInput from './ShoutInput';
import ShoutOutput from './ShoutOutput';

class Shout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentshout: ' '
        }
        this.updateShoutHandler=this.updateShoutHandler.bind(this);
    }
    updateShoutHandler( event ){
        this.setState({
            currentshout: event.target.value
        })
    }
    render(){
        return(
            <div>
            <ShoutInput changed={this.updateShoutHandler} />
            <br />
            <ShoutOutput shout={this.state.currentshout} />
        </div>
        ) 
    }
}
export default Shout;