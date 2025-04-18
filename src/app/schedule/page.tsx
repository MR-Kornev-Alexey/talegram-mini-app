"use client"
import PageContainer from "@/components/PageContainer";
import Schedule from "@/components/Schedule";

export default function HomePage() {

  return (
      <PageContainer title='Расписание' description='Расписание на канале "Материнство"'>
            <Schedule/>
      </PageContainer>
  );
}