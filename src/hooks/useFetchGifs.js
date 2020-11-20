import { useEffect, useState } from "react"
import { getGifs } from "../helper/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        err: null,
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(resp => {
                setState({
                    data: resp,
                    loading: false
                });
            })
            .catch(err => {
                setState({
                    err,
                    loading: false
                })
            })
    }, [category]);

    return state;
}