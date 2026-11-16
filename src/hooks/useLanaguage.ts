import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function useLanaguage(){
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanague must be used inside Provider")
    }
    
    return context;
}