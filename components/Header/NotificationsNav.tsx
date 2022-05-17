import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationNav() {
  return (
    <>
      <div className="flex items-center ml-auto sm:pr-6 md:pr-8 border-gray-700 border-r">
        <RiNotificationLine fontSize={20} className=" mr-6 sm:mr-8" />
        <RiUserAddLine fontSize={20} className=" mr-6 sm:mr-0" />
      </div>
    </>
  );
}
