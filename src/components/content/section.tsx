import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"span"> {
  closing?: boolean;
}

const Section = ({ closing, id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "container px-0 max-w-[85rem] flex flex-col border-t border-r border-l border-gray-200 dark:border-neutral-800",
        closing && "border-b",
        className
      )}
    >
      {children}
    </section>
  );
};

const SectionTitle = ({
  className,
  children,
}: React.ComponentProps<"span">) => {
  return (
    <span
      className={cn(
        "text-3xl font-bold tracking-tight px-4 py-5 border-b border-gray-200 dark:border-neutral-800",
        className
      )}
    >
      {children}
    </span>
  );
};

export { Section, SectionTitle };
