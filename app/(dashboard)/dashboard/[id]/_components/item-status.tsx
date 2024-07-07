"use client"

// COMPONENTS
import { Button, buttonVariants } from "@/components/ui/button"
import { Status } from "@/components/status"
// HOOKS
import { useForm } from "react-hook-form"
import { useFirestore } from "@/hooks/useFirestore"
// TYPES
import { queryStatus } from "@/types/firestore"
// UTILS
import { cn } from "@/utils/helpers"

interface IItemsStatus extends IStatusForm {
  id: string;
}

interface IStatusForm {
  status: string;
}

export const ItemStatus = ({ id, status }: IItemsStatus) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4">
        <span>Status</span>
        <Status status={status} />
      </div>

    <UpdateStatus id={id} status={status} />
    </>
  )
}

export const UpdateStatus = ({ id, status }: IItemsStatus) => {
  //STATE && VARIABLES
  const { error: updatingError, isLoading, updateDocument } = useFirestore();
  const { register, handleSubmit, formState: { errors } } = useForm<IStatusForm>({
    defaultValues: {
      status
    }
  });

  // EVENTS
  const onSubmit = async ({ status }: IStatusForm) => {
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