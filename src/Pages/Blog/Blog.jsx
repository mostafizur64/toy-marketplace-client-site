import useTitle from "../../Hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-2 mb-4">
            <div className="card w-96 bg-base-100 shadow-xl w-[500px] h-[300px]">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side? </h2>
                    <p>Refresh tokens allow you to balance your users' access needs with your organization's security practices. </p>
                    <p>Modern web browsers support a number of ways for websites to store data on the user's computer — with the user's permission — then retrieve it when necessary. This lets you persist data for long-term storage, save sites or documents for offline use.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl w-[500px] h-[300px]">
                <div className="card-body">
                    <h2 className="card-title">Compare SQL and NoSQL databases? </h2>
                    <p>SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the 
                        type of data they include and whether they are more fit for multi-row transactions or unstructured data.</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl w-[500px] h-[300px]">
                <div className="card-body">
                    <h2 className="card-title">What is express js? </h2>
                    <p>EXPRESS: Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
                         It's a layer built on the top of the Node js that helps manage servers and routes</p>
                         <p>NODE: Nest.JS is a framework that helps build Node.JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications. </p>
                   
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl w-[500px] h-[300px]">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work? </h2>
                    <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, 
                        sort, group, reshape and modify documents that pass through the pipeline.</p>
 
                </div>
            </div>
        </div>
    );
};

export default Blog;