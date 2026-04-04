// import React from 'react';
// import { Store, Users, Package, TrendingUp, Clock, MapPin } from 'lucide-react';


// const BuyzaarMartFranchiseModels = () => {
//   const models = [
//     {
//       name: 'FICO',
//       title: 'Franchise Invested Company Operated',
//       description: 'Franchisee provides capital investment for store setup and owns the outlet. Company manages all operations.',
//       features: [
//         'Franchisee Provides Capital Investment for store setup and owns the outlet.',
//         'Franchisee is responsible for billing, stocking, customer service and other in store operations as per the brand guidelines and SOPs, compliance is ensured by our team.',
//         'Franchisee is responsible for providing staffing, and store operational expenditure.',
//         'Franchisor is responsible for store location survey and approval, and timely setup and launch of the new store according to our brand elements and positioning. Including all the Interior and store assets\' setup.',
//         'Franchisor is responsible for training store staff (If any) and the store manager/franchise owner in the areas of store operation and management, in-store inventory management, customer service, sales, and billing using the system (software) provided by the franchisor.',
//         'Franchisor is responsible for timely delivering stock to the franchise at a fixed gross margin (18-20%) for the franchisee.',
//         'No freight charges applicable to the franchise on delivery.',
//         'Franchisor is responsible for handling backend operations such as managing inventory and supply chain, providing RTV/RTW service to the franchise in order to prevent its loss due to damage and expiry, conducting regular store surveys and audits to ensure compliance to our operating procedures and keep a check for pilferage, shrinkage, expiry and damage.',
//         'Franchisor is responsible for reviewing the store sale, the flow of inventory, implementing metrics like demand forecasting and customer sale trends to provide the optimal stock on the right time to prevent wastage.',
//         'Royalty: 3% after 6 months on target basis',
//         // '2% royalty on sales after the completion of 6 months; if and only if, the franchise reaches the in-store sales target.',
//         'Franchisor is responsible for BTL marketing activities, and promotional campaigns.',
//         '40-60 Ratio of Branded and Non-Branded products (D2C Brands)',
//       ],
//     },
//     {
//       name: 'FOFO',
//       title: 'Franchise Owned Franchise Operated',
//       description: 'Franchisee invests and operates the store independently.',
//       features: [
//         'Franchisee Provides Capital Investment for store setup and owns the outlet.',
//         'Franchisee is responsible for billing, stocking, customer service and other in store operations as per the brand guidelines and SOPs.',
//         'Franchisee is responsible for providing staffing, and other store operational expenditure.',
//         'Franchisor is responsible for store location survey and approval, and timely setup and launch of the new store according to our brand elements and positioning. Including all the Interior and store assets\' setup.',
//         'Franchisor is responsible for training store staff (If any) and the store manager/franchise owner in the areas of store operation and management, in-store inventory management, customer service, sales, and billing using the system (software) provided by the franchisor.',
//         'Franchisor is only responsible for providing the first stock to the franchise at the time of store launch at fixed gross margin (18-20%) for the franchisee. Only for the first time',
//         'Franchisee is responsible for communicating and dealing with vendors, managing purchase, negotiating margins, managing inventory, managing RTV/RTW to cut losses due to expiry and damage and keep a check for pilferage, shrinkage, expiry and damage.',
//         'Franchisee is responsible for reviewing the store sale, the flow of inventory, implementing metrics like demand forecasting and customer sale trends to provide the optimal stock on the right time to prevent wastage.',
//         'The Franchisor can help the franchisee set vendors and negotiate margin, if the franchisee requires so.',
//         'The franchisee can purchase stock from the franchisor if it wishes to, making the franchisor the franchisee\'s stock vendor.',
//         'In case the FOFO franchisee decides to purchase stock from the franchisor, the franchisor shall provide RTV/RTW to the franchisee.',
//         'In case the FOFO franchisee decides to purchase stock from the franchisor, the franchisee shall be liable to pay freight charges as applicable.',
//         '2% royalty',
//         '40-60 Ratio of Branded and Non-Branded products (D2C Brands)',
//       ],
//     },
//     {
//       name: 'FICO Premium',
//       title: 'Franchise Invested Company Operated (Premium)',
//       description: 'Premium store with superior ambience and exclusive product mix.',
//       features: [
//         'Franchisee Provides Capital Investment for store setup, store operational expenditure (Electricity, water) and owns the outlet.',
//         'Franchisor is responsible for billing, stocking, customer service and other in store operations as per the brand guidelines and SOPs.',
//         'Franchisor is responsible for providing staffing.',
//         'Franchisor is responsible for store location survey and approval, and timely setup and launch of the new store according to our brand elements and positioning. Including all the Interior and store assets\' setup.',
//         'Franchisor is responsible for training store staff (If any) and the store manager/franchise owner in the areas of store operation and management, in-store inventory management, customer service, sales, and billing using the system (software) provided by the franchisor.',
//         'Franchisor is responsible for timely delivering stock to the franchise at a fixed gross margin (18-20%) for the franchisee.',
//         'No freight charges applicable to the franchise on delivery.',
//         'Franchisor is responsible for handling backend operations such as managing inventory and supply chain, providing RTV/RTW service to the franchise in order to prevent its loss due to damage and expiry, conducting regular store surveys and audits to ensure compliance to our operating procedures and keep a check for pilferage, shrinkage, expiry and damage.',
//         'Franchisor is responsible for reviewing the store sale, the flow of inventory, implementing metrics like demand forecasting and customer sale trends to provide the optimal stock at the right time to prevent wastage.',
//         'No royalty on sales for the first 6 months',
//         'Royalty:  4% after 6 months on target basis',
//         'Franchisor is responsible for BTL marketing activities, and promotional campaigns.',
//         'Store well equipped (More assets)',
//         'Premium in store ambience/feel (Interior Design)',
//         '50-50 Ratio of Branded and Non-Branded products (D2C Brands)',
//       ],
//     },
//   ];

//   const storeFormats = [
//     {
//       name: 'MINI MART',
//       size: '600-1000 SQFT',
//       products: [
//         'Personal Care',
//         'Beverages',
//         'Grocery & Staples',
//         'Homecare and Hygiene',
//         'Stationery',
//         'Snacks and Biscuits',
//       ],
//     },
//     {
//       name: 'SUPER MART',
//       size: '1000-3000 SQFT',
//       products: [
//         'Personal Care',
//         'Beverages',
//         'Grocery & Staples',
//         'Homecare and Hygiene',
//         'Stationery',
//         'Snacks and Biscuits',
//         'Dairy Items',
//         'F & V',
//       ],
//     },
//     {
//       name: 'HYPER MART',
//       size: '3000-8000 SQFT',
//       products: [
//         'Personal Care',
//         'Beverages',
//         'Grocery & Staples',
//         'Homecare and Hygiene',
//         'Stationery',
//         'Snacks and Biscuits',
//         'Dairy Items',
//         'F & V',
//         'Gifts & Toys',
//         'Frozen Ready to Eat',
//       ],
//     },
//   ];

//   const comparisonTable = [
//     { feature: 'Investment by', fico: 'Franchisee', fofo: 'Franchisee', ficoPremium: 'Franchisee' },
//     { feature: 'Operations by', fico: 'Company', fofo: 'Franchisee', ficoPremium: 'Company' },
//     { feature: 'In-store Operations', fico: 'Company + Franchisee ', fofo: 'Franchisee', ficoPremium: 'Company' },
//     { feature: 'Staffing', fico: 'Franchisee', fofo: 'Franchisee', ficoPremium: 'Company' },
//     { feature: 'Initial Stock Supply', fico: 'Company', fofo: 'Company', ficoPremium: 'Company ' },
//     { feature: 'Ongoing Stock Sourcing', fico: 'Company', fofo: 'Franchisee or Company', ficoPremium: 'Company' },
//     { feature: 'Freight for Stock', fico: 'None', fofo: 'Franchisee (if from company)', ficoPremium: 'None' },
//     { feature: 'Royalty', fico: ' 3% after 6 months on target basis', fofo: '2% ', ficoPremium: '4% after 6 months on target basis' },
//     { feature: 'Marketing Support', fico: 'Yes (Company BTL)', fofo: 'Yes (Company)', ficoPremium: 'Yes (Company BTL)' },
//     { feature: 'Store Ambience', fico: 'Standard', fofo: 'Standard', ficoPremium: 'Premium' },
//     { feature: 'Product Mix', fico: '40-60 Branded/D2C', fofo: '40-60 Branded/D2C', ficoPremium: '50-50 Branded/D2C' },
//     { feature: 'Ideal For', fico: 'Semi-active Investors', fofo: 'Owner-operators', ficoPremium: 'Passive Investors' },
//     { feature: 'Margin', fico: '18-20 % Gross Margin', fofo: '18-20% gross margin (if stock purchased from company)', ficoPremium: '18-20 % Gross Margin' },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
    
//       <div className="container mx-auto max-w-6xl px-4 pt-32 pb-12">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
//             Franchise Models
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
//             Choose the perfect model for your investment and operational style.
//           </p>
//         </div>

//         {/* Models Section */}
//         <div className="space-y-12 mb-16">
//           {models.map((model, index) => (
//             <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
//               <div className="bg-red-800 text-white -mx-8 -mt-8 p-6 rounded-t-2xl mb-6">
//                 <h2 className="text-3xl font-bold text-center">
//                   {model.name}
//                 </h2>
//                 <p className="text-gray-200 text-center text-lg mt-2">{model.title}</p>
//               </div>
//               <p className="text-gray-800 mb-6 text-lg">{model.description}</p>
//               <ul className="space-y-3 text-gray-800">
//                 {model.features.map((feature, i) => (
//                   <li key={i} className="flex items-start space-x-3">
//                     <span className="text-black font-bold text-xl">•</span>
//                     <span className="text-base">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Expired/Damaged Goods Comic Section - Insert after FICO Premium */}
//         <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 mb-16 flex flex-col items-center">
//           <h2 className="text-3xl font-bold text-center mb-6 text-red-800">
//             Hassle-Free Inventory Assurance
//           </h2>
//           <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
//             Worry less about unsold, expired or damaged stock. With Buyzaar Mart&apos;s guarantee, we take back expired and damaged goods so you can focus on stocking and selling what matters.
//           </p>
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="flex justify-center">
//               <img src="/images/Comic 1 Panel 1.png" alt="Expired and damaged products concern" className="max-h-96 rounded-lg shadow-md border border-gray-300" />
//             </div>
//             <div className="flex justify-center">
//               <img src="/images/Comic 1 Panel 2.png" alt="Buyzaar Mart takes back expired/damaged goods" className="max-h-96 rounded-lg shadow-md border border-gray-300" />
//             </div>
//           </div>
//         </div>


//         {/* Comparison Table */}
//         <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 mb-16">
//           <h2 className="text-3xl font-bold text-center mb-8 text-black">
//             Model Comparison
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse border-2 border-gray-300">
//               <thead>
//                 <tr className="bg-black text-white">
//                   <th className="border-2 border-gray-300 px-4 py-3 text-left">Feature</th>
//                   <th className="border-2 border-gray-300 px-4 py-3 text-left">FICO</th>
//                   <th className="border-2 border-gray-300 px-4 py-3 text-left">FOFO</th>
//                   <th className="border-2 border-gray-300 px-4 py-3 text-left">FICO Premium</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {comparisonTable.map((row, i) => (
//                   <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="border-2 border-gray-300 px-4 py-3 font-semibold text-gray-800">{row.feature}</td>
//                     <td className="border-2 border-gray-300 px-4 py-3 text-gray-700">{row.fico}</td>
//                     <td className="border-2 border-gray-300 px-4 py-3 text-gray-700">{row.fofo}</td>
//                     <td className="border-2 border-gray-300 px-4 py-3 text-gray-700">{row.ficoPremium}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Store Format Options */}
//         <div className="rounded-2xl p-8 shadow-xl border-2 border-red-800 bg-linear-to-br from-gray-50 to-gray-100">
//           <h2 className="text-3xl font-bold text-center text-black mb-10">
//             Store Formats & Product Categories
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {storeFormats.map((format, index) => (
//               <div key={index} className="bg-red-800 rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:shadow-xl transition-shadow">
//                 <div className="flex items-center space-x-3 mb-4">
//                   <Store className="text-white" size={28} />
//                   <h3 className="text-2xl font-bold text-black">{format.name}</h3>
//                 </div>
//                 <p className="text-sm font-semibold text-gray-800 mb-4 bg-gray-100 inline-block px-3 py-1 rounded">{format.size}</p>
//                 <ul className="space-y-2 text-gray-200">
//                   {format.products.map((product, i) => (
//                     <li key={i} className="flex items-start">
//                       <span className="text-black mr-2">•</span>
//                       <span>{product}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
    
//     </div>
//   );
// };

// export default BuyzaarMartFranchiseModels;
import React from "react";

const BuyzaarMartFOCM = () => {
  const focmFeatures = [
    "Franchisee provides the initial capital investment for the store setup and owns the outlet.",

    "Franchisor is responsible for pre franchise launch support which includes store location survey and approval and timely setup and launch of the new store accordingly to our brand elements and positioning. Including all the interior and store assets setup (Store categorization as per our module – Mini Mart, Super Mart or Hyper Mart).",

    "Franchisor facilitates the execution of the franchise agreement, legal documentation and related onboarding formalities.",

    "Franchisor does the store layout, interior design and branding setup to ensure brand uniformity. All fixed expenses, including rent and staff salaries, as well as variable expenses such as electricity and miscellaneous costs, shall be borne by the Franchisee.",

    "Franchisor grants for the licensed use of The Buyzaar Mart trademarks, logos and brand identity.",

    "Franchisor ensures the adherence of brand Standard Operating Process (SOP) for manual detailing, daily operations, POS systems, inventory control and customer service standards.",

    "Franchisor deploys technology system (POS) for billing and sales tracking.",

    "Franchisor communicates for operational standards for store performance, hygiene and merchandising.",

    "Franchisor supports the franchisee with opening stock recommendations and replenishment guidelines along with procurement systems and provides pricing and product mix strategies suited to local consumer needs while facilitating logistical coordination for timely delivery and inventory optimization.",

    "Franchisor conducts initial training programs for the franchisee and staff on store operations, POS systems and customer engagement ensuring ongoing operational support, audits and performance reviews. Offering technical assistance through a dedicated support team.",

    "Franchisor develops and provides local marketing campaigns, digital marketing strategies and brand materials while supporting franchisee in planning and executing local promotions and launch activities.",

    "Franchisor ensures consistent brand representation across all stores, signage and uniforms, conducting periodic reviews to maintain brand identity and customer experience standards.",

    "Franchisor conducts regular operational and quality audits at franchise locations providing performance dashboards and key performance indicators (KPIs) to monitor sales, inventory and customer satisfaction and recommends corrective actions and improvement plans based on audit findings.",

    "Franchisor supports franchisee with renewal procedures and criteria evaluation at the end of the term of 5 year.  "
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl px-4 pt-32 pb-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Franchise Model
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Explore our Franchise Owned Company Managed (FOCM) model designed
            for investors seeking professional operational management.
          </p>
        </div>

        {/* FOCM Model Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 mb-12">

          {/* Top Banner */}
          <div className="bg-red-800 text-white -mx-8 -mt-8 p-6 rounded-t-2xl mb-6">
            <h2 className="text-3xl font-bold text-center">
              FOCM
            </h2>
            <p className="text-gray-200 text-center text-lg mt-2">
              Franchise Owned Company Managed
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-800 mb-6 text-lg">
            Under the FOCM model, the franchisee owns the outlet and invests in
            the setup, while Buyzaar Mart manages operations, branding,
            technology, training and performance systems to ensure profitability
            and brand consistency.
          </p>

          {/* Features List */}
          <ul className="space-y-3 text-gray-800">
            {focmFeatures.map((feature, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="text-black font-bold text-xl">•</span>
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* FOCO Model Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 mb-12">

          {/* Top Banner */}
          <div className="bg-red-800 text-white -mx-8 -mt-8 p-6 rounded-t-2xl mb-6">
            <h2 className="text-3xl font-bold text-center">
              FOCO
            </h2>
            <p className="text-gray-200 text-center text-lg mt-2">
              Franchise Owned, Company Operated
            </p>
          </div>

          {/* FOCO Paragraphs */}
          <div className="space-y-5 text-gray-800 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-4">
            <li>
              The FOCO (Franchise Owned, Company Operated) model is a modern retail business structure specifically designed for investors who wish to enter the organized retail sector without being involved in the complexities of day-to-day store management. Under this model, the investor's primary role is to provide the required capital investment &amp; Rent (if any), while the company takes complete ownership of store operations, ensuring a professionally managed and standardized retail experience. This makes it an ideal opportunity for individuals or businesses looking to generate stable and relatively passive income streams from the retail industry.
            </li>
            <li>
              The store requirements under this model are structured to support a full-scale supermarket format. The minimum store size starts from 2,000 square feet, allowing sufficient space to accommodate a comprehensive range of product categories and ensure a comfortable shopping experience for customers. Larger store formats can further enhance product assortment and revenue potential.
            </li>
            <li>
              From an investment perspective, the FOCO model involves several key cost components. These include a POS software cost of ₹50,000 per login, which enables efficient billing, inventory tracking, and reporting. The interior setup cost is estimated at ₹1,200 per square foot plus applicable GST, covering fixtures, shelving, lighting, branding, and overall store ambiance. Additionally, there is a one-time franchise fee of ₹3,00,000 (inclusive of GST), granting the investor access to the brand, systems, and operational expertise of the company. The product stocking cost is approximately ₹1,700 per square foot, ensuring that the store is well-equipped with a wide assortment of goods from the outset. The agreement is typically structured for a long-term duration of 10 years, providing stability and continuity for both the investor and the company.
            </li>
            <li>
              In terms of responsibilities, the model clearly defines the roles of both parties. The franchisee (investor) is responsible primarily for providing and maintaining the retail space, including bearing the cost of store rent. On the other hand, the company handles all operational aspects of the business. This includes managing electricity expenses, recruiting and paying employee salaries, overseeing daily operational costs, executing marketing and promotional campaigns, and ensuring proper product display and store layout. The company also manages backend operations such as inventory control, procurement, supply chain logistics, and performance optimization, thereby removing operational burdens from the investor.
            </li>
            <li>
              The revenue model is structured to provide consistent and performance-linked returns to the investor. Typically, the investor earns approximately 10% revenue sharing on the total monthly sales generated by the store. For example, if the store achieves monthly sales of ₹30,00,000, the investor can expect to earn around ₹3,00,000 as revenue share. This model aligns the interests of both the company and the investor, as higher sales directly translate into higher earnings for both parties.
            </li>
            <li>
              The store is designed to cater to a wide range of customer needs by offering a diverse mix of product categories. These include grocery and staples, bakery and dairy products, personal care items, beverages, fresh fruits and vegetables, frozen foods, stationery, toys, snacks, devotional items, pet care and household essentials.
            </li>
            <li>
              Overall, the FOCO model presents a highly attractive opportunity for investors seeking a hands-off business model with professional management and predictable returns. With the company handling end-to-end operations—including staffing, marketing, merchandising, and supply chain management—the investor can benefit from a structured and scalable retail business without the need for active involvement. The long-term 10-year agreement further ensures business stability, making it a compelling option for those looking to build wealth through organized retail with minimal operational risk.
            </li>
            </ul>
          </div>

        </div>

      </div>

             {/* Expired/Damaged Goods Comic Section - Insert after FICO Premium */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-800">
            Hassle-Free Inventory Assurance
          </h2>
           <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
             Worry less about unsold, expired or damaged stock. With Buyzaar Mart&apos;s guarantee, we take back expired and damaged goods so you can focus on stocking and selling what matters.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="flex justify-center">
               <img src="/images/Comic 1 Panel 1.png" alt="Expired and damaged products concern" className="max-h-96 rounded-lg shadow-md border border-gray-300" />
         </div>
          <div className="flex justify-center">
              <img src="/images/Comic 1 Panel 2.png" alt="Buyzaar Mart takes back expired/damaged goods" className="max-h-96 rounded-lg shadow-md border border-gray-300" />
            </div>
      </div>
         </div>
    </div>
  );
};

export default BuyzaarMartFOCM;