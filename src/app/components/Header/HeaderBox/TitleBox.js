import React from "react";
import './TitleBox.css'

export const TitleBox = (props) => {
    return (
            <div className="col-md-10 no-padding h100">
                <div className="heading">
                    <span>{props.titleName}</span><br />
                </div>
            </div>
            

    );
}