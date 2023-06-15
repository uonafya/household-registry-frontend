import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

const MuteHouseHold = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="HouseHold Registration" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        {/* Ttest  */}
        <div className="col-span-1">
          <div className="overflow-hidden rounded-md bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-gray-900 text-lg font-medium leading-6">
               MuteHouseHold
              </h3>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MuteHouseHold;
