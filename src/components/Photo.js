import React from 'react';



class Photo extends React.Component{
    
    render(){
        const {url, date, title} = this.props.data
        return(
            <div className="photo-wrap" >
                <h2>{title}</h2>
            <img className="photo" src={url} alt={date}></img>
        </div>
        )
    }
    
}





        



export default Photo;