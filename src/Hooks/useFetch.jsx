import { useState, useEffect } from 'react'

const useFetch = (url, method = 'GET') => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    // const options = {
    //     method: `${method}`,
    //     headers: {
    //         'X-RapidAPI-Key': '5a36ab55c8msh72e722ea3f26c6ep1272fajsn3c0c7c59805e',
    //         'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
    //     }
    // }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res)
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [url]);

    return { loading, data }
}

export default useFetch