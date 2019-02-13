import React from 'react';

import './DataTable.scss'

const DataTable = () => (
    <section>
        <table className="data-table">
            <thead className="data-table__header">
                <tr>
                    <th className="data-table__header__name">
                        Name
                        <i className="fa fa-arrow-down sort-arrow-inactive" id="sortName"></i>
                    </th>
                    <th className="data-table__header__surname">
                        Surname
                        <i className="fa fa-arrow-down sort-arrow-inactive" id="sortSurname"></i>
                    </th>
                    <th className="data-table__header__city">City</th>
                    <th className="data-table__header__email">Email</th>
                    <th className="data-table__header__phone">Phone</th>
                    <th className="data-table__header__actions"></th>
                </tr>
            </thead>
            <tbody className="data-table__data" id="dataTable"></tbody>
        </table>
    </section>
);

export default DataTable;