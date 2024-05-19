//COMPONENTS
import { Tag } from "@/components/ui/tag"
// TYPES
import { queryStatus } from "@/types/firestore";


const selectVariant = (status: string) => {
  switch (status) {
    case queryStatus.PROGRESSED:
      return 'accent';
    case queryStatus.COMPLETED:
        return 'success';
    case queryStatus.INITIAL:
    default:
      return 'highlight';
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