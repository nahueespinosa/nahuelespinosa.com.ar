import React from 'react'

const Timeline = (props) => (
    <section id="timeline">
        <div class="container">
            {props.events.map(event => (
                <div class="timeline-item">
                    <div class="timeline-img"></div>
                    <div class="timeline-content" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
                        <div class="timeline-date">{event.date}</div>
                        <h3><span className={'icon '+event.icon}></span> {event.title}</h3>
                        <p>{event.text}</p>
                    </div>
                </div> 
            ))}
        </div>
    </section>
)

export default Timeline
