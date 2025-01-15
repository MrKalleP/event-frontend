
import { useState, useEffect } from "react";

const DescriptionProject = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('../src/utils/testdata.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {Object.entries(data.projects).map(([key, project]) => (
                <div key={key}>
                    <h2>{key}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default DescriptionProject;