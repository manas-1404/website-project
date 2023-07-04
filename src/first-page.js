import React from "react";

import Manas from "./images/manas.jpg";

function FirstPage() {
    return (
        <div className="First-Page-stage">
            <div id="First-Page">
                <img src={Manas} alt="Professional Picture of Manas" width="37%" id="MyImage" />
                <div id="IamManas">
                    <h1>Hello!</h1>
                    <h1>I'm</h1>
                    <h1><strong>Manas!</strong></h1>
                </div>
            </div>
        </div>

    );
}

export default FirstPage;
