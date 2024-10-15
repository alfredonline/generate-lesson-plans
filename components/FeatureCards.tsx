"use client";
import { motion } from 'framer-motion'
import { BookOpen, Clock, Target } from 'lucide-react'

const FeatureCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {[
        { icon: BookOpen, title: "Diverse Topics", description: "Choose from a wide range of subjects" },
        { icon: Clock, title: "Flexible Duration", description: "Set the perfect length for your lesson" },
        { icon: Target, title: "Clear Objectives", description: "Define specific goals for each lesson" }
      ].map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <item.icon className="w-12 h-12 text-indigo-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </motion.div>
  )
}

export default FeatureCards