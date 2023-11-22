import React from 'react';
import './LayoutPage.scss';

export function LayoutPage() {
    return (
        <div id="layoutPageContainer">
            <div id="headerContainer"></div>
            <div id="mainContainer">
                <div id="bodyContents">
                    <div className="centerContainer">
                        <div id="startContainer"></div>
                        <div id="endContainer">
                            <div id="startStartContainer">
                                <div className="image"></div>
                            </div>
                            <div id="endEndContainer">
                                <div id="summaryContainer">
                                    <div id="summary"></div>
                                </div>
                                <div id="conclusionContainer">
                                    <div id="conclusion"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer"></div>
            </div>
        </div>
    )
}