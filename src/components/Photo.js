import React from 'react';



class Photo extends React.Component{
    
    render(){
        const {url, date} = this.props.data
        console.log(this.props.data)
        return(
            <div className="photo-wrap" >
            <img className="photo" src={url} alt={date}></img>
        </div>
        )
    }
    
}





        



export default Photo;