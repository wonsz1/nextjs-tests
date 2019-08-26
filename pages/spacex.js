import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const Index = props => (
        <Layout>
            <p> SpaceX missions </p>
            <ul>
                {props.show.map(show => (
                    <li key={show.mission_id}>
                        <Link href="/p/[id]" as={`/p/${show.mission_id}`}>
                            <a>{show.mission_name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await res.json();

    console.log(`Show data fetched. count ${data.length}`);

    return {
        show: data
    }
}

export default Index