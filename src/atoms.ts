import { atom, selector } from "recoil";
import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil"

export const queryState = atom({
    key: "query",
    default: ""
})

export const resultsState = selector({
    key: 'charCountState',
    get: async ({ get }) => {
        // const user = get(userState);
        console.log("apiRes")
        const val = get(queryState)
        if (val) {
            const res = await <any>fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + val)
            const data = await res.json();
            console.log(data.results)
            return data.results;
        } else { return [] }
    }
})

