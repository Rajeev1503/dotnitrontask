import { useSelector } from "react-redux";

export default function TopRankingCard({ data }) {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`w-full p-4 border ${theme.primaryBorder} rounded-lg`}>
      <div className="text-2xl font-bold">Top Ranking {data.type}</div>
      <div>
        {
        data[`${data.type}`].map((data, i) => {
          return (
            <div key={i}>
              <div>{data.title}</div>
            </div>
          );
        })}
        <ol>
          <li></li>
        </ol>
      </div>
    </div>
  );
}
