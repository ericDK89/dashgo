import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function NotificationNav() {
  return (
    <>
      <div className="flex items-center ml-auto pr-8 border-gray-700 border-r">
        <RiNotificationLine fontSize={20} className="mr-8" />
        <RiUserAddLine fontSize={20} />
      </div>
    </>
  );
}
