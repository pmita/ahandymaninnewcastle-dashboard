"use client"

// COMPONENTS
import { Tag } from "@/components/ui/tag"
import { Button, buttonVariants } from "@/components/ui/button"
// HOOKS
import { useForm } from "react-hook-form"
import { useFirestore } from "@/hooks/useFirestore"
// TYPES
import { queryStatus } from "@/types/firestore"
// UTILS
import { cn } from "@/utils/helpers"

type ItemStatusProps = {
  id: string;
  status: queryStatus;
}

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

export const ItemStatus = ({ id, status }: ItemStatusProps) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4">
        <span>Status</span>
        <Tag 
          variant={selectVariant(status)}
          size="sm"
        >
          {status}
        </Tag>
      </div>

    <UpdateStatus id={id} status={status} />
    </>
  )
}

type UpdateStatusProps = {
  status: string;
}


export const UpdateStatus = ({ id, status }: ItemStatusProps) => {
  //STATE && VARIABLES
  const { error: updatingError, isLoading, updateDocument } = useFirestore();
  const { register, handleSubmit, formState: { errors } } = useForm<UpdateStatusProps>({
    defaultValues: {
      status
    }
  });

  // EVENTS
  const onSubmit = async ({ status }: UpdateStatusProps) => {
    await updateDocument('queries', id, { status });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row justify-center items-center gap-2">
      <select 
        className="flex-1 w-full border-solid border-[0.3rem] border-primary p-2"
        {...register('status', { required: true })}
      >
        <option value="INITIAL">INITIAL</option>
        <option value="PROGRESSED">PROGRESSED</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>

      {errors && (
        <span className="text-danger">{errors?.status?.message}</span>
      )}

      {updatingError && (
        <span className="text-danger">{updatingError}</span>
      )}

      <Button 
        className={cn(buttonVariants({ variant: 'primary', size: 'default' }), "flex-1")}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Updating...' : 'Update Status'}
      </Button>
    </form>
  )
}