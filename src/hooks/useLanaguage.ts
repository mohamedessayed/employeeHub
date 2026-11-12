import { useContext } from "react";
import { LanaguageContext } from "../context/LanguageContext";

export function useLanaguage(){
    const context = useContext(LanaguageContext);

    if (!context) {
        throw new Error("useLanague must be used inside Provider")
    }
    
    return context;
}