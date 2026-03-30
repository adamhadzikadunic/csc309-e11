import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    
    const name = body.name;
    const age = Number(body.age);
    const preferences = body.preferences;

    const error_response = {"error": []};
    

    if (name === "") {        
        error_response["error"].push("name is required");
    }

    if (Number.isNaN(Number(age))) {
        error_response["error"].push("age must be a number");
    }

    if (typeof preferences !== "object" || preferences === null) {
        error_response["error"].push("preferences is required");
    } 
    else {
        if (typeof preferences["color"] !== "string") {
            error_response["error"].push("a preferences color is required");
        }
        if (typeof preferences["hobby"] !== "string") {
            error_response["error"].push("a preferences hobby is required");
        }
    }
    
    if (error_response["error"].length !== 0) {
        return NextResponse.json(error_response,
                                {status: 400}
                            );
    }

    return NextResponse.json({"message": `Hello, ${name}!`,
                              "ageMessage": `You're ${age} years old.`, 
                              "offerMessage": body.age>=18 ? "You're eligible for our special offers!" : null,
                              "preferencesMessage": `Your favorite color is ${preferences["color"]} and you enjoy ${preferences["hobby"]}.`
                            }, 
                            {status: 200}
                        );
}
