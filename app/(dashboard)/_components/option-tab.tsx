import { Button, buttonVariants } from "@/components/ui/button"
import { cn, tooglePrimaryButtonVariant } from "@/utils/helpers"

type OptionTabProps = {
  onClick: () => void;
  option: string;
  currentOption: string;
}

export const OptionTab = ({ onClick, option, currentOption }: OptionTabProps) => {
  return (
    <Button
      className={cn(buttonVariants({
        variant: tooglePrimaryButtonVariant(option === currentOption),
        size: 'sm',
      }), "rounded-none")}
      onClick={onClick}
    >
      {currentOption}
    </Button>
  );
}