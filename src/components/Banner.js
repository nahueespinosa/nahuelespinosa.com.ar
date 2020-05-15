import React from 'react'

const Banner = (props) => (
    <section id="banner" className={props.sectionStyle}>
        <div className="inner">
            <header className="major">
                <h1>{props.title}</h1>
            </header>
            <div className="content">
                {props.children}
            </div>
        </div>
    </section>
)

export default Banner
