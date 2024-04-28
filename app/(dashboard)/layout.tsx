// NEXT
import Link from "next/link";
// COMPONENTS
import { AuthCheck } from "@/components/auth-check";
import { SideMenu } from "./_components/side-menu";
import { buttonVariants } from "@/components/ui/button";
// UTILS
import { cn } from "@/utils/helpers";

export default function DashboardLayout({
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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="min-h-[100dvh] rounded-lg bg-gray-200">
        <SideMenu />
      </div>
      <div className="min-h-[100dvh] rounded-lg bg-gray-200 lg:col-span-2 grid place-items-center">
        {children}
      </div>
    </div>
    </AuthCheck>
  );
}
