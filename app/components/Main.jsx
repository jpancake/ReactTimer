/**
 * Created by PANCAK3 on 12/5/2016.
 */
import React from 'react'
import Navigation from 'navigation'

export const Main = (props) => {
    return (
        <section>
            <Navigation />
            <section className="row align-spaced">
                <div className="column small-4 medium-6 large-6">
                    {props.children}
                </div>
            </section>
        </section>
    )
}
