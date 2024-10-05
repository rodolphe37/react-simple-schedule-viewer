import { useLayoutEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useGetWindowDimensions";
import { Link, NavLink } from "react-router-dom";
import { schedulesContainerStyle, textWhite_blue500 } from "../../utils/style";
import { getSchedulesByEventPlaceIdResponse } from "../../entities/schedules";
import React from "react";

const SchedulesDetails = ({
  scheduleByEventPlace,
  locale,
  isDarkMode,
  withListButtonName,
  withListButtonNameUs,
  withListReturnButton
}: {
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  locale: string;
  isDarkMode?: boolean;
  withListButtonName?: string;
  withListButtonNameUs?: string;
  withListReturnButton?: boolean
}) => {
  const [openCardId, setOpenCardId] = useState<string>("");
  const { width } = useWindowDimensions();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleOpenCard = (id: string) => {
    if (id === openCardId) {
      setOpenCardId("");
    } else {
      setOpenCardId(id);
    }
    sessionStorage.removeItem("isScrolled");
  };

  return (
    <div
      data-testid="schedulesCard"
      style={schedulesContainerStyle(width)}
      className={" w-full min-w-80  min-h-28 mr-10 pr-8 flex flex-col"}
    >
      {withListReturnButton ? <button className="button-schedule"
        style={{
          background: isDarkMode ? "#9ca3af" : "#f9f9f9",
          width: "25%",
          marginBottom: "1vh",
        }}
      >
        <Link
          data-testid="forget-password"
          className={`${textWhite_blue500} text-l `}
          to={`/`}
        >
          {locale === "fr" ? withListButtonName : withListButtonNameUs}
        </Link>
      </button> : null}
      <div className="text-left pb-2 text-blue-600 dark:text-white font-semibold">
        <p>{locale === "fr" ? "Liste des plannings" : "List of schedules"}</p>
      </div>
      {scheduleByEventPlace && scheduleByEventPlace?.schedules?.length > 0 ? (
        <ul className="text-left schedulesCard ">
          {scheduleByEventPlace?.schedules.map((result) => {
            return (
              <div
                style={
                  openCardId === result.id
                    ? {}
                    : { height: "64px", overflow: "hidden" }
                }
                className={`  relative card min-w-[55%] hover:bg-white ${
                  openCardId === result.id ? "bg-white dark:bg-gray-900" : ""
                }  bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-950  shadow-sm rounded-t-md mb-2`}
                key={result.id + result.title}
              >
                <NavLink to={`${result.id}`}>
                  <div
                    onClick={() => {
                      handleOpenCard(result.id);
                    }}
                    className="cursor-pointer text-center flex items-center justify-between"
                  >
                    <div className="flex w-full justify-between p-4 mt-1">
                      <h1>{result.title}</h1>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </ul>
      ) : (
        <div className="flex items-center ">
          <p className="card text-center max-w-md bg-white dark:bg-gray-700/90 p-8 shadow-md rounded-xl mb-8">
            {locale === "fr"
              ? "Aucun - pas de plannings trouvés"
              : "None — no schedules found"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SchedulesDetails;
