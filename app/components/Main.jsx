/**
 * Created by PANCAK3 on 12/5/2016.
 */
import React, {Component} from 'react';
import Navigation from 'navigation';

export const Main = (props) => {
    return (
        <section>
            <Navigation />
            <div>
                {props.children}
            </div>
        </section>
    )
};


