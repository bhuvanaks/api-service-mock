import express, { Request, Response } from "express";
import cors from "cors";
import {
  ApiError,
  DatabaseListItem,
  GetCloudsApiResponse,
  GetOrganizationDatabasesApiResponse,
  GetProviderRegionInfoApiResponse,
  GetOrganizationMembersApiResponse,
  OrganizationMember,
  User,
  UserDetails,
  Organization,
  DatabaseApiKeyResponse,
} from "./types";
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// clouds
app.get(
  "/v1/clouds",
  (req: Request, res: Response<GetCloudsApiResponse>): void => {
    const response: GetCloudsApiResponse = {
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
  }
);

// region info
app.get(
  "/v1/clouds/:provider/regions/:region",
  (req: Request, res: Response<GetProviderRegionInfoApiResponse>): void => {
    const response: GetProviderRegionInfoApiResponse = {
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
  }
);

// users
app.get(
  "/v1/users/:userId",
  (req: Request, res: Response<UserDetails>): void => {
    const response: UserDetails = {
      userId: "u-1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@aerospike.com",
      picture: "https://picsum.photos/id/237/300/300",
      organizationIds: ["o-1"],
    };
    res.json(response);
  }
);

app.put("/v1/users/:userId", (req: Request, res: Response<User>): void => {
  const response: User = {
    userId: "u-1",
    firstName: "Jane",
    lastName: "Deer",
    email: "john.doe@aerospike.com",
  };
  res.json(response);
});

app.put(
  "/v1/users/:userId/profilePicture",
  (req: Request, res: Response<User>): void => {
    const response: User = {
      userId: "u-1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@aerospike.com",
    };
    res.json(response);
  }
);

// organization
app.get(
  "/v1/organizations/:organizationId",
  (req: Request, res: Response<Organization>): void => {
    const { organizationId } = req.params;

    const response: Organization = {
      id: "o-1",
      name: "dbaas_org",
      description: "Organization for dbaas",
    };
    res.send(response);
  }
);

app.post(
  "/v1/organizations",
  (req: Request, res: Response<Organization>): void => {
    const response: Organization = {
      id: "o-1",
      name: "dbaas-org",
      description: "Organization for dbaas",
    };
    res.send(response);
  }
);

// databases
app.get(
  "/v1/organizations/:organizationId/databases",
  (req: Request, res: Response<GetOrganizationDatabasesApiResponse>): void => {
    const { organizationId } = req.params;
    const response: GetOrganizationDatabasesApiResponse = {
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
  }
);

app.get(
  "/v1/organizations/:organizationId/databases/:databaseId",
  (req: Request, res: Response<DatabaseListItem>): void => {
    const { organizationId, databaseId } = req.params;

    const response: DatabaseListItem = {
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
  }
);

// ApiKey
app.post("/v1/organizations/:organizationId/databases/:databaseId/api-key",
  (req: Request, res: Response<DatabaseApiKeyResponse>) => {
    const { organizationId, databaseId } = req.params;
    const response = {
      id: '4fsd4543-ac7a-4c9a-be4c-224b6bf8231',
      name: 'Test_Name',
      value: 'KSSNdeVTAkgtVTP9GbAbyxaAHZ3bRoQjjplmrOHlcHod6bLmhFL3lYzfN4U92cqQd5DoVi6DiGv2DUu8QPltTt1VpqRNTtei5Dpp'
    };
    res.send(response);
  });

app.delete(
  "/v1/organizations/:organizationId/databases/:databaseId",
  (req: Request, res: Response): void => {
    const { organizationId, databaseId } = req.params;

    const response: DatabaseListItem = {};
    res.send(response);
  }
);

// members
app.get(
  "/v1/organizations/:organizationId/members",
  (req: Request, res: Response<GetOrganizationMembersApiResponse>): void => {
    const { organizationId } = req.params;

    const response: GetOrganizationMembersApiResponse = {
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
  }
);

app.post(
  "/v1/organizations/:organizationId/members",
  (req: Request, res: Response<OrganizationMember>): void => {
    const { organizationId } = req.params;

    const response: OrganizationMember = {
      role: "OrgAdmin",
      user: {
        userId: "u-1",
        firstName: "Jane",
        lastName: "Deer",
        email: "jane.deer@aerospike.com",
      },
    };
    res.send(response);
  }
);

app.put(
  "/v1/organizations/:organizationId/members/:userId",
  (req: Request, res: Response<OrganizationMember>): void => {
    const { organizationId, userId } = req.params;

    const response: OrganizationMember = {
      role: "DBViewer",
      user: {
        userId: "u-1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@aerospike.com",
      },
    };
    res.send(response);
  }
);

app.delete(
  "/v1/organizations/:organizationId/members/:userId",
  (req: Request, res: Response): void => {
    const { organizationId, userId } = req.params;

    const response = {};
    res.send(response);
  }
);

// catch all

app.get("*", (req: Request, res: Response): void => {
  res.send({});
});

app.post("*", (req: Request, res: Response): void => {
  res.send({});
});

app.patch("*", (req: Request, res: Response): void => {
  res.send({});
});

app.delete("*", (req: Request, res: Response): void => {
  res.send({});
});

app.listen(PORT, (): void => {
  console.log("Listening on port " + PORT);
});
