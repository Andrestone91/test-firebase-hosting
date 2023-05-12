import React, { useState, useEffect } from "react";
import { atom, useRecoilValue, useRecoilState, selector } from "recoil";
import { useParams, Link } from "react-router-dom";

const queryState = atom({
    key: 'query',
    default: "",
});

const resultsState = selector({
    key: 'searchResults',
    get: async ({ get }) => {
        const valorDeQuery = get(queryState)
        console.log({ valorDeQuery });
        if (valorDeQuery) {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery)
            const json = await response.json()
            return json.results;
        } else {
            return []
        }
    }
},
);

export function useSearchResult() {
    // 1 - escuchar la URL (params)
    const params = useParams();
    const query: any = params.query

    // 3 - 
    const [value, setQueryValue] = useRecoilState(queryState)
    const results = useRecoilValue(resultsState)


    // 2 - avisarle a recoil (useEffect)
    useEffect(() => {
        if (query) {
            setQueryValue(query)

        }
    }, [query])
    return results;
}