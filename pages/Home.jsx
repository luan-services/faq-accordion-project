import Challenge from "../components/Challenge"
import FaqContainer from '../components/FaqContainer'

export const Home = () => {
return (
    <div className="w-full flex min-h-screen flex-wrap justify-center items-center">
        <FaqContainer/>
        <Challenge/>
    </div>
)
}
