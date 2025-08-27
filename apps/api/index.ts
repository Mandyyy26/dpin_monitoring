import express from "express"
import { authMiddleware } from "./middleware";
import { prismaClient } from "db/client";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/v1/website", authMiddleware, async (req,res) => {
    try {
        const userId = req.userId!;
        const { url } = req.body;

        const data = await prismaClient.website.create({
            data: {
                userId,
                url
            }
        })

        res.json({
            id: data.id
        })
    } catch (error) {
        console.error('Error creating website:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.get("/api/v1/website/status", authMiddleware, async (req,res) => {
    const websiteId = req.query.websiteId as string; ;
    const userId = req.userId!;

    const data = await prismaClient.website.findFirst({
        where: {
            id: websiteId,
            userId,
            disabled: false
        },
        include: {
            ticks: true
        }
    })

    res.json(data)
})

app.get("/api/v1/websites", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId!;

        const websites = await prismaClient.website.findMany({
            where: {
                userId,
                disabled: false
            },
            include: {
                ticks: true
            },
        })

        res.json(websites)
    } catch (error) {
        console.error('Error fetching websites:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.delete("/api/v1/website/", authMiddleware, async (req, res) => {
    const websiteId = req.body.websiteId as string;
    const userId = req.userId!;

    await prismaClient.website.update({
        where: {
            id: websiteId,
            userId,
        },
        data: {
            disabled: true
        }   
    })
    res.json({
        message: "Website deleted successfully"
    })
})

console.log("API server is running on port 8001");

app.listen(8001);