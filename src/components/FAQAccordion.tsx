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
          <p className="text-base">
            Taxidus is an online platform for RPG-styled board games, similar to
            Dungeons & Dragons, but designed to be played online and extensible
            by its community of users.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-gray-200 dark:border-neutral-700 px-4 py-2"
      >
        <AccordionTrigger>
          Can i play Taxidus on multiple devices?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-base">
            Yes! Taxidus can be accessed from both mobile apps and web clients,
            allowing you to play from anywhere with an internet connection.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border-gray-200 dark:border-neutral-700 px-4 py-2"
      >
        <AccordionTrigger>
          Is Taxidus only for experienced RPG players?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-base">
            No, Taxidus is designed to be accessible to players of all skill
            levels. The platform's flexibility allows both newcomers and
            experienced players to enjoy the game.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-none px-4 py-2">
        <AccordionTrigger>
          Can developers create their own clients for Taxidus?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-base">
            Absolutely! Taxidus provides documentation that allows developers to
            create their own clients that connect to the central API,
            encouraging a diverse ecosystem of user-created interfaces.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FAQAccordion;
