import { ReactNode } from 'react';
import { SectionContainer, SectionHeadliner } from '../../styles/Section';

type SectionProps = {
  sectionTitle: string;
  children: ReactNode;
};

const Section = ({ sectionTitle, children }: SectionProps) => {
  return (
    <SectionContainer>
      <SectionHeadliner>{sectionTitle}</SectionHeadliner>
      {children}
    </SectionContainer>
  );
};

export default Section;
