import { NextResponse } from "next/server";
import { posts } from "../route";


export async function GET(request, {params}) {
    const promisedParams = await params;

    const id = Number(promisedParams.id);    
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, {status: 200});
}