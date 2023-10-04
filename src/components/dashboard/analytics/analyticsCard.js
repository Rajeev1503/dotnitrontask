import { useSelector } from "react-redux";

export default function AnalyticsCard({data}) {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 border ${theme.primaryBorder} rounded-lg`}
    >
      <div className="text-2xl font-bold">Analytics Card Title</div>
      <div>views this month</div>
      <div>
        <div>
          <p>Total {data.type} : 10</p>
          <p>Total Views : 10</p>
          <p>Total Likes : 10</p>
          <p>Total Comments : 10</p>
        </div>
      </div>
    </div>
  );
}
