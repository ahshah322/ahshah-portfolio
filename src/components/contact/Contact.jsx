import React from 'react'
import Title from '../layouts/Title';
import { ContactLeft } from './ContactLeft';
import { ContactRight } from './ContactRight';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 xl:py-16 border-b-gray-300 border-b-[1px] dark:border-b-gray-600"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="LET'S GET IN TOUCH" des="Contact" />
      </div>
      <div className="w-full h-auto flex flex-col gap-10 lg:flex-row justify-between">
        <ContactLeft />
        <ContactRight />
      </div>
    </section>
  );
}

export default Contact