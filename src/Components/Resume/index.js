import React from 'react';
import avatar from '../../Avatar'
import CV from 'react-cv'
const Resume = () => {
  
  return (
    <CV
    personalData={{
      name: 'Royden Semedo ',
      title: 'Junior Full Stack Developer',
      image: avatar,
      contacts: [
        { type: 'email', value: 'roydensemedo@yahoo.ca' },
        { type: 'phone', value: '6477933518' },
        { type: 'location', value: 'Mississauga' },
        { type: 'github', value: 'github.com/rsmdo' }
    ]}}
    sections= {[{
      type: 'text',
      title: 'Career Profile',
      content: 'When I was child, I always want to be a developer.',
      icon: 'usertie'
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      icon: 'archive',
      items: [
        {
          title: 'Tax Intern ',
          company: 'Perel & Sheldon LLP ',
          description: 'Prepared Tax returns for clients',
          datesBetween: '2020.10 - 2021.10',
        },
        {
          title: 'Mcdonalds Crew',
          company: 'Mcdonalds',
          description: 'Manage customer orders and prepare customer meal',
          datesBetween: '2018.06 - present'
        }
      ]
    },
    {
      type: 'projects-list',
      title: 'Projects',
      icon: 'tasks',
      groups: [
        {
          sectionHeader: 'Company Name',
          description: 'Optional',
          items: [
            { title: 'Population Density Checker', projectUrl: 'https://project01team10.github.io/population-density-checker/', description: 'A website that uses server side api to find population density in certian areas',  },
            { title: 'Re-Imagined System', projectUrl: 'https://reimagined-system.herokuapp.com', description: 'This is a inventory management system with security, and a full backend system. User can sign-in and add inventory and be provided with a interactive UI' },
          ]
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Education',
      description: '',
      icon: 'comments',
      items: [
        {
          title: 'Bachelor of Commerce Specialization in Finance and Economics',
          description: 'University of Toronto ', 
        },

      ]
    },
    {
      type: 'tag-list',
      title: 'Skills Proficiency',
      icon: 'rocket',
      items: ['React', 'Javascript', 'CSS', 'SQL', 'Mongo', 'Handlebars']
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: ['Sports', 'Gaming']
    }

  ]}
    branding={false} // or false to hide it.
  />
);
};

export default Resume;