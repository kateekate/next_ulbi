import A from "./A";
import Head from "next/head";


const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"you, kate" + keywords}></meta>
        <title>Users</title>
      </Head>

      <div className="navbar">
        <A href={'/'} text='Main page' />
        <A href={'/users'} text='Users' />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
        .navbar {
        padding: 15px;
        background-color: #FDA4BA;
        color: #242526;
        border: 2px solid violet;
        }
      `}
      </style>
    </>
  )
}

export default MainContainer