"use client"

// REACT
import { useCallback } from "react";
// COMPONENTS
import { Accordion } from "../../../components/ui/accordion";
// CONFIG
import { faq } from '@/config/faq';
// UTILS
import { cn } from '@/utils/helpers';


export const FAQ = () => {
  // EARLY EXIT
  if(!faq) return null;

  // FUNCTIONS
  const renderContent = useCallback(() => (
    <>
      {faq.map((item) => (
        <Accordion 
          key={item.id} 
          className={cn("border-primary border-solid border-[0.3rem]")}
          question={item.question} 
          answer={item.answer} 
        />
      ))}
    </>
  ), [faq]);

  return (
    <>
      {renderContent()}
    </>
  );
}