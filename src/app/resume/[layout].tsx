import * as React from 'react';
import ClassicLayout from '@/layouts/resume/ClassicLayout';
import MinimalLayout from '@/layouts/resume/MinimalLayout';
import ModernLayout from '@/layouts/resume/ModernLayout';
import { notFound } from 'next/navigation';

const layoutMap: Record<string, React.FC> = {
  classic: ClassicLayout,
  minimal: MinimalLayout,
  modern: ModernLayout,
};

export default function ResumeLayoutPage({ params }: { params: { layout: string } }) {
  console.log('Selected Layout:');

  const LayoutComponent = layoutMap[params.layout?.toLowerCase()];
  
  if (!LayoutComponent) return notFound();
  return <LayoutComponent />;
}
