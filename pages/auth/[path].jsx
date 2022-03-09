import { useRouter } from "next/router";
import Authentication from "../../components/auth";

export default function Auth() {
  const router = useRouter();
  const path = router.query.path;

  return <Authentication path={path} />;
}
