//COMPONENTS
import { Tag } from "@/components/ui/tag"
// TYPES
import { queryStatus } from "@/types/firestore";


const selectVariant = (status: string) => {
  switch (status) {
    case queryStatus.INITIAL:
      return 'accent';
    case queryStatus.PROGRESSED:
      return 'alternate';
    case queryStatus.COMPLETED:
      return 'success';
    default:
      return 'accent';
  }
}

export const Status = ({ status }: { status: string }) => {
  return (
    <Tag 
      variant={selectVariant(status)}
      size="sm"
    >
      {status}
    </Tag>
  )
}