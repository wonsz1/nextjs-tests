import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>

        <style jsx>{`
        li {
            list-style: none;
            margin: 5px 0;
        }

        a {
            text-decoration: none;
            color: green;
            font-family: 'Arial';
        }

        a:hover {
            opacity: 0.6;
        }
        `}</style>
    </li>
);

const DynamicPostLink = props => (
    <li>
        <Link href="/s/[id]" as={`/s/${props.id}`}>
            <a>{props.id}</a>
        </Link>
        <style jsx>{`
        li {
            list-style: none;
            margin: 5px 0;
        }

        a {
            text-decoration: none;
            color: blue;
            font-family: 'Arial';
        }

        a:hover {
            opacity: 0.6;
        }
        `}</style>
    </li>
);


const Index = () => (
    <Layout>
        <h1>HEllo World</h1>
        <p>Testing</p>
        <ul>
            <PostLink title="HEllo Next.js" />
            <PostLink title="Test.js" />

            <hr/>
            <p>Dynamic pages</p>
            <DynamicPostLink id="hello-nextjs" />
            <DynamicPostLink id="learn-nextjs" />
            <DynamicPostLink id="deploy-nextjs" />
        </ul>


        <style jsx global>{`
                h1,
                a {
                font-family: 'Arial';
                }

                ul {
                padding: 0;
                }

                li {
                margin: 0 5px;
                }

                a {
                    text-decoration: none;
                    color: red;
                }

                a:hover {
                opacity: 0.6;
                }
            `}</style>
    </Layout>
);

export default Index;