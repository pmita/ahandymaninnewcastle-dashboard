// NEXT
import Link from "next/link"
// COMPONENTS
import { buttonVariants } from "@/components/ui/button"
// UTILS
import { cn } from "@/utils/helpers"

export const ContainerCTA = ({ itemId }: { itemId: string }) => {
    return (
        <>
            <Link 
                className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}
                href={`/dashboard/${itemId}`}
            >
                    Edit
            </Link>
            <Link 
                className={cn(buttonVariants({ variant: 'primaryOutlined', size: 'sm' }))}
                href={`/dashboard/${itemId}`}
            >
                Quick View
            </Link>
        </>
    )
}