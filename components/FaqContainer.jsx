import React from "react"
import FaqSection from "./FaqSection"

const FaqContainer = () => {
    return (
        
        <div className="relative w-full flex flex-col min-h-screen items-center px-6">
            <div className="absolute top-0 w-full h-48 bg-center bg-no-repeat bg-[url('../src/assets/images/background-pattern-desktop.svg')]">
            </div>
            <FaqSection/>
        </div>
    )
}

export default FaqContainer
