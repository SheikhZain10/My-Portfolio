'use client'
import React from 'react'

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print()
  }

  const handleDownload = async () => {
    try {
      const res = await fetch('/Zain_Resume.pdf', { method: 'HEAD' })
      if (res.ok) {
        if (typeof window !== 'undefined') {
          const link = document.createElement('a')
          link.href = '/Zain_Resume.pdf'
          link.download = 'Zain_Resume.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          return
        }
      }
    } catch (e) {}
    handlePrint()
  }

  return (
    <div className="w-full flex justify-center bg-white text-black">
      <div className="w-[850px] max-w-full p-6 sm:p-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Zain</h1>
            <p className="mt-1">Full Stack Software Engineer (.NET)</p>
            <p className="mt-1 text-sm">Lahore, Pakistan · 03034871146</p>
            <p className="mt-1 text-sm">sheikzain1355@gmail.com</p>
            <p className="mt-1 text-sm">LinkedIn: linkedin.com/in/zain-ul-abideen-a901221a3</p>
          </div>
          <div className="print:hidden">
            <button onClick={handleDownload} className="px-4 py-2 border rounded-lg hover:bg-gray-100">Download PDF</button>
          </div>
        </div>

        <hr className="my-4" />

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="mt-2 text-sm leading-6">
            Results-driven Full Stack .NET Developer with 4.5+ years building scalable, secure web applications. Expert in .NET Core, C#, ASP.NET MVC/Razor, Web API, SQL Server, and integrations (QuickBooks, Zoho Books, Thawani, MPGS). Proven record of optimizing performance, implementing role-based access, and delivering SaaS solutions end-to-end. Trusted client-facing partner managing multi-country stakeholders (Muscat, Dubai) and production operations (SiteGround hosting, DNS/SSL, backups). Strong database design and reporting (Stored Procedures, SSRS).
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="mt-2 text-sm leading-6 list-disc pl-5">
            <li><strong>Backend:</strong> .NET Core, C#, ASP.NET MVC, Web API, Entity Framework, ADO.NET</li>
            <li><strong>Frontend:</strong> Razor Pages, HTML, CSS, Bootstrap, JavaScript, jQuery</li>
            <li><strong>Databases/Reporting:</strong> SQL Server, MySQL, Stored Procedures, SSRS, Query Optimization</li>
            <li><strong>Integrations:</strong> QuickBooks, Zoho Books, Payment Gateways (Thawani, Network International, MPGS, OmanNet), Messerschmitt Access Control, TT Lock (Sciener)</li>
            <li><strong>Tools/Practices:</strong> GitHub, Jira, ClickUp, Performance Optimization, QA collaboration</li>
            <li><strong>DevOps/Operations:</strong> SiteGround (cPanel), DNS, SSL/TLS, backups, monitoring, zero-downtime deployments</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="mt-2">
            <h3 className="font-semibold">Nanobyte Technologies — Full Stack Software Engineer</h3>
            <p className="text-xs"><strong>Nov 2023 - Present | Lahore, Pakistan</strong></p>
            <ul className="list-disc pl-5 text-sm leading-6 mt-1">
              <li>Led development of SaaS Property Management System (PMS) supporting multi-country operations (Dubai, Muscat): accounts, tenants, bookings, invoicing, reporting</li>
              <li>Built secure authentication and RBAC; integrated payment gateways: Thawani, QuickBooks, Zoho Books, Network International, MPGS, OmanNet</li>
              <li>Integrated IoT/access control: Messerschmitt access control and TT Lock (Sciener) for hotel/short-stay door access</li>
              <li>Optimized SQL for financial reporting, reducing heavy report runtime from timeout errors to 1 second load time</li>
              <li>Built key PMS modules: Fee Assessment (residents), Student Portal, Complaint Management, Transportation, Contracts, and Inspections</li>
              <li>Primary client partner for Myriad across UAE and Oman; owned discovery, scope, demos, and stakeholder communications</li>
              <li>Managed production deployments and hosting on SiteGround: staging/live pipelines, SSL, DNS, automated backups, performance tuning</li>
              <li>Coordinated parallel delivery across 10+ modules/projects, ensuring timelines, quality, and smooth handoffs with design/QA</li>
              <li>Resolved on-site constraints via AnyDesk: navigated firewall/VPN policies, port rules, and device provisioning to complete integrations</li>
            </ul>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold">ABN Technologies — Full Stack Software Engineer</h3>
            <p className="text-xs"><strong>Sep 2022 - Oct 2023 | Lahore, Pakistan</strong></p>
            <ul className="list-disc pl-5 text-sm leading-6 mt-1">
              <li>Designed RESTful Web APIs and improved DB indexing, cutting API latency for key endpoints by ~30%</li>
              <li>Delivered responsive, maintainable UIs; partnered with QA to harden critical flows</li>
              <li>Developed US payroll system (PayProNext) with SSRS reports and tax-compliant calculations</li>
              <li>Built tax services website (TaxProNext) with responsive UI and service pages</li>
            </ul>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold">2B Vision Technologies — Full Stack Software Engineer</h3>
            <p className="text-xs"><strong>Dec 2020 - Aug 2022 | Lahore, Pakistan</strong></p>
            <ul className="list-disc pl-5 text-sm leading-6 mt-1">
              <li>Clinic Management System and B2B solutions: schema design, API integrations, SSRS reporting</li>
              <li>Improved backend performance via Stored Procedures and targeted query tuning</li>
            </ul>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold">2B Vision Technologies — Software Developer Intern</h3>
            <p className="text-xs"><strong>Aug 2020 - Nov 2020 | Lahore, Pakistan</strong></p>
            <ul className="list-disc pl-5 text-sm leading-6 mt-1">
              <li>Practiced .NET fundamentals, debugging, and API development</li>
            </ul>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold">Creative Souls — Software QA Intern</h3>
            <p className="text-xs"><strong>Nov 2019 - Jul 2020 | Lahore, Pakistan</strong></p>
            <ul className="list-disc pl-5 text-sm leading-6 mt-1">
              <li>Manual/automation testing, test cases, and defect reporting across multiple modules</li>
            </ul>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Selected Projects</h2>
          <ul className="mt-2 text-sm leading-6 list-disc pl-5">
            <li><strong>Partner Ledger Reports (PMS):</strong> SSRS-driven ledgers/statements with filters, exports, and reconciliation. Stack: .NET, SQL Server, SSRS</li>
            <li><strong>PMS Vouchers & Invoices:</strong> Voucher lifecycle with attachments, mail triggers, approvals, and audit trails. Stack: .NET, Web API, SQL Server, SSRS</li>
            <li><strong>The Myriad Website:</strong> Tightly integrated with PMS via REST APIs; dynamic listings, bookings, invoices, contracts, dashboards; SSRS reports; companion mobile app. Stack: ASP.NET MVC/Razor, JS, Bootstrap</li>
            <li><strong>PayProNext — US Payroll Platform:</strong> SSRS reports, tax-compliant payroll calculations, and frontend website implementation. Stack: .NET, SQL Server, SSRS, ASP.NET MVC</li>
            <li><strong>TaxProNext — Tax & Payroll Website:</strong> Marketing site and service pages with responsive UI. Stack: .NET, SQL Server, CSS</li>
            <li><strong>Aaladin — Cleaning Services Platform:</strong> Web app with partner/customer flows, APIs, admin; mobile app companion. Stack: .NET Web API, SQL Server</li>
            <li><strong>Cleanup.ae — Cleaning Services Website:</strong> Marketing/services site with service pages and contact flows. Stack: Custom Development, Responsive UI</li>
            <li><strong>Strategic Housing Group — Corporate Website:</strong> Corporate site for SHG and brands including The Myriad. Stack: Custom Development, CSS</li>
            <li><strong>URBN Living — Co-living Brand Website:</strong> Lifestyle/brand site and lead capture. Stack: Custom Development, CSS</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <ul className="mt-2 text-sm leading-6 list-disc pl-5">
            <li><strong>Lahore Leads University</strong> - BS Computer Science, Lahore (2019)</li>
            <li><strong>Kips College</strong> - Intermediate, Lahore (2019)</li>
            <li><strong>Lahore Garrison School</strong> - Matriculation, Lahore (2019)</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Certifications & Awards</h2>
          <ul className="mt-2 text-sm leading-6 list-disc pl-5">
            <li><strong>ASP.NET Developer,</strong> EVS (2019)</li>
            <li><strong>🏆 Rising Star Award,</strong> Nanobyte Technologies (2024)</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold">Languages</h2>
          <ul className="mt-2 text-sm leading-6 list-disc pl-5">
            <li><strong>Urdu</strong> (Native), <strong>English</strong> (Intermediate)</li>
          </ul>
        </section>

        <style>{`
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            a { color: inherit; text-decoration: none; }
          }
        `}</style>
      </div>
    </div>
  )
}
