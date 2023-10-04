export default function DashboardLayout({ children }) {
  return (
    <div className="h-full text-black p-8">
      <h1 className="text-3xl">Dashboard</h1>
      <div>{children}</div>
    </div>
  );
}
