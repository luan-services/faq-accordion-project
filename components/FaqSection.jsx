import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { imgsSrc} from "../objects/ImgsSrc"
import { questions } from "../objects/FaqQuestions"

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
        
      <div className="flex flex-col bg-custom-white rounded-2xl shadow-xl w-full max-w-xl p-8 z-10 mt-24">

        <div className="flex items-center gap-4">
          	<img src={imgsSrc.iconStar} alt="Icon Star"/> 
          	<span className="text-5xl font-worksans-bold">FAQs</span>
        </div>

        {questions.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">

            <button className="w-full flex justify-between items-center py-4 text-left gap-4" onClick={() => toggleAccordion(index)}>
              <span className="font-worksans-bold text-custom-purple-950">{faq.question}</span>
              <img src={activeIndex === index ? imgsSrc.iconMinus : imgsSrc.iconPlus} alt="Icon plus/minus"/> 
            </button>

            <AnimatePresence>
              	{activeIndex === index && 
					<motion.div key="content" initial="collapsed" animate="open" exit="collapsed" transition={{ duration: 0.3, ease: "easeInOut" }}
					variants={{open: { opacity: 1, height: "auto" }, collapsed: { opacity: 0, height: 0 },}} className="overflow-hidden">
						<p className="text-gray-500 pb-4">{faq.answer}</p>
					</motion.div>
            	}
            </AnimatePresence>
          </div>
        ))}

      </div>
  );
}

export default FaqSection
