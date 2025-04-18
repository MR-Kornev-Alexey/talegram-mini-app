"use client"
import PageContainer from "@/components/PageContainer";
import Hero from "@/components/Hero";
import MainButtons from "@/components/MainButtons";

export default function HomePage() {

  return (
      <PageContainer title='Навигация' description='Навигатор по каналу "Материнство"'>
            <Hero/>
            <MainButtons />
      </PageContainer>
  );
}