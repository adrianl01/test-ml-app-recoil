import { useState, useEffect } from "react";
import { resultsState, queryState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useParams } from "react-router-dom";


export function useSearchResults() {
    const params = useParams();
    const query = params.query

    const setQuery = useSetRecoilState(queryState)
    const results = useRecoilValue(resultsState)

    useEffect(() => {
        if (query) { setQuery(query) }
    }, [query]);
    return results
}
// export function useData() {
//     return useRecoilValue(apiRes)
// }


