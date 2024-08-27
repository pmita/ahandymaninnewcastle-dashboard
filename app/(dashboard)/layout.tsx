// NEXT
import Link from "next/link";
// COMPONENTS
import { AuthCheck } from "@/components/auth-check";
import { TopNavbar } from "../../components/top-navbar";
import { buttonVariants } from "@/components/ui/button";
// UTILS
import { cn } from "@/utils/helpers";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthCheck fallback={(
      <>
        <div className="min-h-[100dvh] flex flex-col justify-center items-center gap-5">
          <h1>Sign In</h1>
            <Link href="/signin" className={cn(buttonVariants({ variant: "alternateOutlined", size: "lg" }))}>Sign In</Link>
        </div>
      </>
    )}>
      <div className="container h-full w-full flex flex-col justify-start items-center">
        <TopNavbar />
        <div className="container min-h-[90dvh] rounded-lg bg-gray-200 lg:col-span-2 p-4 lg:p-8">
          {children}
        </div>
      </div>
    </AuthCheck>
  );
}
