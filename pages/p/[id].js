import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';

export default function Post() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>Dynsmic page content</p>
        </Layout>
    );
}