
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  History, 
  Eye, 
  Users, 
  Award, 
  BookOpen, 
  Wrench, 
  Car, 
  Monitor,
  GraduationCap,
  ChevronRight,
  Heart,
  Target,
  Sparkles,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle
} from 'lucide-react';

const AboutPage = () => {
  const facilities = [
    {
      icon: Monitor,
      title: 'Computer Labs',
      description: 'Modern computer labs equipped with high-speed internet and industry-standard software for hands-on learning.',
      image: '/images/computer-lab.jpg'
    },
    {
      icon: Car,
      title: 'Driving Range',
      description: 'Spacious practice area with various road scenarios and modern training vehicles for real-world experience.',
      image: '/images/driving-range.jpg'
    },
    {
      icon: Wrench,
      title: 'Technical Workshop',
      description: 'Fully equipped workshop with modern tools and equipment for practical technical training.',
      image: '/images/workshop.jpg'
    },
    {
      icon: BookOpen,
      title: 'Learning Resource Center',
      description: 'Well-stocked library with textbooks, digital resources, and quiet study areas.',
      image: '/images/library.jpg'
    }
  ];

  const coreValues = [
    { icon: Heart, title: 'Excellence', description: 'Striving for the highest standards in everything we do' },
    { icon: Target, title: 'Integrity', description: 'Upholding honesty and ethical practices in all our dealings' },
    { icon: Users, title: 'Student-Centered', description: 'Putting our students\' needs and success first' },
    { icon: Sparkles, title: 'Innovation', description: 'Embracing new ideas and modern teaching methods' },
  ];

  const milestones = [
    { year: '2010', title: 'College Founded', description: 'Started with 20 students and 2 instructors' },
    { year: '2012', title: 'NTSA Accreditation', description: 'Became a licensed driving school' },
    { year: '2015', title: 'TVETA Recognition', description: 'Accredited technical training institution' },
    { year: '2018', title: 'New Campus', description: 'Expanded to current location with modern facilities' },
    { year: '2020', title: 'Digital Learning', description: 'Introduced online learning platforms' },
    { year: '2024', title: '5000+ Graduates', description: 'Celebrating our growing alumni community' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - More natural and welcoming */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-orange-600/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">About FIBS College</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Learn about our history, mission, and commitment to excellence
          </p>
        </motion.div>
      </section>


      {/* Our Story - More personal and engaging */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <History className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                FIBS started with a simple idea in 2010: provide quality education that actually prepares 
                students for the real world. What began as a small driving school with 20 students has 
                grown into a comprehensive technical college serving hundreds of students every year.
              </p>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We believe education should be practical, accessible, and relevant. That's why our programs 
                are designed with input from industry professionals, and our instructors bring real-world 
                experience to every class.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, we're proud to have trained over 5,000 graduates who are now making their mark in 
                various industries across Kenya and beyond.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>KNEC Accredited</span>
                <span className="mx-2">•</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>TVETA Recognized</span>
                <span className="mx-2">•</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>NTSA Licensed</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                    <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                      <GraduationCap className="h-16 w-16 text-red-600" />
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <Users className="h-16 w-16 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                      <Car className="h-16 w-16 text-green-600" />
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <Award className="h-16 w-16 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Clean and impactful */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be Kenya's most trusted institution for technical and driving education, known for 
                producing skilled, confident, and employable graduates who make meaningful contributions 
                to their communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide accessible, quality education that combines theoretical knowledge with practical 
                skills, preparing students for successful careers and lifelong learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-lg text-gray-600">Our core values shape everything we do</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our growth</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-red-600 mb-2">{milestone.year}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{milestone.title}</h4>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities - More visual */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-gray-600">Modern spaces designed for effective learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <facility.icon className="h-12 w-12 text-red-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">A Word from Our Director</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "Every student who walks through our doors has a dream. Our job is to give them the 
                    skills, confidence, and support they need to achieve it. I've watched thousands of 
                    students transform from beginners to professionals, and that's what keeps us motivated 
                    every day."
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. John Kamau</p>
                    <p className="text-sm text-gray-500">Director & Principal</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;