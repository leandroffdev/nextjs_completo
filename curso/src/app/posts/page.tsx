// 'use client'

interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[]
}

export default async function Posts() {
    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();

    return(
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>
            <div className="flex flex-col gap-4 mx-2">
                {
                    data.posts.map( post => (
                        <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                            <h2 className="font-bold">{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}