import { FaGlobe } from "react-icons/fa";

const Residence = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-12 ">
      <div className="mt-8 md:mt-0 ">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 flex items-center justify-center mt-8">
            <FaGlobe color="red" size={100} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4 mt-8">
          Family Residency Visas
        </h2>
        <p className="text-lg mb-8 text-center">
          (Please note that the information below only applies to residents of
          the UAE).
        </p>
        <div className="flex flex-col md:flex-row items-center ml-40 mt-20 ">
          <div className="md:w-1/2 mt-8 md:mt-30 md:pl-20">
            <p className="text-md  mb-4">
              If your family members are outside the UAE, you must first apply
              for an entry residence visa. After they arrive you then have up to
              30 days to apply for the residence stamp.
            </p>
            <p className="text-md mb-8">
              Your monthly salary should not be less than AED 4,000 (or AED
              3,000 plus accommodation). If you wish to sponsor a residence visa
              for your parents, your minimum monthly salary should be AED 20,000
              (or AED 19,000 plus a two-bedroom accommodation).
            </p>

            <p className="text-bold">Required documentation includes:</p>
            <ul className="list-disc pl-5 text-md mb-8">
              <li className="mt-4">Typed application form.</li>
              <li>
                Salary certificate (for government employees) or attested work
                contract (other employees).
              </li>
              <li>
                Three months of most recent bank statement for long-time
                residents. New residents may submit the most recent month but
                must have a bank letter confirming salary transfer.
              </li>
              <li>
                Attested tenancy contract, Emirates ID card, and labour card.
              </li>
              <li>
                Marriage certificate that has been attested by UAE authorities
                (for UAE marriages) or in your home country for spouse
                sponsorship.
              </li>
              <li>
                Passports (original) and copies of both sponsor and family
                member(s).
              </li>
              <li>
                Medical check-up report of spouse or children over 15-years of
                age from an authorised hospital or clinic.
              </li>
              <li>Three passport photos per family member.</li>
            </ul>
            <p className="text-md mt-4">
              Please note that for your family member’s residence visa to remain
              valid he or she must not be out of the UAE for more than six
              months. In the case where a Muslim expatriate has married more
              than one wife, he can only obtain one residence visa.
            </p>

            <button className="flex items-center gap-2 px-8 py-4 mt-6 border-2 bg-primary border-white rounded-none transition-all  text-white hover:bg-muted-foreground hover:text-primary-foreground">
              Get Started
            </button>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://virtuzone.com/wp-content/uploads/2021/10/Mainland-Visa2-min.png.webp"
              alt="UAE Free Zone"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residence;
