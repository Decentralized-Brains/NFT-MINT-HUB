
export const GET = async (request) => {
    try {
        return new Response(JSON.stringify({name:"Alfaz"}), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 