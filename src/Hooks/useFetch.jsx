import { useState, useEffect } from 'react'

const useFetch = (url, method = 'GET') => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

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