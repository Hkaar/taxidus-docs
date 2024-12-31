import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value="item-1"
        className="border-gray-200 dark:border-neutral-700 px-4 py-2"
      >
        <AccordionTrigger>What is Taxidus?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-gray-200 dark:border-neutral-700 px-4 py-2"
      >
        <AccordionTrigger>How do i start playing?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border-gray-200 dark:border-neutral-700 px-4 py-2"
      >
        <AccordionTrigger>
          I'm a bit lost, so how do i play?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="border-none px-4 py-2"
      >
        <AccordionTrigger>
          Is there any api docs?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FAQAccordion;
