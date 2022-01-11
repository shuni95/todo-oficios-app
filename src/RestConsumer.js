import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

let cachedData = {};

export function useFetchDistritos() {
    const [distritos, setDistritos] = useState([]);

    console.info('cacheDate', cachedData);
    useEffect(() => {
        if (!cachedData.hasOwnProperty('distritos')) {
            fetch(process.env.REACT_APP_BASE_URL + '/api/distritos')
            .then(response => response.json())
            .then(results => {
                if (results.length > 0) {
                    cachedData['distritos'] = results;
                }
                setDistritos(results)
            }, error => {
                console.error(error);
            });
        } else {
            setDistritos(cachedData['distritos']);
        }
    }, []);
    
    
    return distritos;
}

export function useFetchEspecialidades() {
    const [especialidades, setEspecialidades] = useState([]);
    const [errorFetchChecker, setErrorFetchChecker] = useState(0);

    useEffect(() => {
        console.info(cachedData.hasOwnProperty('especialidades'));
        if (!cachedData.hasOwnProperty('especialidades')) {
            fetch(process.env.REACT_APP_BASE_URL + '/api/especialidades')
            .then(response => response.json())
            .then(results => {
                console.info(typeof results);
                if (results.length > 0) {
                    cachedData['especialidades'] = results;
                }
                setEspecialidades(results);
            }, error => {
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
