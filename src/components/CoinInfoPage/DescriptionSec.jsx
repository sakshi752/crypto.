import React, { useState } from 'react';
import './Description.css';

const DescriptionSec = ({ name,desc }) => {
    const [readMore, setReadMore] = useState(false);
    const [editedDesc, setEditedDesc] = useState(desc.substring(0, 1000));

    const handleReadMoreBtn = () => {
        setReadMore(!readMore);
        setEditedDesc(readMore ? desc.substring(0, 1000) : desc);
    };

    return (
        <div className="flex flex-col justify-between gap-2 cursor-pointer dark:bg-gray-800 bg-gray-300 dark:text-white px-5 py-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <div className="text-justify description">
                <p dangerouslySetInnerHTML={{ __html: editedDesc }} />
                {desc.length > 1000 && (
                    <button
                        onClick={handleReadMoreBtn}
                        className="text-lg text-gray-400"
                    >
                        {readMore ? 'Read less...' : 'Read more...'}
                    </button>
                )}

            </div>

        </div>
    );
};

export default DescriptionSec;
