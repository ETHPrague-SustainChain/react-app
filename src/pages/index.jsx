import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <main>
        <h1>ETHPrague-app</h1>
        <Link to="/create-package/creating">Create package</Link>
      </main>
    </>
  );
}