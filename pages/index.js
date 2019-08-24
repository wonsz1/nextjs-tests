import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const DynamicPostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)


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
    </Layout>
);

export default Index;