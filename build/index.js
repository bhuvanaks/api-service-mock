"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 3001;
// clouds
app.get("/v1/clouds", (req, res) => {
    const response = {
        results: [
            {
                cloudId: "123",
                provider: "aws",
                regions: [
                    {
                        id: "us-east-1",
                        name: "US East 1",
                        title: "N. California",
                        available: "Online",
                    },
                ],
            },
        ],
    };
    res.json(response);
});
// region info
app.get("/v1/clouds/:provider/regions/:region", (req, res) => {
    const response = {
        cloudId: "123",
        provider: "aws",
        regions: [
            {
                id: "us-east-1",
                name: "US East 1",
                title: "N. California",
                available: "Online",
            },
        ],
    };
    res.json(response);
});
// users
app.get("/v1/users/:userId", (req, res) => {
    const response = {
        userId: "u-1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@aerospike.com",
        picture: "https://picsum.photos/id/237/300/300",
        organizationIds: ["o-1"],
    };
    res.json(response);
});
app.put("/v1/users/:userId", (req, res) => {
    const response = {
        userId: "u-1",
        firstName: "Jane",
        lastName: "Deer",
        email: "john.doe@aerospike.com",
    };
    res.json(response);
});
app.put("/v1/users/:userId/profilePicture", (req, res) => {
    const response = {
        userId: "u-1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@aerospike.com",
    };
    res.json(response);
});
// organization
app.get("/v1/organizations/:organizationId", (req, res) => {
    const { organizationId } = req.params;
    const response = {
        id: "o-1",
        name: "dbaas_org",
        description: "Organization for dbaas",
    };
    res.send(response);
});
app.post("/v1/organizations", (req, res) => {
    const response = {
        id: "o-1",
        name: "dbaas-org",
        description: "Organization for dbaas",
    };
    res.send(response);
});
// databases
app.get("/v1/organizations/:organizationId/databases", (req, res) => {
    const { organizationId } = req.params;
    const response = {
        limit: 10,
        offset: 0,
        pages: 0,
        results: [
            {
                id: "1",
                status: {
                    value: "RUNNING",
                },
                info: {
                    name: "SampleDatabase",
                    provider: "AWS",
                    region: "us-east-1",
                    createdAt: "2015-07-20T15:49:04-07:00",
                    lastModifiedAt: "2015-07-20T15:49:04-07:00",
                },
                health: "HEALTHY",
                utilization: [
                    {
                        metric: {
                            name: "reads",
                            units: "",
                        },
                        value: 12,
                        period: "10m",
                        change: 10,
                    },
                    {
                        metric: {
                            name: "writes",
                            units: "",
                        },
                        value: 12,
                        period: "10m",
                        change: 10,
                    },
                    {
                        metric: {
                            name: "storage",
                            units: "GB",
                        },
                        value: 104.74,
                    },
                    {
                        metric: {
                            name: "dataTransfer",
                            units: "",
                        },
                        value: 0,
                    },
                ],
                apiKeys: [{
                        id: '44e128a5-ac7a-4c9a-be4c-224b6bf81b2',
                        name: 'root',
                    }, {
                        id: '44e128a5-ac7a-4c9a-be4c-fsd3rsdfefd',
                        name: 'administrators',
                    }, {
                        id: '44e128a5-ac7a-4c9a-be4c-224b6bf8231',
                        name: 'customers',
                    }]
            },
            {
                id: "2",
                status: {
                    value: "CREATING",
                },
                info: {
                    name: "SampleLongName",
                    provider: "AWS",
                    region: "us-east-1",
                    createdAt: "2015-07-20T15:49:04-07:00",
                    lastModifiedAt: "2015-07-20T15:49:04-07:00",
                },
                health: "UNHEALTHY",
                utilization: [
                    {
                        metric: {
                            name: "reads",
                            units: "",
                        },
                        value: 3,
                        period: "10m",
                        change: 10,
                    },
                    {
                        metric: {
                            name: "writes",
                            units: "",
                        },
                        value: 3,
                        period: "10m",
                        change: 10,
                    },
                    {
                        metric: {
                            name: "storage",
                            units: "GB",
                        },
                        value: 104.74,
                    },
                    {
                        metric: {
                            name: "dataTransfer",
                            units: "",
                        },
                        value: 0,
                    },
                ],
                apiKeys: [{
                        id: '44e128fd-ac7a-4c9a-be4c-224b6bf81b20',
                        name: 'root',
                    }, {
                        id: '3424fsfg-ac7a-4c9a-be4c-224b6bf81b20',
                        name: 'administrators',
                    }]
            },
            {
                id: "3",
                status: {
                    value: "UPDATING",
                },
                info: {
                    name: "Another_Sample",
                    provider: "AWS",
                    region: "us-east-1",
                    createdAt: "2015-07-20T15:49:04-07:00",
                    lastModifiedAt: "2015-07-20T15:49:04-07:00",
                },
                health: "HEALTHY",
                utilization: [
                    {
                        metric: {
                            name: "reads",
                            units: "",
                        },
                        value: 4,
                        period: "10m",
                        change: 10,
                    },
                    {
                        metric: {
                            name: "writes",
                            units: "",
                        },
                        value: 4,
                        period: "10m",
                        change: 10,
                    },
                    {
                        metric: {
                            name: "storage",
                            units: "GB",
                        },
                        value: 104.74,
                    },
                    {
                        metric: {
                            name: "dataTransfer",
                            units: "",
                        },
                        value: 0,
                    },
                ], apiKeys: []
            },
            {
                id: "4",
                status: {
                    value: "TERMINATING",
                },
                info: {
                    name: "Max_characters_really_long_name",
                    provider: "AWS",
                    region: "us-east-1",
                    createdAt: "2015-07-20T15:49:04-07:00",
                    lastModifiedAt: "2015-07-20T15:49:04-07:00",
                },
                health: "UNKNOWN",
                utilization: [
                    {
                        metric: {
                            name: "reads",
                            units: "",
                        },
                        value: 5,
                        period: "10m",
                        change: 10,
                    },
                    {
                        metric: {
                            name: "writes",
                            units: "",
                        },
                        value: 5,
                        period: "10m",
                        change: 10,
                    },
                    {
                        metric: {
                            name: "storage",
                            units: "GB",
                        },
                        value: 104.74,
                    },
                    {
                        metric: {
                            name: "dataTransfer",
                            units: "",
                        },
                        value: 0,
                    },
                ],
                apiKeys: []
            },
        ],
    };
    res.json(response);
});
app.get("/v1/organizations/:organizationId/databases/:databaseId", (req, res) => {
    const { organizationId, databaseId } = req.params;
    const response = {
        id: "1",
        status: {
            value: "RUNNING",
        },
        info: {
            name: "SampleDatabase",
            provider: "AWS",
            region: "us-east-1",
            createdAt: "2015-07-20T15:49:04-07:00",
            lastModifiedAt: "2015-07-20T15:49:04-07:00",
        },
        health: "HEALTHY",
        utilization: [
            {
                metric: {
                    name: "reads",
                    units: "",
                },
                value: 12,
                period: "10m",
                change: 10,
            },
            {
                metric: {
                    name: "writes",
                    units: "",
                },
                value: 12,
                period: "10m",
                change: 10,
            },
            {
                metric: {
                    name: "storage",
                    units: "GB",
                },
                value: 104.74,
            },
            {
                metric: {
                    name: "dataTransfer",
                    units: "",
                },
                value: 0,
            },
            {
                metric: {
                    name: "uniqueData",
                    units: "",
                },
                value: 0,
            },
            {
                metric: {
                    name: "nodes",
                    units: "",
                },
                value: 3,
            },
        ],
        apiKeys: [{
                id: '44e128a5-ac7a-4c9a-be4c-224b6bf81b2',
                name: 'Root',
            }, {
                id: '44e128a5-ac7a-4c9a-be4c-fsd3rsdfefd',
                name: 'Administrators',
            }, {
                id: '44e128a5-ac7a-4c9a-be4c-224b6bf8231',
                name: 'Customers',
            }]
    };
    res.send(response);
});
// ApiKey
app.post("/v1/organizations/:organizationId/databases/:databaseId/api-key", (req, res) => {
    const { organizationId, databaseId } = req.params;
    const response = {
        id: '4fsd4543-ac7a-4c9a-be4c-224b6bf8231',
        name: 'Test_Name',
        value: 'KSSNdeVTAkgtVTP9GbAbyxaAHZ3bRoQjjplmrOHlcHod6bLmhFL3lYzfN4U92cqQd5DoVi6DiGv2DUu8QPltTt1VpqRNTtei5Dpp'
    };
    res.send(response);
});
app.delete("/v1/organizations/:organizationId/databases/:databaseId", (req, res) => {
    const { organizationId, databaseId } = req.params;
    const response = {};
    res.send(response);
});
// members
app.get("/v1/organizations/:organizationId/members", (req, res) => {
    const { organizationId } = req.params;
    const response = {
        limit: 0,
        offset: 0,
        pages: 0,
        results: [
            {
                role: "OrgAdmin",
                user: {
                    userId: "u-1",
                    firstName: "John",
                    lastName: "Doe",
                    email: "john.doe@aerospike.com",
                },
            },
            {
                role: "DBViewer",
                user: {
                    userId: "u-2",
                    firstName: "Jane",
                    lastName: "Deer",
                    email: "jane.deer@aerospike.com",
                },
            },
        ],
    };
    res.send(response);
});
app.post("/v1/organizations/:organizationId/members", (req, res) => {
    const { organizationId } = req.params;
    const response = {
        role: "OrgAdmin",
        user: {
            userId: "u-1",
            firstName: "Jane",
            lastName: "Deer",
            email: "jane.deer@aerospike.com",
        },
    };
    res.send(response);
});
app.put("/v1/organizations/:organizationId/members/:userId", (req, res) => {
    const { organizationId, userId } = req.params;
    const response = {
        role: "DBViewer",
        user: {
            userId: "u-1",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@aerospike.com",
        },
    };
    res.send(response);
});
app.delete("/v1/organizations/:organizationId/members/:userId", (req, res) => {
    const { organizationId, userId } = req.params;
    const response = {};
    res.send(response);
});
// catch all
app.get("*", (req, res) => {
    res.send({});
});
app.post("*", (req, res) => {
    res.send({});
});
app.patch("*", (req, res) => {
    res.send({});
});
app.delete("*", (req, res) => {
    res.send({});
});
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
