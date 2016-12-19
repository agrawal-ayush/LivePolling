/**
 * Created by Ayush Agrawal on 12/12/2016.
 */
import React from 'react';
import io from 'socket.io-client'
import Header from './parts/Header';

class APP extends  React.Component {
    
    getInitialState(){
        return {
            status : 'disconnected'
        }
    }

    componentWillMount(){
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect)
    }

    connect(){
        this.setState({ status : 'connected'});
    }
    
    disconnect(){
        this.setState({ status : 'disconnected'});
    }


    render(){
        return(
            <div>
                <Header title="New Header "/>
            </div>
        )
    }
}

export default APP;


