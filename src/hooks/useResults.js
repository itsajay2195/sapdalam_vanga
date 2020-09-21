import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp'


export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');


    const searchApi = async (term) => {
        console.warn('hi')
        try {
            const response = await yelp.get('/restaurants', {
                params: {
                    country: 'US',
                    name: term,
                    per_page:100
                }
            });

            setResults(response.data.restaurants)
        } catch (err) {
            setErrorMsg('Something went wrong')
        }

    };

    // searchApi('pasta')
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [errorMsg, searchApi, results]
}