import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Shield, AlertCircle, ExternalLink, Globe, Clock, 
  Lock, FileText, Server, User, Code, Link, RefreshCcw, 
  Copyright, Mail 
} from 'lucide-react';

// Custom Section interface for type safety
interface Section {
  id: string;
  title: string;
  icon: JSX.Element;
  content: string;
}

const TermsOfService = () => {
  // State management for interactions
  const [expandedSection, setExpandedSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState('');

  // Define all terms sections with their content
  const sections: Section[] = [
    {
      id: 'liability',
      title: 'Liability & Warranties',
      icon: <Shield className="w-5 h-5" />,
      content: `No Warranty or Guarantee: We provide this service 'as-is' and without any warranty or guarantee. While we make every effort to ensure the functionality, security, and reliability of our site, we do not make any representations or warranties regarding the accuracy, completeness, or suitability of the information and materials found or offered on this website.

      Exclusion of Liability: In no event shall we be liable for any direct, indirect, incidental, consequential, special, or exemplary damages.
      
      User Responsibility: You acknowledge and agree that your use of this service is at your own risk.`
    },
    {
      id: 'ai-content',
      title: 'AI-Generated Content',
      icon: <Code className="w-5 h-5" />,
      content: `No Control Over AI Output: We utilize AI technology to generate lesson plans based on user inputs. While we strive to provide accurate and appropriate content, we have no control over the specific output of the AI-generated lesson plans.

      Prohibited Content: You agree not to use our service to generate any content that is inappropriate for educational purposes.`
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: <Lock className="w-5 h-5" />,
      content: `We implement reasonable security measures to protect the integrity of our platform. However, you acknowledge that no online service can be completely secure. We do not assume responsibility for any unauthorized access, data breaches, or other security incidents that may occur.`
    },
    {
      id: 'account',
      title: 'Account Management',
      icon: <User className="w-5 h-5" />,
      content: `Account Management: We reserve the right to manage your account at our discretion. This includes the right to delete, suspend, or lock your account and associated data without prior notice.

      Account Security: It is your responsibility to maintain the security of your account credentials.`
    },
    {
      id: 'external',
      title: 'External Links',
      icon: <Link className="w-5 h-5" />,
      content: `Our service may contain links to external websites or services that are not owned or controlled by us. We are not responsible for the content, privacy policies, or practices of any third-party websites.`
    },
    {
      id: 'updates',
      title: 'Updates & Changes',
      icon: <RefreshCcw className="w-5 h-5" />,
      content: `We reserve the right to update these terms of service at any time. Updates may be made to reflect changes in our services, legal requirements, or other considerations.`
    }
  ];

  // Custom section component with modern styling and animations
  const Section = ({ section }: { section: Section }) => {
    const isExpanded = expandedSection === section.id;
    const isHovered = hoveredSection === section.id;

    return (
      <div 
        className="relative group"
        onMouseEnter={() => setHoveredSection(section.id)}
        onMouseLeave={() => setHoveredSection('')}
        onClick={() => setExpandedSection(isExpanded ? '' : section.id)}
      >
        {/* Gradient background effect on hover */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-blue-50/50 via-violet-50/50 to-purple-50/50
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        `} />
        
        <div className="relative border-b border-gray-100 last:border-0">
          {/* Section header with icon and title */}
          <div className="flex items-center justify-between p-8 cursor-pointer">
            <div className="flex items-center gap-6">
              {/* Animated icon container */}
              <div className={`
                p-3 rounded-2xl transition-all duration-500
                ${isHovered ? 'bg-gradient-to-r from-blue-100 to-violet-100' : 'bg-gray-50'}
                transform ${isHovered ? 'scale-110' : 'scale-100'}
              `}>
                {section.icon}
              </div>
              {/* Gradient text title */}
              <h2 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                {section.title}
              </h2>
            </div>
            {/* Animated expand/collapse indicator */}
            <div className={`
              w-6 h-6 flex items-center justify-center
              transition-transform duration-500
              ${isExpanded ? 'rotate-180' : ''}
            `}>
              <div className={`
                w-1 h-1 rounded-full
                ${isHovered ? 'bg-violet-500' : 'bg-gray-400'}
              `} />
            </div>
          </div>
          
          {/* Expandable content section */}
          <div className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
          `}>
            <div className="px-8 pb-8 text-gray-600 leading-relaxed">
              {section.content}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      {/* Main card with glass morphism effect */}
      <Card className="
        backdrop-blur-xl bg-white/90 shadow-2xl border-0 overflow-hidden
        rounded-3xl relative group
      ">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/20 via-transparent to-violet-50/20 opacity-50" />
        
        {/* Header section with modern styling */}
        <CardHeader className="text-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-violet-50/50 to-purple-50/50 opacity-50" />
          
          <div className="relative">
            {/* Animated logo icon */}
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-3xl bg-gradient-to-tr from-blue-100 via-violet-50 to-purple-100 transform transition-transform hover:scale-110 duration-500">
                <FileText className="w-10 h-10 text-gray-900" />
              </div>
            </div>
            
            {/* Title with gradient text */}
            <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600">
              Terms of Service
            </h1>
            
            {/* Last modified date */}
            <p className="text-sm text-gray-500">
              Last Modified: {new Date().toLocaleDateString()}
            </p>
          </div>
        </CardHeader>
        
        {/* Content sections */}
        <CardContent className="p-0 relative">
          {sections.map(section => (
            <Section key={section.id} section={section} />
          ))}
          
          {/* Footer section with modern styling */}
          <div className="p-8 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-100/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              {/* Copyright info */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-100/50 to-violet-100/50">
                  <Copyright className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-600">
                  &copy; {new Date().getFullYear()} Generate Lesson Plans
                </span>
              </div>
              
              {/* Contact link */}



              <a 
                href="mailto:hello@alfiewebdev.com"
                className="flex items-center gap-3 group/link"
              >
                <div className="p-2 rounded-xl bg-gradient-to-r from-violet-100/50 to-purple-100/50 group-hover/link:from-blue-200 group-hover/link:to-violet-200 transition-all duration-300">
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-600 group-hover/link:text-gray-900 transition-colors">
                  Contact Us
                </span>
                <ExternalLink className="w-3 h-3 text-gray-400 group-hover/link:text-gray-900 transition-colors" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


export default TermsOfService;



//To make contact link dynamic 
//Add a contactConfig object that contains all contact methods and their details          
//then create a reusable ContactLink component that handles


//consider to update these changes 


//Hover states
//Different icon types
//External vs internal links
//Proper link attributes for security
//Visual feedback on interaction


//you also need to hence Enhanced the display with
//Two-line contact information (label + value)
//Responsive layout (stacks on mobile, row on desktop)
//Multiple contact methods (email, phone, chat)



//then Add security attributes

//target="_blank" for external links
//rel="noopener noreferrer" for security
//Proper href formatting for different contact types (mailto:, tel:, etc.)

