"use client"
// Make sure this remains a client component
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Shield, Lock, Mail, ExternalLink, Globe, Clock, AlertCircle, ChevronDown, Eye, Key, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState('');

  const sections = [
    {
      id: 'information',
      title: 'Information Collection',
      icon: <Eye className="w-5 h-5" />,
      content: `Personal Information: When you sign up, we collect your name and email address. This information comes entirely from your input during the registration process. We do not obtain this information from any other sources. We use this information for personalization and any essential communication with you. We never sell your data.

      Voluntary Correspondence: We retain questions or assistance requests, including your email, for future reference.

      Marketing Communications: Your email is processed for direct marketing and support. Unsubscribe anytime, and we promptly delete your information upon request.`
    },
    {
      id: 'security',
      title: 'Security Protocol',
      icon: <Key className="w-5 h-5" />,
      content: 'We use Kinde to manage user authentication. We do not store any passwords on our servers. Kinde provides a secure authentication system that helps protect your account information.'
    },
    {
      id: 'data',
      title: 'Data Management',
      icon: <Globe className="w-5 h-5" />,
      content: 'Deleted data may remain in our database while your account is active. When you delete your account, all of your data is removed from our database. Retrieving data from backups is impractical. You can delete your account at any time by contacting us.'
    },
    {
      id: 'gdpr',
      title: 'GDPR Compliance',
      icon: <Bell className="w-5 h-5" />,
      content: 'You have the right to access, rectification, erasure, restrict processing, object to processing, and data portability.'
    }
  ];

  const Section = ({ section }) => {
    const isExpanded = expandedSection === section.id;
    const isHovered = hoveredSection === section.id;

    return (
      <div 
        className="relative group"
        onMouseEnter={() => setHoveredSection(section.id)}
        onMouseLeave={() => setHoveredSection('')}
        onClick={() => setExpandedSection(isExpanded ? '' : section.id)}
      >
        <div className={`
          absolute inset-0 bg-gradient-to-r from-violet-50/50 via-fuchsia-50/50 to-cyan-50/50
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        `} />
        
        <div className="relative border-b border-gray-100 last:border-0">
          <div className="flex items-center justify-between p-8 cursor-pointer">
            <div className="flex items-center gap-6">
              <div className={`
                p-3 rounded-2xl transition-all duration-500
                ${isHovered ? 'bg-gradient-to-r from-violet-100 to-fuchsia-100' : 'bg-gray-50'}
                transform ${isHovered ? 'scale-110' : 'scale-100'}
              `}>
                {section.icon}
              </div>
              <h2 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                {section.title}
              </h2>
            </div>
            <ChevronDown 
              className={`w-5 h-5 transition-all duration-500 ${
                isExpanded ? 'rotate-180 text-violet-500' : ''
              } ${isHovered ? 'text-fuchsia-500' : 'text-gray-400'}`}
            />
          </div>
          
          <div className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
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
      <Card className="
        backdrop-blur-xl bg-white/90 shadow-2xl border-0 overflow-hidden
        rounded-3xl relative group
      ">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-50/20 via-transparent to-cyan-50/20 opacity-50" />
        
        <CardHeader className="text-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 via-fuchsia-50/50 to-cyan-50/50 opacity-50" />
          
          <div className="relative">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-3xl bg-gradient-to-tr from-violet-100 via-fuchsia-50 to-cyan-100 transform transition-transform hover:scale-110 duration-500">
                <Shield className="w-10 h-10 text-gray-900" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600">
              Privacy Policy
            </h1>
            
            <p className="text-sm text-gray-500">
              Last Modified: {new Date().toLocaleDateString()}
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 relative">
          {sections.map(section => (
            <Section key={section.id} section={section} />
          ))}
          
          <div className="p-8 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-100/50">
            <div className="flex items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-violet-100/50 to-fuchsia-100/50">
                  <Clock className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-600">&copy; {new Date().getFullYear()} Generate Lesson Plans</span>
              </div>
              
              <a 
                href="mailto:hello@alfiewebdev.com"
                className="flex items-center gap-3 group/link"
              >
                <div className="p-2 rounded-xl bg-gradient-to-r from-fuchsia-100/50 to-cyan-100/50 group-hover/link:from-violet-200 group-hover/link:to-fuchsia-200 transition-all duration-300">
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-600 group-hover/link:text-gray-900 transition-colors">Contact</span>
                <ExternalLink className="w-3 h-3 text-gray-400 group-hover/link:text-gray-900 transition-colors" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
