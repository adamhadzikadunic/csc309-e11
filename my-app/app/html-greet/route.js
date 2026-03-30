export async function GET(request) {
    const url = new URL(request.url);
    const name = url.searchParams.get("name");
    
    const named_html = 
    `<html>
        <body>
            <h1>Hello, ${name}!</h1>
            <p>This is a personalized HTML response.</p>
        </body>
    </html>`;

    const default_html =
    `<html>
        <body>
            <h1>Hello, World!</h1>
            <p>This is the default HTML response.</p>
        </body>
    </html>`

    var chosen_html = null;
    if (name) {
        chosen_html = named_html;
    }
    else {
        chosen_html = default_html;
    }
    
    return new Response(chosen_html, 
            {headers: {"content-type": "text/html"}}
        )
}