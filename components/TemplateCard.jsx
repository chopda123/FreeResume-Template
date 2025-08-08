// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import StarRating from './StarRating';

// export default function TemplateCard({ template, onPreview }) {
//   const imageUrl = template.mainImage?.asset?.url;
//   const altText = template.mainImage?.alt || template.title || 'Template preview';

//   return (
//     <motion.div 
//       className="h-[540px]"
//       whileHover={{ y: -10 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-premium-cream">
//         <div className="absolute top-4 right-4 z-10">
//           <span className="bg-premium-gold text-premium-navy text-xs font-bold px-3 py-1 rounded-full">
//             PREMIUM
//           </span>
//         </div>
        
//         <div 
//           className="relative h-80 bg-gray-100 cursor-pointer overflow-hidden"
//           onClick={onPreview}
//         >
//           {imageUrl ? (
//             <Image
//               src={imageUrl}
//               alt={altText}
//               fill
//               className="object-cover object-top transition-transform duration-500 hover:scale-105"
//               unoptimized
//               priority
//             />
//           ) : (
//             <div className="w-full h-full flex flex-col items-center justify-center p-4">
//               <div className="bg-premium-gold/10 border-2 border-dashed border-premium-gold/30 rounded-xl w-16 h-16 flex items-center justify-center mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-premium-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <p className="text-premium-charcoal/70 text-center text-sm">No preview available</p>
//             </div>
//           )}
//         </div>

//         <div className="p-4 md:p-6 h-half flex flex-col">
//           <div className="mb-3 md:mb-4">
//             <h3 className="text-lg md:text-xl font-bold text-premium-navy truncate">{template.title || "Premium Template"}</h3>
//             <div className="flex items-center mt-2">
//               <span className="text-premium-gold font-medium text-xs md:text-sm mr-2 md:mr-3">
//                 {template.category || "Professional"}
//               </span>
//               <StarRating rating={template.rating} />
//             </div>
//           </div>
          
//           <p className="text-premium-charcoal/80 text-sm md:text-base mb-4 md:mb-6 flex-grow">
//             {template.description || "Professionally designed resume template to showcase your skills and experience."}
//           </p>
          
//           <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
//             <button 
//               onClick={onPreview}
//               className="text-premium-teal hover:text-premium-navy font-medium flex items-center text-sm md:text-base"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//               </svg>
//               Preview
//             </button>
//             <a 
//               href={template.canvaLink || "#"} 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-premium-gold hover:bg-premium-gold/90 text-premium-navy px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium transition-colors flex items-center justify-center text-sm md:text-base"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//               </svg>
//               Edit in Canva
//             </a>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// ///////////////////////////////////////////////////////////// V1


// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import StarRating from './StarRating';

// export default function TemplateCard({ template, onPreview }) {
//   const imageUrl = template.mainImage?.asset?.url;
//   const altText = template.mainImage?.alt || template.title || 'Template preview';

//   return (
//     <motion.div 
//       className="h-[540px]" // fixed total height
//       whileHover={{ y: -10 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-premium-cream relative">
//         <div className="absolute top-4 right-4 z-10">
//           <span className="bg-premium-gold text-premium-navy text-xs font-bold px-3 py-1 rounded-full">
//             PREMIUM
//           </span>
//         </div>

//         {/* Top: Image Container */}
//         <div 
//           className="relative h-80 bg-gray-100 cursor-pointer overflow-hidden"
//           onClick={onPreview}
//         >
//           {imageUrl ? (
//             <Image
//               src={imageUrl}
//               alt={altText}
//               fill
//               className="object-cover object-top transition-transform duration-500 hover:scale-105"
//               unoptimized
//               priority
//             />
//           ) : (
//             <div className="w-full h-full flex flex-col items-center justify-center p-4">
//               <div className="bg-premium-gold/10 border-2 border-dashed border-premium-gold/30 rounded-xl w-16 h-16 flex items-center justify-center mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-premium-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <p className="text-premium-charcoal/70 text-center text-sm">No preview available</p>
//             </div>
//           )}
//         </div>

//         {/* Bottom: Info Section (Fixed Half Height, Scroll Hidden) */}
//         <div className="p-4 md:p-6 h-[50%] overflow-hidden flex flex-col justify-between">
//           <div className="mb-3 md:mb-4">
//             <h3 className="text-lg md:text-xl font-bold text-premium-navy truncate">
//               {template.title || "Premium Template"}
//             </h3>
//             <div className="flex items-center mt-2">
//               <span className="text-premium-gold font-medium text-xs md:text-sm mr-2 md:mr-3">
//                 {template.category || "Professional"}
//               </span>
//               <StarRating rating={template.rating} />
//             </div>
//           </div>

//           <p className="text-premium-charcoal/80 text-sm md:text-base mb-4 md:mb-6 overflow-hidden text-ellipsis line-clamp-3">
//             {template.description || "Professionally designed resume template to showcase your skills and experience."}
//           </p>

//           <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3 mt-auto pt-2">
//             <button 
//               onClick={onPreview}
//               className="text-premium-teal hover:text-premium-navy font-medium flex items-center text-sm md:text-base"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//               </svg>
//               Preview
//             </button>
//             <a 
//               href={template.canvaLink || "#"} 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-premium-gold hover:bg-premium-gold/90 text-premium-navy px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium transition-colors flex items-center justify-center text-sm md:text-base"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//               </svg>
//               Edit in Canva
//             </a>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


// /////////////////////////////////////////////// V2

import Image from 'next/image';
import { motion } from 'framer-motion';
import StarRating from './StarRating';

export default function TemplateCard({ template, onPreview }) {
  const imageUrl = template.mainImage?.asset?.url;
  const altText = template.mainImage?.alt || template.title || 'Template preview';

  return (
    <motion.div 
      className="w-full h-[420px] sm:h-[480px] md:h-[540px]"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-premium-cream relative">
        
        {/* Premium Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-premium-gold text-premium-navy text-xs font-bold px-3 py-1 rounded-full">
            PREMIUM
          </span>
        </div>

        {/* Image Section */}
        <div 
          className="relative h-[78%] sm:h-[82%] md:h-[85%] bg-gray-100 cursor-pointer overflow-hidden"
          onClick={onPreview}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={altText}
              fill
              unoptimized
              priority
              // Always allow zoom effect on all devices
              className="object-cover object-top transition-transform duration-500 hover:scale-105 active:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4">
              <div className="bg-premium-gold/10 border-2 border-dashed border-premium-gold/30 rounded-xl w-16 h-16 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-premium-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-premium-charcoal/70 text-center text-sm">No preview available</p>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="p-3 md:p-4 h-[22%] sm:h-[18%] md:h-[15%] flex justify-between items-center gap-3 min-h-[68px]">
          
          {/* Left: Title + Category + Rating */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm md:text-lg font-bold text-premium-navy truncate">
              {template.title || "Premium Template"}
            </h3>
            <div className="flex items-center mt-1 space-x-1 sm:space-x-2">
              <span className="text-premium-gold font-medium text-[10px] sm:text-xs md:text-sm truncate max-w-[60px] sm:max-w-none">
                {template.category || "Professional"}
              </span>
              <div className="transform scale-75 sm:scale-90">
                <StarRating rating={template.rating} />
              </div>
            </div>
          </div>

          {/* Right: Buttons (stacked vertically) */}
          <div className="flex flex-col items-end gap-1 sm:gap-2 flex-shrink-0">
            <button 
              onClick={onPreview}
              aria-label={`Preview ${template.title || 'template'}`}
              className="flex items-center justify-center text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 py-1 sm:py-1.5 border border-premium-teal rounded-full font-medium hover:bg-premium-teal/5 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview
            </button>

            <a 
              href={template.canvaLink || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-premium-gold hover:bg-premium-gold/90 text-premium-navy px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium text-[10px] sm:text-xs md:text-sm transition-colors"
            >
              Edit in Canva
            </a>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
