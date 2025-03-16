import {
  FaBookOpen,
  FaCalculator,
  FaCameraRetro,
  FaDollarSign,
  FaPercentage,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-md md:text-lg md:mt-16 mt-8 text-center"
          style={{
            textAlign: "justify",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Opening a business bank account in the UAE can be a challenging
          process, as you need to go through several strict compliance
          procedures mandated by the UAE Central Bank. With our bank account
          opening service, this doesn’t have to be the case. Our team will
          assist you in opening a bank account, guiding you through each stage
          and ensuring you have a hassle-free experience.
        </p>
        <div className="max-w-8xl mx-auto md:mt-4 mt-12 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex md:justify-start justify-center  text-primary mb-8">
            Our Accounting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <div className="flex items-center mb-2">
                <FaBookOpen className="text-5xl mr-4 text-primary" />
                <h2 className="text-2xl font-bold">Bookkeeping</h2>
              </div>
              <p>
                Our accountants will take away the burden of recording and
                updating all your daily financial transactions and performing
                bank reconciliations.
              </p>
            </div>
            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <div className="flex items-center mb-2">
                <FaCalculator className="text-5xl mr-4 text-primary" />
                <h2 className="text-2xl font-bold mb-2">
                  Account Reconciliation
                </h2>
              </div>
              <p>
                We will help you ensure the figures in your general ledger are
                correct and up-to-date and that the balances match.
              </p>
            </div>
            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-[800]">
              <div className="flex items-center mb-2">
                {" "}
                <FaDollarSign className="text-5xl mr-4 text-primary" />
                <h2 className="text-2xl font-bold mb-2">Financial Reporting</h2>
              </div>

              <p className="mb-4">
                We generate financial reports to help you determine how your
                business is performing. These include the following:
              </p>
              <ul className="list-disc list-inside">
                <li>Trial balance</li>
                <li>Profit and loss statement</li>
                <li>Balance sheet</li>
                <li>Cash flow statement</li>
                <li>General ledgers</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <div className="flex items-center mb-2">
                {" "}
                <FaPercentage className="text-5xl mr-4 text-primary" />
                <h2 className="text-2xl font-bold mb-2">Payroll Management</h2>
              </div>
              <p>
                We will manage your company’s monthly payroll, including
                generating reports, gratuity calculations and pay slips.
              </p>
            </div>
            <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto">
              <div className="flex items-center mb-2">
                {" "}
                <FaCameraRetro className="text-5xl mr-4 text-primary" />
                <h2 className="text-2xl font-bold mb-2">Audit Support</h2>
              </div>
              <p>
                We will assist you in completing the auditing process for your
                financial year and ensure your records are maintained per
                International Financial Reporting Standards (IFRS).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
