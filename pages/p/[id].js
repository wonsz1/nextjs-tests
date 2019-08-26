import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Mission = props => {
    return (
        <Layout>
            <h1>{props.mission.mission_name}</h1>
            <p>{props.mission.description}</p>
            <p>Payload:</p>
            <p>
            {props.mission.payload_ids.map((item,inedx) => (
                <li>{item}</li>
            ))}
            </p>

            <style jsx>{`
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
                color: blue;
                }

                a:hover {
                opacity: 0.6;
                }
            `}</style>
        </Layout>
    );
}

Mission.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.spacexdata.com/v3/missions/${id}`);
    const mission = await res.json();

    return { mission };
}

export default Mission