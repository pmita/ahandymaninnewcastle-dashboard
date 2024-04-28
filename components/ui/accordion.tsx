import * as React from "react"
// UTILS
import { cn } from '@/utils/helpers';
import { MinusSymbolSVG, PlusSymbolSVG } from "../SVGs";


interface IAccordionItem extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface IAccordion extends React.HTMLAttributes<HTMLDivElement>, IAccordionItem {
  question: string;
  answer: string;
}


export const Accordion = React.forwardRef<HTMLDivElement, IAccordion>(({ className, question, answer, ...props}, ref) => {
  // STATE & HOOKS
  const [isOpen, setIsOpen] = React.useState(false);

  // EVENTS
  const onClick = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <section
      ref={ref}
      className={cn(
        "bg-secondary text-primary shadow-sm",
        className
      )}
      {...props}
    >
      <AccordionTitle 
        className={cn("border-solid border-primary")}
      >
        <button
          aria-expanded={isOpen}
          aria-controls="accordion-content"
          onClick={onClick}
          className="flex flex-row justify-between items-center w-full"
        >
          <h4 className="text-poppins text-left">{question}</h4>
          <span>
            {isOpen ? <MinusSymbolSVG width={40} height={40} fill="#1E1E1E"/> : <PlusSymbolSVG width={40} height={40} fill="#1E1E1E"/>}
          </span>
        </button>
      </AccordionTitle>
      <AccordionContent 
        className={cn("bg-alternate text-secondary", isOpen ? "block" : "hidden")}
        id="accordion-content"
        hidden={!isOpen}
      >
        {answer}
      </AccordionContent>
    </section>
  );
})
Accordion.displayName = "Accordion";

export const AccordionTitle = React.forwardRef<HTMLDivElement, IAccordionItem>(({ className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-5 p-4 sm:p-6",
        className
      )}
      {...props}
    />
  );
})
AccordionTitle.displayName = "AccordionTitle";

export const AccordionContent = React.forwardRef<HTMLDivElement, IAccordionItem>(({ className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-5 p-4 sm:p-6 text-sm text-primary font-bold",
        className
      )}
      {...props}
    />
  );
})
AccordionContent.displayName = "AccordionContent";