import { NextApiRequest, NextApiResponse } from "next";
import whois from "whois-json";

interface ErrorResponse {
    error: string;
}

interface WhoisApiResponse {
    [key: string]: any; // Define the properties of the WHOIS response
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<WhoisApiResponse | ErrorResponse>
) {
    const { domain } = req.query;

    if (typeof domain !== "string") {
        return res.status(400).json({ error: "Invalid domain name" });
    }

    try {
        const result = await whois(domain);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
