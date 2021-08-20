import { useState, useEffect }  from 'react';


const useDataFetchApi = (dataType) => {
    const [getHttpRequest, setHttpRequest] = useState();
    
 
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://warhammer-web-app-default-rtdb.europe-west1.firebasedatabase.app/${dataType}.json`);
            const responseData = await response.json();

            let array = []

            for (const key in responseData) {
                array.push(responseData[key]);
            }
            setHttpRequest(array)
        }

        fetchData();
        }, [dataType]
    )

    if(getHttpRequest !== undefined) {
        return getHttpRequest; 
    }

}

export default useDataFetchApi;