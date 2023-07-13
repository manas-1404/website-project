import React from "react";

import Manas from "./images/manas.jpg";

function FirstPage() {
    return (
        <div id="First-Page-stage">
            <div id="First-Page">
                <img src={Manas} width="37%" id="MyImage" />
                <div id="IamManas">
                    <h1>Hey!</h1>
                    <h1>This is</h1>
                    <h1><strong>Manas!</strong></h1>
                </div>
            </div>
        </div>

    );
}

export default FirstPage;
