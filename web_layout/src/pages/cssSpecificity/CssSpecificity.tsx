import React from 'react';
import './CssSpecificity.scss';

export function CssSpecificity() {
    return (
        <div id="cssSpecificityContainer">
            <div id="startContainer">
                <div className="colored">Colored</div>
                <div className="rounded">Rounded</div>
                <div className="colored rounded">Colored and Rounded</div>
            </div>
            <div id="endContainer">
                <div id='endStartContainer'>
                    <div className="colored">
                        <div className="colored rounded">Square</div>
                    </div>
                </div>
                <div id="endEndContainer">
                    <div className="colored">
                        <div className="colored rounded">Circular</div>
                    </div>
                </div>
            </div>
        </div>
    )
}