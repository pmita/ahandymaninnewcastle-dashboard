"use client"

// COMPONENTS
import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import { Status } from "@/components/status";
import { FormatedTime } from "@/components/formated-time";
// TYPES
import { queryComments, queryStatus } from "@/types/firestore";

type CommentsProps = {
  status: queryStatus;
  comments: queryComments[] | [];
}

export const Comments = ({
  status,
  comments
}: CommentsProps) => {
  if (!comments) return null;

  return (
    <div className="rounded-lg bg-secondary lg:col-span-2 p-4 flex flex-col gap-4">
      Comments
      {comments.map((comment: any) => (
        <Card key={comment.id}>
          <CardDescription>{comment.content}</CardDescription>
          <CardFooter className="flex-row justify-between">
            <Status status={status} />
            <FormatedTime time={comment.createdAt} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}