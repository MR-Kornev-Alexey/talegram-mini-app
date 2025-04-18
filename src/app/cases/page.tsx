"use client"
import Cases from "@/components/Cases";
import PageContainer from "@/components/PageContainer";


export default function HomePage() {

  return (
      <PageContainer title='Разборы' description='Разборы на канале "Материнство"'>
            <Cases/>
      </PageContainer>
  );
}