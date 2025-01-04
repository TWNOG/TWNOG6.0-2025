export default function CFPPage() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <section className="max-w-3xl mx-auto bg-white p-6 rounded shadow-sm">
        {/* 大標題 */}
        <h1 className="text-3xl font-bold mb-4">Call For Presentations</h1>
        <p className="text-sm mb-4">
          The TWNOG6 Program Committee is now seeking contributions for presentations
          for the TWNOG6 Conference.
        </p>
        <p className="mb-6">
          Please submit via the APNIC Paper Submission System at:{" "}
          <a
            href="https://submission.apnic.net/user/login.php?event=213"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://submission.apnic.net/user/login.php?event=213
          </a>
        </p>

        {/* Conference Milestones */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Conference Milestones</h2>
          <ul className="list-none space-y-1 text-sm">
            <li>
              <strong>Call for Papers Opens:</strong> Now
            </li>
            <li>
              <strong>First Draft Program Published:</strong> Feb 28, 2025
            </li>
            <li>
              <strong>Final Deadline for Submissions:</strong> Feb 29, 2025
            </li>
            <li>
              <strong>Submission Review/Approval:</strong> Mar 4-10, 2025
            </li>
            <li>
              <strong>Final Program Published:</strong> March 11, 2025
            </li>
            <li>
              <strong>Final Slides Received:</strong> April 12, 2025
            </li>
            <li>
              <strong>Conference Starts:</strong> April 18, 2025
            </li>
          </ul>
          <p className="text-red-600 text-sm mt-2 font-semibold">
            SLOTS ARE FILLED ON A FIRST-COME, FIRST-SERVED BASIS, REGARDLESS OF
            PUBLISHED DEADLINES.
          </p>
        </div>

        {/* Program Content */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Program Content</h2>
          <p className="text-sm mb-4">
            Presentation Topics: Internet Operations &amp; Technologies
          </p>
          <p className="text-sm mb-2">
            The following are recommended topics, but not limited to:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              <strong>Network Security and Attack Protection:</strong> NSP-SEC, DDoS
              trend, Anti-Spam, Botnet detection, DNS / DNSSEC, Network Infrastructure
              and Software-Defined Networking
            </li>
            <li>
              <strong>IXPs and Peering</strong>
            </li>
            <li>
              IPv4 / IPv6 Routing and Operations, IPv6 used in different industries, v6
              deployment &amp; transition, Internet backbone operations, Access and
              Transport Technologies (3G/LTE/5G, FTTH, Wireless, Metro Ethernet, Fiber
              Optics, MPLS), SDN &amp; NFV, RPKI &amp; ROA, Satellite Networks,
              Affordable Network, Data Center
            </li>
            <li>
              <strong>Energy Utilization:</strong> Operations Management, Data Center
              Certification, Wireless and Mobile Communications
            </li>
            <li>
              <strong>5G/6G related topics:</strong> Network Operations and Management
            </li>
            <li>
              <strong>ISP and Carrier services:</strong> AI used in Network Operations,
              Best Practice in Network Operations, Network Performance Measurement,
              Cloud and Content Delivery Networks (CDN)
            </li>
            <li>
              Cloud Computing and CDN: Multicast, Voice, Video, Telepresence, Gaming,
              Emerging Technologies and Others
            </li>
            <li>
              Big Data, AI, IoT and Industry 4.0, <strong>Other Network-Related Topics</strong>
            </li>
          </ul>
        </div>

        {/* CFP Submission */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">CFP Submission</h2>
          <p className="text-sm mb-2">
            Draft slides <strong>MUST</strong> be provided with CFP submissions
            otherwise the submission will be rejected immediately. For work in
            progress, the most current information available at the time of submission
            is acceptable.
          </p>
          <p className="text-sm mb-2">
            All draft and complete slides must be submitted in <strong>PDF format</strong>{" "}
            only. Slides must be of original work, with all company confidential marks
            removed. <strong>Presentations with commercial/sales content will NOT be accepted.</strong>
          </p>
          <p className="text-sm mb-2">
            Final slides are to be provided by the specified deadline for publication
            on the TWNOG website.
          </p>
          <p className="text-sm mb-2">
            Any questions or concerns should be addressed to the Program Committee
            Chairs by e-mail at:{" "}
            <a
              href="mailto:paper@twnog.net"
              className="text-blue-600 underline"
            >
              paper@twnog.net
            </a>.
          </p>
        </div>

        {/* Ending */}
        <p className="text-sm">
          We look forward to receiving your presentation proposals.
          <br />
          <strong>TWNOG 6 Program Committee Chairs</strong>
        </p>
      </section>
    </div>
  );
}
