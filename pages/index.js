import Head from "next/head";
import UsersList from "components/UsersList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Datasintesa Test</title>
        <meta name="description" content="Mini Project User List" />
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="container">
        <h1 className="headingPrimary">Datasintesa</h1>
      </header>

      {/* Main */}
      <main className="main">
        <div className="container">
          <UsersList />
        </div>
      </main>
    </>
  );
}
