import { prismaClient } from "../src";


async function seed() {
    await prismaClient.user.create({
        data: {
            id: "5",
            email: "test@test.com"
        }
    })

    const website = await prismaClient.website.create({
        data:{
            url: "https://test.com",
            userId: "5",
        }
    })

    const validator = await prismaClient.validator.create({
        data: {
            publicKey: "0x123253423",
            location: "Delhi",
            ip: "127.0.0.1",
        }
    })

    await prismaClient.websiteTick.create({
        data: {
            websiteId: website.id,
            status: "Good",
            createdAt: new Date(),
            latency: 100,
            validatorId:  validator.id, // Assuming you want to link the tick to the validator
        }
    })

    await prismaClient.websiteTick.create({
        data: {
            websiteId: website.id,
            status: "Good",
            createdAt: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
            latency: 100,
            validatorId: validator.id, // Assuming you want to link the tick to the validator
        }
    })

   await prismaClient.websiteTick.create({
        data: {
            websiteId: website.id,
            status: "Bad",
            createdAt: new Date(Date.now() - 1000 * 60 * 20), // 20 minutes ago
            latency: 100,
            validatorId: validator.id, // Assuming you want to link the tick to the validator
        }
    })
}

seed();