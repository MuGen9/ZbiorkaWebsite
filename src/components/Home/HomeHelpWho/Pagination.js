import React from 'react';

function Pagination({perPage, items, parentCallback}) {
    const number = Math.ceil(items/perPage);
    const pages = Array.from({length: number}, (_, i) => i + 1);

    return (
        <div className="pagination">
            {pages.length > 1 && pages.map(page => (<div key={page} className="pagination__tile" onClick={() => parentCallback(page)}>{page}</div>))}
        </div>
    )
}

export default Pagination;
