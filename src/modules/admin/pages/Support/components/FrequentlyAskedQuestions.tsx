import UpAccordion from '@assets/icons/upArrow.svg?react';
import DownAccordion from '@assets/icons/downArrow.svg?react';
import { useState } from 'react';
import { frequentlyAskedQuestions } from 'db/support';

const FrequentlyAskedQuestions = () => {
  const [accordionOpen, setAccordionOpen] = useState<number>(0);
  function toggleAccordion(index: number) {
    setAccordionOpen(accordionOpen === index ? -1 : index);
  }
  return (
    <div className="flex flex-col items-center justify-center pt-14">
      <h3 className=" text-[18px] leading-5 lg:text-[24px] lg:leading-7 text-mainTextColor py-4">
        Frequently Asked Questions
      </h3>
      <div className="lg:w-[860px] lg:ml-16 text-[#282525]">
        {frequentlyAskedQuestions?.map(({ id, ques, answer, list }) => (
          <div key={id} className="border border-[#F2F2F2] p-[20px]">
            <div className="flex justify-between items-center  ">
              <h1 className=" text-[14px] lg:text-[16px] leading-[20px] font-[500]">
                {ques}
              </h1>
              {accordionOpen === id ? (
                <UpAccordion
                  onClick={() => toggleAccordion(id)}
                  className="cursor-pointer"
                />
              ) : (
                <DownAccordion
                  className="cursor-pointer"
                  onClick={() => toggleAccordion(id)}
                />
              )}
            </div>
            {accordionOpen === id && (
              <div>
                <p className="text-[16px] leading-[25px] pt-4">{answer}</p>
                {list?.map((el, i) => (
                  <div key={i} className="flex items-baseline">
                    <div className="rounded-full bg-[#333] w-[4px] h-[4px] border-[2px] border-[#333]" />
                    <p className="text-[14px] pt-2 ml-2 ">{el}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
