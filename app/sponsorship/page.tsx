export default function SponsorshipPage() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <section className="max-w-4xl mx-auto bg-white p-6 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-6">我要贊助</h1>
        
        {/* 贊助方案表格 */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 text-sm text-center">
            <thead className="bg-yellow-100">
              <tr>
                <th className="border border-gray-300 py-2 px-4">Sponsor Level</th>
                <th className="border border-gray-300 py-2 px-4">Titanium<br/>(NT 300,000 / USD 10,000)</th>
                <th className="border border-gray-300 py-2 px-4">Platinum<br/>(NT 100,000 / USD 3,150)</th>
                <th className="border border-gray-300 py-2 px-4">Gold<br/>(NT 60,000 / USD 2,000)</th>
                <th className="border border-gray-300 py-2 px-4">Silver<br/>(NT 36,000 / USD 1,200)</th>
              </tr>
            </thead>
            <tbody>
              {/* Sponsor Session */}
              <tr>
                <td className="border border-gray-300 py-2 px-4 font-semibold">Sponsor Session</td>
                <td className="border border-gray-300 py-2 px-4">Keynote * 1</td>
                <td className="border border-gray-300 py-2 px-4">Session * 1</td>
                <td className="border border-gray-300 py-2 px-4">X</td>
                <td className="border border-gray-300 py-2 px-4">X</td>
              </tr>
              {/* Logo on website & Hyperlink */}
              <tr>
                <td className="border border-gray-300 py-2 px-4 font-semibold">Logo on website & Hyperlink</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
              </tr>
              {/* Logo on Signage */}
              <tr>
                <td className="border border-gray-300 py-2 px-4 font-semibold">Logo on Signage</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
              </tr>
              {/* Event Backdrop Logo */}
              <tr>
                <td className="border border-gray-300 py-2 px-4 font-semibold">Event Backdrop Logo</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
                <td className="border border-gray-300 py-2 px-4">V</td>
              </tr>
              {/* Free Ticket */}
              <tr>
                <td className="border border-gray-300 py-2 px-4 font-semibold">Free Ticket</td>
                <td className="border border-gray-300 py-2 px-4">30</td>
                <td className="border border-gray-300 py-2 px-4">15</td>
                <td className="border border-gray-300 py-2 px-4">10</td>
                <td className="border border-gray-300 py-2 px-4">6</td>
              </tr>
              {/* Dinner Quota */}
              <tr>
                <td className="border border-gray-300 py-2 px-4 font-semibold">Dinner Quota</td>
                <td className="border border-gray-300 py-2 px-4">15</td>
                <td className="border border-gray-300 py-2 px-4">5</td>
                <td className="border border-gray-300 py-2 px-4">3</td>
                <td className="border border-gray-300 py-2 px-4">1</td>
              </tr>
              {/* Exhibition Desk */}
              <tr>
                <td className="border border-gray-300 py-2 px-4 font-semibold">Exhibition Desk</td>
                <td className="border border-gray-300 py-2 px-4">Table*4<br/>Chair*8</td>
                <td className="border border-gray-300 py-2 px-4">Table*2<br/>Chair*4</td>
                <td className="border border-gray-300 py-2 px-4">Table*1<br/>Chair*2</td>
                <td className="border border-gray-300 py-2 px-4">X</td>
              </tr>
              {/* DM (A4) */}
              <tr>
                <td className="border border-gray-300 py-2 px-4 font-semibold">DM (A4)</td>
                <td className="border border-gray-300 py-2 px-4">500</td>
                <td className="border border-gray-300 py-2 px-4">200</td>
                <td className="border border-gray-300 py-2 px-4">200</td>
                <td className="border border-gray-300 py-2 px-4">200</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 說明文字 */}
        <p className="mt-4 text-sm">
          <strong>Introduction:</strong> Please provide Hyperlink/Logo in an AI or EPS file
          and DM <strong>a month before</strong> the event date.
        </p>

        {/* 注意事項、排名原則 */}
        <div className="mt-8 text-sm leading-relaxed">
          <h2 className="font-semibold mb-2">Notice</h2>
          <p>
            <strong>Ranking Processing Principles:</strong> The arrangement and placement
            of names and logos of vendors at all levels of the conference, as well as
            the arrangement of exhibition tables, shall be conducted by the following
            principles:
          </p>
          <ol className="list-decimal list-inside mt-2 mb-2 pl-2">
            <li>Sponsorship Amount</li>
            <li>
              If amounts are equal, priority is given based on the order of sponsorship
              time, followed by the alphabetical order of the English name.
            </li>
          </ol>
          <p>
          The organizing committee will assign and arrange the locations of the exhibition tables. For any inquiries, please contact our team at &lt;sponsorship@twnog.net&gt;.
          </p>
        </div>
      </section>
    </div>
  );
}
