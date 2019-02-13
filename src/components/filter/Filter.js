import React from 'react';

import './Filter.scss';

const Filter = () => (
    <section className="dashboard__filter">
        <div className="filter-name">
            <input className="filter-input" placeholder="Name" type="text" id="nameFilter" />
        </div>
        <div className="filter-city" id="cityFilter">
            <div id="cityFilterSelection">City</div>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
            <section className="filter-city__select" id="citySelect">
                <div>City</div>
                <div className="cities-container" id="citySelectContainer"></div>
            </section>
        </div>
        <div className="checkbox">
            <div className="checkbox__input" id="activeCheckboxContainer">
                <input type="checkbox" id="activeCheckbox" />
            </div>
            <div className="checkbox__label">Show active</div>
        </div>
        <button className="filter-button" id="filterButton">filter</button>
        <button className="filter-button" id="resetFilterButton">reset</button>
    </section>
);

export default Filter;