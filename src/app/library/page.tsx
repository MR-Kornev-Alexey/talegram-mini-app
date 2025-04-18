"use client"
import PageContainer from "@/components/PageContainer";
import Library from "@/components/Library";

export default function HomePage() {

  return (
      <PageContainer title='Библиотека' description='Библиотека на канале "Материнство"'>
            <Library/>
      </PageContainer>
  );
}