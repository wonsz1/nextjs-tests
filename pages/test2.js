import Layout from '../components/MyLayout';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown'

export default function Test2() {
    const router = useRouter();
    return (
        <Layout>
            <p>Another test</p>
            <h1>{router.query.id}</h1>
            <div className="markdown">
                <Markdown
                    source={`
                    This is test blog post.
                    we can have a [link](/link).
                    And we can have a title as well.

                    ### This is a title

                    and this is content
                    `}
                />
            </div>
            <style jsx global>{`
                .markdown {
                font-family: 'Arial';
                }

                .markdown a {
                text-decoration: none;
                color: blue;
                }

                .markdown a:hover {
                opacity: 0.6;
                }

                .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
                }
            `}</style>
        </Layout>
    )
}