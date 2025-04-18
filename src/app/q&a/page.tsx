"use client"
import PageContainer from "@/components/PageContainer";
import FAQ from "@/components/FAQ";



export default function HomePage() {

  return (
      <PageContainer title='Вопросы-ответы' description='Вопросы-ответы на канале "Материнство"'>
            <FAQ/>
      </PageContainer>
  );
}