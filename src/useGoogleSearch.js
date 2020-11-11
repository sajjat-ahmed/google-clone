import React, { useEffect, useState } from 'react';

// // Google search API key
const API_KEY = "AIzaSyCFZLRSox7afIkzVWdLHn_dHbjF1kSQSqs";
// // 
const CONTEXT_KEY = "60ab137873f6218cd";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetshData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(response => response.json())
                .then(result => {
                    setData(result);
                })
        }

        fetshData();
    }, [term])

    return { data }
}

export default useGoogleSearch;
