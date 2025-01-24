import { useState, useEffect } from 'react';
import { FetchLogsByType } from '../utils/ApiStore';


export const useFetchLogsByType = ({ type }) => {
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const logs = await FetchLogsByType(type);
                setFetchedData(logs);
            } catch {
                console.log("did not find all the types");
            }
        };
        fetchLogs();
    }, [type]);
    return { data: fetchedData };
};


/* 
jag ville använda mindre kod så jag skrev functionaliteten med useEffect 
så jag använder fetchlogsbytype funtionen som ser till att du hamnar på rätt endpoint 
och den här datan sparas i logs som jag senare sätter setFetchedData

och den här körs när type ändras [warning] osv 
och retuneras då data som vi får ut från setFetched data
*/