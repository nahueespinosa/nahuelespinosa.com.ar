import React from 'react'

const Timeline = (props) => (
    <section id="timeline">
        <div class="container">
            <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease">
                    <h2>Title</h2>
                    <div class="timeline-date">1 MAY 2016</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                    <a class="bnt-more" href="javascript:void(0)">More</a>
                </div>
            </div> 

            <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content" data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease">
                    <h2>Title</h2>
                    <div class="timeline-date">25 MAY 2016</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                    <a class="bnt-more" href="javascript:void(0)">More</a>
                </div>
            </div>   

            <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease">
                    <div class="timeline-date">3 JUN 2016</div>
                    <h2>Quote</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atquem.</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-img"></div>
                <div class="timeline-content" data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease">
                    <div class="timeline-date">3 JUN 2016</div>
                    <h2>Quote</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                </div>
            </div> 
        </div>
    </section>
)

export default Timeline
