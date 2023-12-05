
import React from 'react';

const Filter = ({ options, onChange, label }) => {
    return (
        <div>
            <label>{label}</label>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Select...</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;

