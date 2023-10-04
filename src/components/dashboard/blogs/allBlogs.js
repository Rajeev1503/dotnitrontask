import { useSelector } from "react-redux";
import posts from "./tableData.json";
import Link from "next/link";
export default function AllBlogs() {

    const theme = useSelector((state) => state.theme);

  return (
    <div className="w-full">
            <table className={`w-full border ${theme.secondaryBorder}`}>
              <thead>
                <tr className={`${theme.buttonActive} ${theme.primaryBorder}`}>
                  <th className={`${theme.tableCheckList}`}>
                    <input type="checkbox" />
                  </th>
                  <th className={`${theme.tableHead}`}>Title</th>
                  <th className={`${theme.tableHead}`}>Author</th>
                  <th className={`${theme.tableHead}`}>Categories</th>
                  <th className={`${theme.tableHead}`}>Tags</th>
                  <th className={`${theme.tableHead}`}>Status</th>
                  <th className={`${theme.tableHead}`}>Date published</th>
                </tr>
              </thead>
              <tbody>
                {posts.posts.map((post, i) => (
                  <tr key={i}>
                    <td className={`${theme.tableCheckList}`}>
                      <input type="checkbox" />
                    </td>
                    <td className={`${theme.tableBody}`}>
                      <Link href={`/dashboard/blogs/${post.title}-${i}`}>{post.title} #{i}</Link>
                    </td>
                    <td className={`${theme.tableBody}`}>{post.author}</td>
                    <td className={`${theme.tableBody}`}>{post.category}</td>
                    <td className={`${theme.tableBody}`}>{post.tags.map((tag,j)=> (<span key={j}>{tag} </span>))}</td>
                    <td className={`${theme.tableBody}`}>{post.status}</td>
                    <td className={`${theme.tableBody}`}>{post.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  );
} 