import { useState, useEffect, useRef } from 'react';


const HomePage = ({ fetchForMovie }) => {

    const [popMovies, setPopMovies] = useState([]);
    // const [status, setStatus] = useState('idle')
    const isFirstRender = useRef(true);


    useEffect(() => {

        if (isFirstRender.current) {
            fetchForMovie().then(movie => setPopMovies([...popMovies, movie])).catch(error => { console.log(error) });
            isFirstRender.current = false
            // console.log('первый рендер')
            return
        };

    })

    console.log(popMovies)
    




    return (<h1>HomePage</h1>)
}

export default HomePage