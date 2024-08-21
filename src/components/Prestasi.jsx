import React from 'react';

const Prestasi = ({ title, description, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default Prestasi;
