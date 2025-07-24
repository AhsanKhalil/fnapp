import { verifyToken } from '@/lib/verifyToken';

export async function getServerSideProps({ req }) {
  const user = verifyToken(req);
  if (!user || user.role !== 'Admin') {
    return { redirect: { destination: '/auth', permanent: false } };
  }
  return { props: { user } };
}

export default function AdminDashboard({ user }) {
  return <h1 className="p-6 text-xl">Welcome Admin: {user.email}</h1>;
}
