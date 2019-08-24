import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

export default () => {
    const router = useRouter();

    return (
        <Layout>
            <h1>{ router.query.title }</h1>
            <p>This is content.</p>
        </Layout>
    )
}