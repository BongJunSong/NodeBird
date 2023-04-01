import "antd/dist/antd.css";
import Head from "next/head";

interface Props {
  Component: React.ElementType;
}

const App = ({ Component }: Props) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

export default App;
