import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const cachedData = {};

const useFetch = (url) => {
    const [distritos, setDistritos] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        const fetchData = async () => {
            setStatus('fetching');
            if (!cachedData[url]) {
                const response = await fetch(process.env.REACT_APP_BASE_URL + url);
                const data = await response.json();
                cachedData[url] = data;
                setDistritos(data);
                setStatus('fetched');
            } else {
                setDistritos(cachedData[url]);
                setStatus('fetched');
            }
        };

        fetchData();
    }, [url]);
    
    
    return {status, distritos};
}

export default useFetch;

export function useFetchEspecialidades() {
    const [especialidades, setEspecialidades] = useState([]);
    const [errorFetchChecker, setErrorFetchChecker] = useState(0);

    useEffect(() => {
        if (!cachedData.hasOwnProperty('especialidades')) {
            fetch(process.env.REACT_APP_BASE_URL + '/api/especialidades')
            .then(response => response.json())
            .then(results => {
                if (results.length > 0) {
                    cachedData['especialidades'] = results;
                }
                setEspecialidades(results);
            }, _ => {
                if (errorFetchChecker < 5) { 
                    setErrorFetchChecker(errorFetchChecker + 1);
                }
            });
        } else {
            setEspecialidades(cachedData['especialidades']);
        }
    }, [errorFetchChecker]);

    return especialidades;  
}
