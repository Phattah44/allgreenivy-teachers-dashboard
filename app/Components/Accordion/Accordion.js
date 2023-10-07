import React from 'react';
import AccordionUi from './AccordionUi';

const Accordion = () => {
  const accordionData = [
    {
      title: 'Who are we?',
      content: `Allgreen Ivy is an online platform that connects instructors and students in the agriculture industry to learn and share knowledge through online courses, ebooks and training programs.`,
    },
    {
      title: 'Who can become an instructor on the Allgreen Ivy',
      content: `Anyone with expertise in agriculture-related topics can become an instructor on the platform.`,
    },
    {
      title: 'What are the benefits of becoming an instructor on the platform?',
      content: `Instructors can benefit from the platform by reaching a wider audience, increasing their visibility and credibility in the industry, and generating additional income through courses and ebooks sales.`,
    },
    {
      title:
        'How do we support instructors in creating and delivering their courses?',
      content: `Allgreenivy provides instructors with tools and resources to create and publish their courses and ebooks, such as course creation templates, multimedia features, and easy-to-use multimedia publishing tools.`,
    },
    {
      title:
        'What kind of support do we offer instructors for promoting their courses?',
      content: `The platform offers various promotional tools to instructors such as email marketing, social media integration, and featured course listing to help instructors reach their target audience and increase course and ebooks sales.
`,
    },
    {
      title: 'How does Allgreenivy handle payments for instructors?',
      content: `Instructors receive a percentage of the revenue generated from the sale of their courses and ebooks, which is automatically paid out to them through the platform's payment gateway.`,
    },
    {
      title: 'Do I get the URL to my courses and ebooks?',
      content: `The platform has a course and ebook review and quality control process in place to ensure that the courses offered on the platform meet certain quality standards and provide valuable learning experiences to students.`,
    },
  ];
  return (
    <div className='p-10 m-auto w-4/6'>
      <h1 className='text-[#414141] text-center text-xl'>FAQs</h1>
      <p className='text-[#717171] text-center text-xs'>
        You got questions? we have answers.
      </p>
      <div className='mt-7 divide-y-4'>
        {accordionData.map(({ title, content }) => (
          <AccordionUi title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
