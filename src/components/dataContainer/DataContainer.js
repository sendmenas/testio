import React from 'react';

import './DataContainer.scss';

const DataContainer = () => (
    <aside className="data-block">
        <dl className="data-block__data">
            <dt className="data-label">Name:</dt>
            <dd className="data-info" id="userName"></dd>
            <dt className="data-label">Surname:</dt>
            <dd className="data-info" id="userSurname"></dd>
            <dt className="data-label">City:</dt>
            <dd className="data-info" id="userCity"></dd>
            <dt className="data-label">Email:</dt>
            <dd className="data-info data-info--email" id="userEmail"></dd>
            <dt className="data-label">Phone:</dt>
            <dd className="data-info" id="userPhone"></dd>
        </dl>
    </aside>
);

export default DataContainer;