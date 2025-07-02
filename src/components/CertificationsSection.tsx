import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "https://td-portal-cdn.tutorialsdojo.com/wp-content/uploads/2021/06/AWS-Certified-Cloud-Practitioner-Essentials-CLF-C01-Exam-Course-Training-2022.png",
    description: "Comprehensive understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    link: "https://www.coursera.org/account/accomplishments/certificate/I7LAFRCPF21C"
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "2025",
    image: "https://i2.wp.com/build5nines.com/wp-content/uploads/2019/03/Microsoft_Certified_Azure_Administrator_Associate_Featured_Image_2.png",
    description: "Expertise in managing Azure cloud environments, including resource deployment, identity management, and workload monitoring for optimized performance and security.",
    link: "https://media.licdn.com/dms/image/v2/D5622AQEYi228l34Brw/feedshare-shrink_2048_1536/B56ZX8lMnAGcAs-/0/1743699366192?e=1748476800&v=beta&t=qssjR9FLeYjtVXbWzn96Ut70wzqnm15cntirWWaUiYg"
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "iamneo",
    date: "2024",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Advanced problem-solving techniques and optimization strategies in algorithmic programming.",
    link: "#"
  },
 
];

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Professional certifications and achievements that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-indigo-500 mr-2" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  View Certificate
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;