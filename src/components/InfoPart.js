import React from 'react';

class InfoPart extends React.Component{
    render(){
        return (
            <div className="info-part">
                <p>
                    {this.props.data.explanation}
                </p>
            </div>
        )
    }
}

export default InfoPart