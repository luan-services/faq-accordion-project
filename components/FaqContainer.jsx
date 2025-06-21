import React from "react"
import FaqSection from "./FaqSection"
import bgImg from "../src/assets/images/background-pattern-desktop.svg"

const FaqContainer = () => {
    return (
        
        <div className="relative w-full flex flex-col min-h-screen items-center px-6">
            <div className="absolute top-0 w-full">
                <img src={bgImg} className="bg-center bg-repeat w-full h-48 object-cover"/>
            </div>
            <FaqSection/>
        </div>
    )
}

export default FaqContainer
