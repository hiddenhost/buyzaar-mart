'use client';



export default function FranchiseAgreement() {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="pt-20">
        {/* Header Section */}
        <div className="bg-linear-to-r from-[#fd7e14] to-orange-600 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Franchise Agreement
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Comprehensive franchise agreement terms for Buyzaar Mart Apna Baazar retail franchise opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Agreement Date & Parties */}
          <div className="bg-orange-50 border-l-4 border-[#fd7e14] p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#fd7e14] mb-3">Agreement Details</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p><strong>Agreement Date:</strong> October 3, 2025</p>
                <p><strong>Governing Law:</strong> Indian Contract Act, 1872</p>
              </div>
              <div>
                <p><strong>Jurisdiction:</strong> Noida, Uttar Pradesh</p>
                <p><strong>Renewal Policy:</strong> Subject to Performance Review</p>
              </div>
            </div>
          </div>

          {/* Parties to the Agreement */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Parties to the Agreement
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold text-[#fd7e14] mb-4 flex items-center">
                  <span className="bg-white p-2 rounded-full mr-3">🏢</span>
                  Franchisor
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Company:</strong> SRG INOIL Promoter Solutions Pvt. Ltd.</p>
                  <p><strong>Brand:</strong> Buyzaar Mart Apna Baazar</p>
                  <p><strong>Address:</strong> D-43, 3rd Floor, Sector-6, Noida - 201301</p>
                  <p><strong>State:</strong> Uttar Pradesh, India</p>
                  <p><strong>Registration:</strong> Under Companies Act, 2013</p>
                  <p><strong>Government Affiliation:</strong> Mukhya Mantri Yuva Udhyam Vikas Yojana</p>
                </div>
              </div>

              <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-[#fd7e14] mb-4 flex items-center">
                  <span className="bg-white p-2 rounded-full mr-3">👤</span>
                  Franchisee
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Name:</strong> [To be filled by applicant]</p>
                  <p><strong>Address:</strong> [To be filled by applicant]</p>
                  <p><strong>PAN Number:</strong> [To be filled by applicant]</p>
                  <p><strong>GST Registration:</strong> [To be filled by applicant]</p>
                  <p><strong>Contact Details:</strong> [To be filled by applicant]</p>
                  <p><strong>Business Registration:</strong> [Sole Proprietorship/Partnership/LLP/Pvt Ltd]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Grant of Franchise */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Grant of Franchise Rights
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-6">
              <p>
                The Franchisor hereby grants to the Franchisee a non-exclusive license to operate a retail outlet under the <strong className="text-[#fd7e14]">Buyzaar Mart Apna Baazar</strong> brand name, subject to the terms and conditions set forth in this Agreement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#fd7e14] mb-3">Rights Granted</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    Use of Buyzaar Mart Apna Baazar trademarks and logos
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    Access to proprietary business systems and methods
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    ERP and CRM system usage rights
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    Marketing materials and brand guidelines
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    Training and ongoing operational support
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#fd7e14] mb-3">Territorial Rights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    Exclusive territory as defined in Schedule A
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    Population-based territory demarcation
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    Protection from direct competition
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    Expansion rights within territory
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fd7e14] mr-2">•</span>
                    First right of refusal for adjacent areas
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Investment & Fee Structure */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Investment & Fee Structure
            </h2>
            
            <div className="space-y-6">
              <div className="bg-linear-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold text-[#fd7e14] mb-4 text-center">Total Investment Breakdown</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-300 text-center">
                    <div className="text-2xl font-bold text-[#fd7e14] mb-2">₹2-5 Lakhs</div>
                    <p className="text-sm text-gray-600">Initial Franchise Fee</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-300 text-center">
                    <div className="text-2xl font-bold text-[#fd7e14] mb-2">₹3-8 Lakhs</div>
                    <p className="text-sm text-gray-600">Setup & Infrastructure</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-300 text-center">
                    <div className="text-2xl font-bold text-[#fd7e14] mb-2">₹2-4 Lakhs</div>
                    <p className="text-sm text-gray-600">Initial Inventory</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-3">One-Time Payments</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Franchise Fee</span>
                      <span className="font-semibold">₹2-5 Lakhs</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Security Deposit</span>
                      <span className="font-semibold">₹1 Lakh</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Training Fee</span>
                      <span className="font-semibold">₹25,000</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Setup Support</span>
                      <span className="font-semibold">₹50,000</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-3">Ongoing Payments</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Royalty Fee</span>
                      <span className="font-semibold">3-5% of Revenue</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Marketing Fund</span>
                      <span className="font-semibold">2% of Revenue</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Technology Fee</span>
                      <span className="font-semibold">₹5,000/month</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Support Services</span>
                      <span className="font-semibold">₹2,000/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Term & Renewal */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Agreement Term & Renewal
            </h2>
            
            <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#fd7e14] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">10</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Initial Term</h3>
                  <p className="text-sm text-gray-600">Years from commencement date</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#fd7e14] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Renewal Term</h3>
                  <p className="text-sm text-gray-600">Years per renewal period</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#fd7e14] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">∞</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Renewal Options</h3>
                  <p className="text-sm text-gray-600">Subject to performance standards</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded border border-orange-200">
                <h4 className="font-semibold text-[#fd7e14] mb-2">Renewal Conditions</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Compliance with operational standards</li>
                  <li>• Meeting minimum revenue targets</li>
                  <li>• Good standing with no material breaches</li>
                  <li>• Payment of renewal fee and updated terms acceptance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Operational Requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Operational Requirements
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-3 flex items-center">
                    <span className="bg-orange-100 p-2 rounded-full mr-3">🏪</span>
                    Store Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Minimum 800-1200 sq ft retail space</li>
                    <li>• Ground floor location with street access</li>
                    <li>• Adequate parking facilities</li>
                    <li>• Compliance with local zoning laws</li>
                    <li>• Approved store layout and design</li>
                    <li>• Proper lighting and ventilation</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-3 flex items-center">
                    <span className="bg-orange-100 p-2 rounded-full mr-3">📋</span>
                    Legal Compliance
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Trade License for retail operations</li>
                    <li>• FSSAI License for food products</li>
                    <li>• GST Registration (mandatory)</li>
                    <li>• Shop & Establishment Act registration</li>
                    <li>• Fire & Safety compliance certificate</li>
                    <li>• Weights & Measures registration</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-3 flex items-center">
                    <span className="bg-orange-100 p-2 rounded-full mr-3">👥</span>
                    Staffing Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Minimum 3-5 trained staff members</li>
                    <li>• Store manager with retail experience</li>
                    <li>• Completion of mandatory training program</li>
                    <li>• Ongoing skill development programs</li>
                    <li>• Customer service training certification</li>
                    <li>• Adherence to uniform and grooming standards</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-[#fd7e14] mb-3 flex items-center">
                    <span className="bg-orange-100 p-2 rounded-full mr-3">⚙️</span>
                    Technology Systems
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Implementation of approved POS system</li>
                    <li>• ERP system integration for inventory</li>
                    <li>• CRM system for customer management</li>
                    <li>• Digital payment gateway setup</li>
                    <li>• Barcode scanning and inventory tracking</li>
                    <li>• Regular software updates and maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Training & Support */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Training & Support Programs
            </h2>
            
            <div className="bg-linear-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200 mb-6">
              <h3 className="text-xl font-semibold text-[#fd7e14] mb-4 text-center">Comprehensive Support System</h3>
              <p className="text-gray-700 text-center">
                Buyzaar Mart provides extensive training and ongoing support to ensure franchisee success and maintain brand standards across all locations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl text-[#fd7e14] mb-3">🎓</div>
                <h3 className="font-semibold text-gray-800 mb-3">Initial Training</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• 15-day comprehensive program</li>
                  <li>• Business operations training</li>
                  <li>• Product knowledge sessions</li>
                  <li>• Customer service excellence</li>
                  <li>• Technology systems training</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl text-[#fd7e14] mb-3">🛠️</div>
                <h3 className="font-semibold text-gray-800 mb-3">Ongoing Support</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Monthly business reviews</li>
                  <li>• Marketing campaign support</li>
                  <li>• Inventory management guidance</li>
                  <li>• Performance monitoring</li>
                  <li>• Technical support hotline</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl text-[#fd7e14] mb-3">📈</div>
                <h3 className="font-semibold text-gray-800 mb-3">Growth Support</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Business expansion planning</li>
                  <li>• Advanced training modules</li>
                  <li>• Best practices sharing</li>
                  <li>• Peer network access</li>
                  <li>• Leadership development</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Intellectual Property & Brand Usage
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-6">
              <p>
                All intellectual property rights including trademarks, trade names, logos, business methods, and proprietary systems remain the exclusive property of SRG INOIL Promoter Solutions Pvt. Ltd.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-700 mb-3">Permitted Usage</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Use of approved logos and signage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Marketing materials as provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Business name for franchise operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Approved advertising templates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#b00000] mb-3">Prohibited Usage</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Modification of logos or brand elements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Use beyond authorized territory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Registration of similar trademarks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Use after agreement termination</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Performance Standards */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Performance Standards & KPIs
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700 text-center">
                <strong className="text-[#fd7e14]">Quality Commitment:</strong> Maintaining consistent performance standards ensures customer satisfaction and brand reputation across all Buyzaar Mart locations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-[#fd7e14] mb-2">Financial Targets</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Minimum monthly revenue: ₹3-5 Lakhs</li>
                    <li>• Annual growth target: 15-20%</li>
                    <li>• Profit margin maintenance: 8-12%</li>
                    <li>• Timely payment of dues and royalties</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-[#fd7e14] mb-2">Operational Excellence</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Customer satisfaction score: 4.5/5</li>
                    <li>• Inventory turnover ratio: 6-8 times/year</li>
                    <li>• Staff productivity metrics</li>
                    <li>• Compliance audit scores: 90%+</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-[#fd7e14] mb-2">Brand Standards</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Store appearance and cleanliness</li>
                    <li>• Product quality and freshness</li>
                    <li>• Customer service protocols</li>
                    <li>• Marketing campaign participation</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-[#fd7e14] mb-2">Reporting Requirements</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Monthly sales and expense reports</li>
                    <li>• Quarterly business reviews</li>
                    <li>• Annual financial statements</li>
                    <li>• Incident and customer complaint reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Termination Clauses */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Termination & Exit Provisions
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-red-200 rounded-lg p-6 bg-red-50">
                  <h3 className="text-lg font-semibold text-[#b00000] mb-3">Termination by Franchisor</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Immediate Termination</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Bankruptcy or insolvency</li>
                        <li>• Criminal conviction affecting business</li>
                        <li>• Unauthorized transfer of franchise</li>
                        <li>• Material misrepresentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">30-Day Notice Termination</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Non-payment of fees</li>
                        <li>• Breach of operational standards</li>
                        <li>• Violation of territorial restrictions</li>
                        <li>• Failure to cure material breach</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">Termination by Franchisee</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">With Cause</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Material breach by franchisor</li>
                        <li>• Failure to provide promised support</li>
                        <li>• Significant system changes</li>
                        <li>• Breach of exclusivity rights</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Voluntary Exit</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 90-day written notice required</li>
                        <li>• Payment of all outstanding dues</li>
                        <li>• Completion of ongoing obligations</li>
                        <li>• Asset transfer procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#fd7e14] mb-3">Post-Termination Obligations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Immediate Actions</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cease use of all trademarks and brand elements</li>
                      <li>• Remove all signage and branded materials</li>
                      <li>• Return proprietary materials and manuals</li>
                      <li>• Discontinue use of business systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Ongoing Restrictions</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Non-compete clause: 2 years in territory</li>
                      <li>• Non-disclosure of confidential information</li>
                      <li>• Non-solicitation of employees/customers</li>
                      <li>• Compliance with final audit requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Dispute Resolution Process
            </h2>
            
            <div className="bg-linear-to-r from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[#fd7e14] mb-2">Four-Step Resolution Framework</h3>
                <p className="text-gray-700">Structured approach to resolve conflicts efficiently and maintain business relationships</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-300 text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Direct Discussion</h4>
                  <p className="text-xs text-gray-600">30-day negotiation period between parties</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-300 text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mediation</h4>
                  <p className="text-xs text-gray-600">Neutral third-party facilitated resolution</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-300 text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Arbitration</h4>
                  <p className="text-xs text-gray-600">Binding arbitration under Indian Arbitration Act</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-300 text-center">
                  <div className="bg-[#fd7e14] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Legal Action</h4>
                  <p className="text-xs text-gray-600">Court proceedings in Noida jurisdiction</p>
                </div>
              </div>
            </div>
          </section>

          {/* Signatures & Execution */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fd7e14]">
              Agreement Execution
            </h2>
            
            <div className="bg-linear-to-r from-[#fd7e14] to-orange-600 text-white p-8 rounded-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Ready to Join Buyzaar Mart Family?</h3>
                <p className="text-orange-100">
                  Contact our franchise team to discuss this agreement and begin your entrepreneurial journey
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Franchise Development Team</h4>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <span className="mr-2">📧</span>
                      <span>franchise@apnabaazar.co.in</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">📞</span>
                      <span>+91-XXX-XXX-XXXX</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">🌐</span>
                      <span>Buyzaar Martapnabazar.com</span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Next Steps</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Schedule a consultation call</li>
                    <li>• Complete franchise application</li>
                    <li>• Territory availability confirmation</li>
                    <li>• Financial qualification review</li>
                    <li>• Agreement finalization and signing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
     
     
    </div>
  );
}
