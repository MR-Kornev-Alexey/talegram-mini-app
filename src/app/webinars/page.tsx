"use client"
import PageContainer from "@/components/PageContainer";
import Webinars from "@/components/Webinars";

export default function HomePage() {

  return (
      <PageContainer title='Вебинары' description='Вебинары на канале "Материнство"'>
            <Webinars/>
      </PageContainer>
  );
}