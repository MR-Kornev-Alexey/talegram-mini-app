"use client"
import PageContainer from "@/components/PageContainer";
import LifeHacks from "@/components/LifeHacks";


export default function HomePage() {

  return (
      <PageContainer title='Лайфхаки' description='Лайфхаки на канале "Материнство"'>
            <LifeHacks/>
      </PageContainer>
  );
}