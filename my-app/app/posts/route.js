import { NextResponse } from "next/server";

export const posts = [
    {
    "id": 1,
    "title": "Learning JavaScript",
    "content": "JavaScript is a versatile language...",
    "author": "John Doe",
    "createdAt": "2024-08-15T08:00:00Z",
    "tags": ["javascript", "programming"]
  },
  {
    "id": 2,
    "title": "Understanding React",
    "content": "React is a powerful library for building UIs...",
    "author": "Jane Smith",
    "createdAt": "2024-08-16T09:00:00Z",
    "tags": ["react", "javascript"]
  },
  {
    "id": 3,
    "title": "Entry3",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["odd", "prime"]
  },
  {
    "id": 4,
    "title": "Entry4",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["even"]
  },
    {
    "id": 5,
    "title": "Entry5",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["odd", "prime"]
  },
  {
    "id": 6,
    "title": "Entry6",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["even"]
  },
    {
    "id": 7,
    "title": "Entry7",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["odd", "prime"]
  },
  {
    "id": 8,
    "title": "Entry8",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["even"]
  },
    {
    "id": 9,
    "title": "Entry9",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["odd"]
  },
  {
    "id": 10,
    "title": "Entry10",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["even"]
  },
    {
    "id": 11,
    "title": "Entry11",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["odd", "prime"]
  },
  {
    "id": 12,
    "title": "Entry12",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["even"]
  },
    {
    "id": 13,
    "title": "Entry13",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["odd", "prime"]
  },
  {
    "id": 14,
    "title": "Entry14",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["even"]
  },
    {
    "id": 15,
    "title": "Entry15",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["odd"]
  },
  {
    "id": 16,
    "title": "Entry16",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["even"]
  },
    {
    "id": 17,
    "title": "Entry17",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["odd", "prime"]
  },
  {
    "id": 18,
    "title": "Entry18",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["even"]
  },
    {
    "id": 19,
    "title": "Entry19",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["odd", "prime"]
  },
  {
    "id": 20,
    "title": "Entry20",
    "content": "Task 4 content",
    "author": "Adam",
    "createdAt": "2026-01-25T09:00:00Z",
    "tags": ["even"]
  }
];


export async function GET(request, {params}) {
    const { searchParams } = new URL(request.url);
    const tagsParam = searchParams.get("tags");
    var pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");
    
    var found = posts;

    if (tagsParam) {
        if (tagsParam.length > 0) {
            const tagslist = tagsParam.split(",");
            found = posts.filter(post => tagslist.every(tag => post.tags.includes(tag)));    
        }
    }

    if (!(pageParam)) {
        pageParam = 1;
    }

    if (limitParam) {
        found = found.slice((pageParam-1)*limitParam, pageParam*limitParam);
    }

    return NextResponse.json(found, {status: 200});
}