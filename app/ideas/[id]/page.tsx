
import { IdeaData } from '@/config/idea-list';

type InspirationProps = {
    imageUrl: any,
    title: string,
    category: string,
    description: string,
    comment: string
}

export default function DetailInspiration({ params }: { params: { id: string } }) {
    const { id } = params;
    const idea = IdeaData.find(idea => idea.id === id);
    
    if (!idea) {
        return (
            <div>
                <p>Not found</p>
            </div>
        );
    }

    return (
        <>
            <div className="">
                <h1>{idea.title}</h1>
                <p>{idea.description}</p>
                <p>{idea.category}</p>
                <div>{idea.comment}</div>
            </div>
        </>
    )
}

