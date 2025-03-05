import { FaMapMarkerAlt } from "react-icons/fa";

const Business = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="justify-center mb-4 mt-12">
        <div className="flex justify-center">
          <div className="bg-red-100 p-2 w-10 h-10 flex items-center justify-center rounded-xl border">
            <FaMapMarkerAlt color="red" size={30} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
          Mainland Company Formation in Dubai
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-start my-16">
        <div className="w-full md:w-1/2 h-full md:sticky md:top-12">
          <div className="flex flex-col items-center mt-8">
            <div className="w-full px-4 id-form">
              <h2 className="text-center text-primary text-3xl font-bold mb-4">
                Start your business today
              </h2>
              <form className="flex flex-col gap-4  max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border p-2 rounded"
                />
                <textarea
                  placeholder="Your Message"
                  className="border p-2 rounded"
                  rows={2}
                />
                <button
                  type="submit"
                  className="bg-primary text-white p-2 rounded mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
            <div id="id-link" className="mt-4 w-full px-4 text-justify pl-40">
              <ul className="list-none">
                <li className="mb-1">
                  <a href="#benefits" className="text-primary underline">
                    Benefits of Mainland Company formation Switching from free{" "}
                    <br />
                    zone to mainland company formation
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#switching" className="text-primary underline"></a>
                </li>
                <li className="mb-1">
                  <a href="#choose-activity" className="text-primary underline">
                    1. Choose your business activity
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#find-location" className="text-primary underline">
                    2. Find your ideal location
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#determine-structure"
                    className="text-primary underline"
                  >
                    3. Determine your business legal structure
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#obtain-sponsor" className="text-primary underline">
                    4. Obtain a local sponsor or local service agent
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#name-company" className="text-primary underline">
                    5. Name your company
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#apply-licence" className="text-primary underline">
                    6. Apply for a mainland trade licence
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#secure-office" className="text-primary underline">
                    7. Secure your office space
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#apply-visas" className="text-primary underline">
                    8. Apply for relevant visas
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#partner-consultant"
                    className="text-primary underline"
                  >
                    9. Partner with a Company Setup Consultant
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full overflow-y-auto">
          <div className="p-4">
            <div>
              <p className="mb-4">
                ​What exactly is a UAE mainland company and why is it so
                important to have one? A mainland company is a company licensed
                by the Department of Economic Development (DED) in the relevant
                Emirate of the United Arab Emirates. Here’s a summary of the
                benefits of company registration on the UAE mainland, plus a
                guide to business setup on the Dubai maniland!
              </p>
              <img
                src="https://virtuzone.com/wp-content/uploads/2020/12/2020-12_types-mainland-trade-licence_0-980x735.jpg.webp"
                alt="Dubai Mainland"
                className="mb-4 rounded"
              />
            </div>
            <div id="benefits">
              <h2 className="text-3xl font-bold text-primary  mt-8">
                Benefits of mainland company formation in Dubai
              </h2>
              <p className="mb-6">
                Setting up a mainland company in Dubai comes with many
                advantages. Here are some key benefits every step of the way.
              </p>
              <ul>
                <li className="mb-4">
                  • Wider Business Opportunities: Mainland companies can trade
                  anywhere in Dubai and across the UAE, giving you access to a
                  larger market.
                </li>
                <li className="mb-4">
                  • Full Ownership: You can have 100% ownership of your
                  business, providing you with full control and flexibility.
                </li>
                <li className="mb-4">
                  • Flexible Locations: Choose from various locations to set up
                  your business, allowing you to find the best spot for your
                  needs.
                </li>
              </ul>

              <p className="mb-4">
                These benefits make mainland company formation an attractive
                option for entrepreneurs looking to grow and succeed.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                Location flexibility and zero trade restrictions
              </h2>
              <p className="mb-4">
                With a Dubai mainland company, you can trade freely with other
                businesses and have unlimited location options. These companies
                can also offer services to the government and sell directly to
                consumers anywhere in the UAE. Plus, setting up a mainland
                company allows you to open multiple branches, establishing a
                strong presence throughout the Emirates.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                {" "}
                Broad working scope
              </h2>
              <p className="mb-4">
                Mainland businesses can take on a wide range of work. If you
                want to diversify your services within the mainland, simply
                re-register the new business activity with the DED, and you can
                start trading freely.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                Access to lucrative government contracts
              </h2>
              <p className="mb-4">
                A large incentive to set up a mainland business in Dubai is the
                access to valuable government contracts in the UAE. In recent
                years, the Abu Dhabi Executive Council approved AED 17.5bn (USD
                4.76bn) of spending on government projects, including over AED
                4bn on infrastructure. Approximately AED 2bn was allocated for
                education and a combined AED 1.2bn on upgrades to governmental
                and social facilities. As an established mainland company in
                Dubai, you’ll be well-positioned to take advantage of these
                opportunities.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                100% ownership control of mainland business entities
              </h2>
              <p className="mb-4">
                Traditionally, 100% foreign ownership of a UAE business entity
                was only possible under two circumstances:
              </p>
              <ul>
                <li>When setting up in a free zone or </li>
                <li>
                  When establishing a professional services company in the
                  mainland (Sole Establishment or Civil Company)
                </li>
              </ul>
              <p className="mb-4">
                In recent years, HH Sheikh Mohammed bin Rashid Al Maktoum has
                allowed 100% foreign ownership of mainland companies in the UAE.
                This has been a welcome change for prospective overseas
                investors looking to conduct business in the Emirates. This is
                great news for international investors new to the Emirates. 100%
                foreign ownership means business owners can get straight down to
                business, without the need to canvass for an Emirati company or
                individual to act as a partner. 100% foreign ownership of
                mainland UAE business provides incredible potential for the
                UAE’s growth-machine economy to foreign investors. However,
                certain strategic sectors, such as oil and gas, still require a
                local partner.
              </p>
              <img
                src="https://virtuzone.com/wp-content/uploads/2021/12/mainland-company-formation-dubai-980x654.jpeg.webp"
                alt="Dubai Mainland"
                className="mb-4 rounded"
              />
              <h2 className="text-3xl font-bold text-primary  mt-8">
                Switching from free zone to mainland company formation in Dubai
              </h2>
              <p className="mb-4">
                If you’re currently operating within a free zone business
                structure and considering transitioning to a mainland company,
                we’re here to assist you. Over 30,000 companies trade from the
                three largest UAE free zones. Foreign entrepreneurs can also
                benefit from the conveniences of pre-packaged business
                inclusions in free zones. However, this model has limitations.
                While free zone companies serve as an excellent starting point,
                expanding often requires transitioning to a mainland company.
                This switch is vital for your business’s growth. With the right
                UAE national sponsor or company formation specialist, moving
                from a free zone to the mainland is both a strategic and
                manageable decision.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                Your checklist for mainland business setup in Dubai
              </h2>
              <p className="mb-4">
                It’s time for your business setup checklist. Let’s get your
                venture off to a successful start!
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                1. Choose your business activity
              </h2>
              <p className="mb-4">
                The first thing to decide before you set up a company in the UAE
                mainland is the industry in which you will trade. There are
                thousands of permitted business activities as listed by the
                Department of Economic Development (DED). Some of these include
                trading, agriculture, hospitality and manufacturing. Unlike many
                free zone businesses that are restricted from certain activities
                based on their location, mainland businesses are free to trade
                in any of the 2000+ DED-listed activities.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                2. Find the ideal location for your business in the UAE
              </h2>
              <p className="mb-4">
                Once you’ve decided your business activity, the next step is to
                decide where you wish to operate. Businesses on the UAE mainland
                incur no restrictions on where they can set up. The right
                location will depend on many factors such as budgeting and your
                chosen business activity. Should your company rely on imports
                and exports, then setting up near one of the UAE’s busy ports –
                Jebel Ali, Mina Zayed or Mina Khalid – makes perfect business
                sense. Another advantage of mainland business setup in Dubai is
                the ease of opening branch offices. This means businesses are
                not limited to one location and can build a large local presence
                over time.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                3. Determine your business legal structure
              </h2>
              <p className="mb-4">
                From a legal standpoint, there are several types of businesses
                that can be set up by foreign entrepreneurs on the UAE mainland.
                The most common mainland business structure is a Limited
                Liability Company (LLC). An LLC is an independent legal entity
                owned by two or more shareholders. A business wishing to trade
                under a commercial or industrial licence (including industrial
                and manufacturing activities) must form an LLC to set up a
                company in the UAE mainland. This would require a local sponsor.
                By contrast, setting up a professional service company does not
                require a foreign sponsor and can be 100% foreign-owned. More on
                this next!
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                4. Obtain a local sponsor or local service agent
              </h2>
              <p className="mb-4">
                Previously, foreign entrepreneurs could only manage mainland
                business setup in Dubai by partnering with either a sponsor or
                local service agent. If trading under a commercial or industrial
                licence as an LLC then a local sponsor is required. Your local
                sponsor can either be a UAE national or a UAE-based company. In
                both cases, the local sponsor will own 51% of the business.
              </p>
              <p>
                FLC can provide you with a Corporate Nominee to act as your
                Local Partner. This allows you to retain 100% operational and
                financial control of the business and protects you against any
                risk. When setting up a professional company in the mainland,
                only a local service agent (LSA) is required. The LSA will not
                own any share of the business and will only act as a
                representative in all administrative dealings and with the
                government.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                5. Name your company
              </h2>
              <p className="mb-4">
                Deciding on a company trade name that conveys your brand and
                professional values is one of the most important business
                decisions an entrepreneur can make. In the UAE, there are
                several considerations to keep in mind. Offensive language,
                religious references or inferences to other organisations are
                all forbidden. Only full personal names can be included in your
                company trade name. When it comes to your company trade name in
                different languages, all names must be written as they are
                sounded out, rather than translated. To know all the guidelines
                on naming your company, check our Choosing a Company Name in the
                UAE guide.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                6. Apply for a mainland trade licence
              </h2>
              <p className="mb-4">
                Now it’s time to apply for a mainland trade licence with the
                Department of Economic Development. Several documents are
                required as part of a trade license application. These include a
                licence application; memorandum of sponsor arrangements; and
                ownership percentage among all partners and shareholder visas,
                just to name a few.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                7. Secure your office space
              </h2>
              <p className="mb-4">
                Once you’ve obtained a business trading licence, it’s time to
                secure an office space. In the UAE mainland, serviced offices
                are usually owned and maintained by a third party and contain
                everything you need to move in immediately. Desks, phone and
                internet access and reception services are some usual
                inclusions. Your lease payment would usually cover rent, use of
                office equipment and utility bills. The other end of the
                spectrum is a ‘shell and core’ type of office space. This
                usually requires a full fit-out and decoration, with bills on
                top of rent costs. A middle ground exists too, with office
                spaces pre-fitted, where the business owner simply provides
                their own equipment and pays bills separately.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                8. Apply for relevant visas
              </h2>
              <p className="mb-4">
                There’s no limit with mainland visa applications for business
                owners in the UAE mainland. But the number of visas applied for
                should correspond with the amount of office space required.
                Usually, 100 sq. ft. of office or warehouse space per visa is
                the rule. There are circumstances where this may not be
                applicable. For example, if the business is a domestic cleaning
                company with 500+ employees working remotely, the office space
                needs would be decidedly smaller compared to a textiles or
                manufacturing company. As the owner of a UAE mainland company,
                you will also be able to sponsor dependents – such as family
                members and domestic staff (maids or drivers, for example) for
                their visas as well. Foreign entrepreneurs who establish
                business on the UAE mainland are also entitled to an investment
                visa which gives them and their families the right to live and
                work in the UAE for up to three years.
              </p>
              <h2 className="text-3xl font-bold text-primary  mt-8">
                9. Partner with a Company Setup Consultant
              </h2>
              <p className="mb-4">
                Setting up a mainland company in the UAE requires a deep
                understanding of the legal and company formation process.
                Working with UAE-based business setup consultants helps take the
                stress out of setting up a company for overseas entrepreneurs. A
                business consultant can collaborate with you and understand your
                business goals. This will help you feel confident in starting a
                successful business on the Duabi mainland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
