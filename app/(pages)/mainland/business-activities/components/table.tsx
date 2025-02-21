import { FaGlobe } from "react-icons/fa";

const Guide = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-full my-20 bg-gray-100">
      <div className="mt-8 md:mt-0">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-red p-2 w-12 h-12 mt-10 flex items-center justify-center">
            <FaGlobe color="red" size={100} />
          </div>
        </div>
        <h2 className="text-3xl text-center font-bold text-primary mb-4">
          Popular Mainland Activities
        </h2>
        <div className="flex justify-center mt-20 max-w-7xl">
          <table className="table-auto border-collapse border border-gray-300 my-10">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">
                  Activity Name
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Gym</td>
                <td className="border border-gray-300 px-4 py-2">
                  Gyms or gymnasiums and health clubs can be formed as either
                  professional licences or LLCs.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Hospitality
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Hospitality licences cover food and beverage activities such
                  as cafes, bars and restaurants.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Import-Export
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  These licences enable you to trade freely with mainland
                  clients without having to use distributors.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Retail</td>
                <td className="border border-gray-300 px-4 py-2">
                  Retail licences cover shops in malls and other outlets and
                  include everything from clothing to books stores.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Event and Entertainment{" "}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Licences include event management and event planning for
                  private and public events.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Manufacturing
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Manufacturing licences cover the manufacture of goods in the
                  UAE for distribution locally and globally
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Healthcare{" "}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Healthcare licences require special approval from the Dubai
                  Heath Authority.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Guide;
