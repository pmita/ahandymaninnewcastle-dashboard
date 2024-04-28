// NEXT
import Link from "next/link";
// COMPONENTS
import { 
  Banner,
  BannerDescription, 
  BannerFooter, 
  BannerHeader, 
  BannerTitle, 
  bannerVariants
} from "@/components/banner";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DrillAndWrenchSVG, PaintBrushSVG, TillingSVG } from "@/components/SVGs";
import { FAQ } from "./_components/faq";
// CONFIG
import { sellingPoints } from "@/config/selling-points";
// UTILS
import { cn } from "@/utils/helpers";

export default function Home() {
  return (
    <main className="container  px-5 pt-5">
      <Banner className={cn(bannerVariants({ variant: "center", size: "threeQuarters", className: "flex-col bg-alternate rounded-[25px]" }))}>
        <BannerHeader className="text-center max-w-[350px] sm:max-w-[600px]">
          <BannerTitle 
            className="text-2xl font-poppins font-bold text-secondary"
          >
            We paint, we build, we fix all your problems
          </BannerTitle>
          <BannerDescription className="text-md font-roboto font-bold text-secondary ">Affordable solutions to common problems, with a unique customer experience for everyday households</BannerDescription>
        </BannerHeader>        
        <BannerFooter className="text-center text-secondary gap-5">
          <Link 
            href="/contact"
            className={cn(buttonVariants({ variant: "alternate", size: "lg" }))}
          >
            Get in touch
          </Link>
          <Link 
            href="/projects"
            className={cn(buttonVariants({ variant: "alternateOutlined", size: "lg" }))}
          >
            Our work
          </Link>
        </BannerFooter>
      </Banner>

      <section className={cn(bannerVariants({ variant: "center", size: "half", className: "flex-col items-stretch gap-10 pt-10 sm:pt-25" }))}>
        <h2 className="font-font font-poppins text-xl text-primary text-center">Our Expertise</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,300px))] auto-rows-[420px] gap-8 mx-0 my-4 p-4 justify-center">
          <Card className={cn("border-solid border-primary border-[0.3rem]")}>
            <CardHeader>
              <PaintBrushSVG width={48} height={48} fill="black"/>
              <CardTitle className="text-lg text-primary font-bold font-poppins">{sellingPoints[0].title}</CardTitle>
              <CardDescription className="text-primary font-roboto">
                {sellingPoints[0].description}
              </CardDescription>
            </ CardHeader>
          </Card>
          <Card className={cn("border-solid border-primary border-[0.3rem]")}>
            <CardHeader>
              <TillingSVG width={48} height={48} fill="black"/>
              <CardTitle className="text-lg text-primary font-bold font-poppins">{sellingPoints[1].title}</CardTitle>
              <CardDescription className="text-primary font-roboto">
              {sellingPoints[1].description}
              </CardDescription>
            </ CardHeader>
          </Card>
          <Card className={cn("border-solid border-primary border-[0.3rem]")}>
            <CardHeader>
              <DrillAndWrenchSVG width={48} height={48} fill="black"/>
              <CardTitle className="text-lg text-primary font-bold font-poppins">{sellingPoints[2].title}</CardTitle>
              <CardDescription className="text-primary font-roboto">
              {sellingPoints[2].description}
              </CardDescription>
            </ CardHeader>
          </Card>
        </div>
      </section>
      
      <section className={cn(bannerVariants({ variant: "center", size: "full", className: "flex-col items-stretch gap-2.5 py-5" }))}>
        <h2 className="font-font font-poppins text-xl text-alternate">FAQs</h2>
        <FAQ />
      </section>
    </main>
  );
}
