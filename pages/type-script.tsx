import Layout from '../components/MyLayout';
import { NextPage } from "next";

type userAgent = {
    userAgent?: string
}

const Page: NextPage<userAgent> = ({ userAgent }) => (
     <h1>Hello world - user agent {userAgent}</h1>
);

 Page.getInitialProps = async ({req}) => {
     const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
     return { userAgent };
 };

export default Page;