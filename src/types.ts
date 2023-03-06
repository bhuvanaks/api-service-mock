export type GetCloudsApiResponse = /** status 200 Successful operation */ {
  results?: CloudProviderInfo[];
};
export type GetCloudsApiArg = void;
export type GetProviderRegionInfoApiResponse =
  /** status 200 Successful operation */ CloudProviderInfo;
export type GetProviderRegionInfoApiArg = {
  /** Provider ID */
  provider: string;
  /** Region ID */
  region: string;
};
export type CreateUserApiResponse = /** status 200 successful operation */ User;
export type CreateUserApiArg = {
  /** create user in Aerospike DBaaS */
  createUserRequest: CreateUserRequest;
};
export type GetUserByIdApiResponse =
  /** status 200 Successful operation */ User;
export type GetUserByIdApiArg = {
  /** ID of user */
  userId: string;
};
export type UpdateUserApiResponse = /** status 200 Successful operation */ User;
export type UpdateUserApiArg = {
  /** userId for the user which needs to be updated */
  userId: string;
  /** Update an existent user in Aerospike DBaaS */
  updateUserRequest: UpdateUserRequest;
};
export type UpdateUserProfilePictureApiResponse =
  /** status 200 Successful operation */ User;
export type UpdateUserProfilePictureApiArg = {
  /** userId for the user which needs to be updated */
  userId: string;
  /** Update user profile picture */
  body: {
    profilePicture?: Blob;
  };
};
export type GetOrganizationApiResponse =
  /** status 200 Successful operation */ Organization;
export type GetOrganizationApiArg = {
  /** ID of organization */
  organizationId: string;
};
export type GetOrganizationMembersApiResponse =
  /** status 200 Successful operation */ OffsetPaginatedList & {
    results?: OrganizationMember[];
  };
export type GetOrganizationMembersApiArg = {
  /** ID of organization */
  organizationId: string;
};
export type InviteUserToOrganizationApiResponse =
  /** status 202 Successful operation */ OrganizationMember;
export type InviteUserToOrganizationApiArg = {
  /** ID of organization */
  organizationId: string;
  /** Invite organization member */
  body: {
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: OrganizationMemberRole;
  };
};
export type UpdateOrganizationMemberApiResponse =
  /** status 200 Successful operation */ OrganizationMember;
export type UpdateOrganizationMemberApiArg = {
  /** ID of organization */
  organizationId: string;
  /** ID of user */
  userId: string;
  body: {
    role?: OrganizationMemberRole;
  };
};
export type RemoveOrganizationMemberApiResponse =
  /** status 204 Successful operation */ undefined;
export type RemoveOrganizationMemberApiArg = {
  /** ID of organization */
  organizationId: string;
  /** ID of user */
  userId: string;
};
export type GetOrganizationDatabasesApiResponse =
  /** status 200 Successful operation */ OffsetPaginatedList & {
    results?: DatabaseListItem[];
  };
export type GetOrganizationDatabasesApiArg = {
  /** ID of organization */
  organizationId: string;
  /** Page size */
  limit: number;
  /** Number of items to skip */
  offset?: number;
  sort?:
    | {
        name?: "ASC" | "DESC";
      }
    | {
        status?: "ASC" | "DESC";
      }
    | {
        createdAt?: "ASC" | "DESC";
      }
    | {
        lastModifiedAt?: "ASC" | "DESC";
      };
  filter?: {
    name?: string;
    health?: DatabaseHealthStatus | DatabaseHealthStatus[];
  };
};
export type CreateDatabaseApiResponse =
  /** status 202 Successful operation */ Database;
export type CreateDatabaseApiArg = {
  /** ID of organization */
  organizationId: string;
  /** Create database body */
  body: {
    name?: string;
    provider?: string;
    region?: string;
  };
};
export type GetDatabaseByIdApiResponse =
  /** status 200 Successful operation */ Database;
export type GetDatabaseByIdApiArg = {
  /** ID of organization */
  organizationId: string;
  /** ID of database to get */
  databaseId: string;
};
export type UpdateDatabaseApiResponse =
  /** status 202 Successful operation */ Database;
export type UpdateDatabaseApiArg = {
  /** ID of organization */
  organizationId: string;
  /** ID of database to edit */
  databaseId: string;
  /** Update database body */
  databaseConfig: DatabaseConfig;
};
export type DeleteDatabaseByIdApiResponse =
  /** status 200 Successful operation */ Database;
export type DeleteDatabaseByIdApiArg = {
  /** ID of organization */
  organizationId: string;
  /** ID of database to delete */
  databaseId: string;
};
export type GetV1OrganizationsByOrganizationIdDatabasesAndDatabaseIdConnectionDetailsApiResponse =
  /** status 200 Successful operation */ {
    results?: DatabaseConnectionInfo[];
  };
export type GetV1OrganizationsByOrganizationIdDatabasesAndDatabaseIdConnectionDetailsApiArg =
  {
    /** ID of organization */
    organizationId: string;
    /** ID of database to get */
    databaseId: string;
  };
export type User = {
  userId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};
export type UserDetails = {
  userId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  picture?: string;
  organizationIds?: string[];
};
export type OrganizationInfo = {
  id?: string;
  name?: string;
};
export type OrganizationMemberRole = "OrgAdmin" | "DBViewer" | "DBAdmin";
export type OrganizationMemberInfo = {
  organization?: OrganizationInfo;
  role?: OrganizationMemberRole;
};
export type ApiError = {
  code?: string;
  message: string;
  errorId?: string;
  [key: string]: any;
};
export type CloudProviderRegionAvailability = "Online" | "Offline";
export type CloudProviderRegionInfo = {
  id?: string;
  name?: string;
  title?: string;
  available?: CloudProviderRegionAvailability;
};
export type CloudProviderInfo = {
  cloudId?: string;
  provider?: string;
  regions?: CloudProviderRegionInfo[];
};
export type CreateUserRequest = {
  userId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
};
export type UpdateUserRequest = {
  firstName?: string;
  lastName?: string;
};
export type Organization = {
  id?: string;
  name?: string;
  description?: string;
};
export type OffsetPaginatedList = {
  limit?: number;
  offset?: number;
  pages?: number;
  results?: object[];
};
export type OrganizationMember = {
  organizationId?: string;
  role?: OrganizationMemberRole;
  user?: User;
};
export type DatabaseStatusRunning = {
  value?: "RUNNING";
};
export type DatabaseStatusDecommissioned = {
  value?: "DECOMMISSIONED";
};
export type DatabaseStatusTerminating = {
  operationId?: string;
  value?: "TERMINATING";
};
export type DatabaseStatusCreating = {
  value?: "CREATING";
  details?: {
    operationId?: string;
    requestedAt?: string;
  };
};
export type DatabaseConfig = {
  replicationFactor?: number;
  maxCapacity?: string;
};
export type DatabaseStatusUpdating = {
  value?: "UPDATING";
  config?: {
    operationId?: string;
    startedAt?: string;
    old?: DatabaseConfig;
    new?: DatabaseConfig;
  };
};
export type DatabaseStatus =
  | DatabaseStatusRunning
  | DatabaseStatusDecommissioned
  | DatabaseStatusTerminating
  | DatabaseStatusCreating
  | DatabaseStatusUpdating;
export type DatabaseInfo = {
  name?: string;
  provider?: string;
  region?: string;
  createdAt?: string;
  lastModifiedAt?: string;
};
export type DatabaseHealthStatus = "HEALTHY" | "UNHEALTHY" | "UNKNOWN";
export type MetricDescription = {
  name: string;
  units: string;
};
export type MetricOverview = {
  metric: MetricDescription;
  value: number;
  period?: string;
  change?: number;
};
export type DatabaseUtilizationOverview = MetricOverview[];
export type DatabaseListItem = {
  id?: string;
  status?: DatabaseStatus;
  info?: DatabaseInfo;
  health?: DatabaseHealthStatus;
  utilization?: DatabaseUtilizationOverview;
  apiKeys?: DatabaseApiKeys[];
};
export type DatabaseApiKeys = {
  id:string;
  name:string;
}
export type DatabaseApiKeyResponse = {
  id:string;
  name:string;
  value:string;
}
export type Database = {
  id?: string;
  status?: DatabaseStatus;
  info?: DatabaseInfo;
  config?: DatabaseConfig;
  health?: DatabaseHealthStatus;
  utilization?: DatabaseUtilizationOverview;
};
export type DatabaseConnectionInfo = {
  endpoint?: string;
  type?: "access_key";
  info?: {
    access_key?: string;
    access_secret?: string;
  };
};
