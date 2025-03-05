import { FaBookOpen, FaDonate } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <p
          className="text-md md:text-xl md:mt-16 item-center"
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
        <div className="max-w-8xl mx-auto mt-10 py-12">
          <h2 className="text-4xl font-extrabold md:mb-12 flex justify-start  ">
            Must Know
          </h2>
          <div className="flex justify-center display-grid gap-20 grid-cols-3">
            <div className="flex justify-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-200px  padding-10px ">
              Your physical presence will be required during the application, so
              you can meet the bank representative, sign the application form
              and submit the required documents.
            </div>
            <div className="flex justify-content-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-200px padding-10px ">
              Online application: If you are outside of the UAE, you can
              initiate your bank account opening through an online process. Your
              presence will still be required either via a phone call or an
              online meeting. Once the application is approved, you will be
              required by the bank to come to the UAE to sign the account
              opening form.
            </div>
            <div className="flex justify-content-center bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-200px padding-10px ">
              The standard processing time can take 14 days for digital
              applications or 25 working days or more for in-person
              applications, depending on the complexity of the application.
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto md:py-0">
        <div className=" mx-auto  py-12">
          <h2 className="text-4xl font-extrabold flex justify-start">
            Our Bank Account Opening in UAE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto  items-center justify-center">
            <div className="flex items-center">
              <FaBookOpen className="text-6xl mr-4 text-primary" />
              <h2 className="text-3xl">Client assessment</h2>
            </div>
            <p className="text-md md:mt-6 md:ml-15">
              Our team will assess your company’s activities, operations,
              expected annual turnover and initial funds available for opening
              the account. Based on this information, our team will recommend
              the most suitable bank for your business.
            </p>
          </div>
          <div className="bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto items-center justify-center">
            <div className="flex items-center">
              <FaDonate className="text-6xl mr-4 text-primary" />
              <h2 className="text-3xl">Liaising with the bank</h2>
            </div>
            <p className="text-md md:mt-6 md:ml-15">
              In case the bank requires further information or processes, we
              will communicate with them and assist you in completing the
              additional requirements. In some instances, if you are not
              available to meet the Contact Point Verification Agent, we can
              also act as your representative.
            </p>
          </div>
          <div className="bg-gray-100 border-2 border-gray-200 rounded-md p-4 h-auto  items-center justify-center">
            <div className="flex items-center">
              <FaDonate className="text-6xl mr-4 text-primary" />
              <h2 className="text-3xl">Documentation</h2>
            </div>
            <p className="text-md md:mt-6 md:ml-15">
              We will assist you in collecting and preparing the documents
              required by the bank. These could include:
              <li>Certified company incorporation documents</li>
              <li>Company profile</li>
              <li>Valid passport copies of all shareholders</li>
              <li>Personal profiles (CVs) of all shareholders</li>
              <li>
                6 months personal/business bank statements of all shareholders
              </li>
              <li>
                Emirates ID and residence visa copy of at least the signatory
              </li>
              <li>A copy of your Ejari/proof of UAE residential address</li>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
