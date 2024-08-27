export interface Author {
    _id: string;
    name: string;
    email: string;
    image: string;
    role: string;
  }
  
  
  export interface Blog {
    id: any;
    _id: string;
    image: string;
    title: string;
    description: string;
    author: Author | null;  // Using Author interface here
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: string[]; // Assuming relatedBlogs is an array of blog IDs
    skills: string[];
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
  }
  export interface BlogPost {
    success: boolean;
    message: string;
    data: Blog[];  // Array of Blog objects
    errors: string[];
    count: number;
  }
  export interface BlogPostById {
    success: boolean;
    message: string;
    data: Blog;  // Array of Blog objects
    errors: string;
    count: number;
  }
  
  
    
  