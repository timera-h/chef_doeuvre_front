import React, { Component } from 'react';

export default class SortProducts extends Component {
    render() {
        return (
            <section className="sort-product">
                <article className="sort-panel">
                    <h4 className="title">Prix : </h4>
                    <input type="range" />
                </article>
            </section>
        )
    }
}
