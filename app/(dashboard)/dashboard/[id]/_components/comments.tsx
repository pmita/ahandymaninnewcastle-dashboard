"use client"

// REACT
import { useCallback } from "react";
// COMPONENTS
import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import { Status } from "@/components/status";
import { FormatedTime } from "@/components/formated-time";
import { Button, buttonVariants } from "@/components/ui/button";
import TextAreaField from "@/components/text-area";
// HOOKS
import { useForm } from "react-hook-form";
import { useFirestore } from "@/hooks/useFirestore";
// TYPES
import { queryComments, queryStatus } from "@/types/firestore";
// UTILS
import { cn } from "@/utils/helpers";

type CommentsProps = {
  itemId: string;
  status: queryStatus;
  comments: queryComments[] | [];
  canAddComments?: boolean
}

export const Comments = ({
  itemId,
  status,
  comments,
  canAddComments = false
}: CommentsProps) => {
  if (!comments) return null;

  return (
    <>
      {comments.map((comment: any) => (
        <Card key={comment.id}>
          <CardDescription>{comment.content}</CardDescription>
          <CardFooter className="flex-row justify-between">
            <Status status={comment.status} />
            <FormatedTime time={comment.createdAt} />
          </CardFooter>
        </Card>
      ))}

      {canAddComments && <AddComment itemId={itemId} currentStatus={status} />}
    </>
  );
}

type AddCommentProps = {
  content: string;
}

export const AddComment = ({ itemId, currentStatus }: { itemId: string, currentStatus: queryStatus }) => {
  // STATE && VARIABLES
  const { error: addingError, isLoading, addComment } = useFirestore();
  const { register, handleSubmit, formState: { errors } } = useForm<AddCommentProps>({
    defaultValues: {
      content: ''
    }
  });

  // EVENTS
  const onSubmit = useCallback(async ({ content }: AddCommentProps) => {
    const commentToAdd = {
      content,
      id: Math.random(),
      status: currentStatus,
    }

    await addComment('queries', itemId , commentToAdd);
  }, [addComment, itemId]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-start gap-4">
      <TextAreaField
        name="content"
        register={register}
        validationSchema={{ required: 'Please enter some details' }}
        placeholder="Add a comment..."
        error={errors.content?.message}
      />

      {addingError && (
        <span className="text-danger">{addingError}</span>
      )}

      <Button
        className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? 'Adding...' : 'Add Comment'}
      </Button>
    </form>
  );
}