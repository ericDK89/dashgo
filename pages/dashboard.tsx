import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: "#616480",
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: "#4b4d63",
    },
    axisTicks: {
      color: "#4b4d63",
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }];

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex w-full my-6 max-w-[1480px] mx-auto px-6">
        <Sidebar />
        <div
          className="flex-1 grid xl:grid-cols-2 md:grid-cols-1 gap-4 
          min-w-[320px] items-start"
        >
          <div className="p-6 sm:p-8 bg-gray-800 rounded-lg h-72">
            <p className="pb-4">Inscritos da semana</p>
            <Chart options={options} series={series} type="area" height={160} />
          </div>
          <div className="p-6 sm:p-8 bg-gray-800 rounded-lg h-72">
            <p className="pb-4">Taxa de abertura</p>
            <Chart options={options} series={series} type="area" height={160} />
          </div>
        </div>
      </div>
    </div>
  );
}
