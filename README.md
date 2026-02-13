# Fastly

An asynchronous JavaScript client library for interacting with most facets of the [Fastly API](https://www.fastly.com/documentation/reference/api/).

> [!WARNING]
> This API client is auto-generated from Fastly's OpenAPI specification and may not function correctly when used on the Compute platform. Support for Compute is on the roadmap but has not yet been prioritized.

> ⚠️ This client library (`15.0.0-beta.3`)  is an early-access release. Features may change without notice. Use at your own risk.

**We strongly recommend that you do not install alpha and beta releases on live production services.** No official support is provided for such releases. Please try out the library in a test environment, see what breaks without worrying about consequences, and give us [feedback](#issues).

Read about the [Fastly Product Lifecycle](https://docs.fastly.com/products/fastly-product-lifecycle).


## Usage

```javascript
import Fastly from "fastly";

const apiInstance = new Fastly.AclApi();

/**
* @note
* If the FASTLY_API_TOKEN environment variable is set,
* the client will use it to authenticate all API requests.
* Alternatively, you may authorize the client instance
* with a Fastly API token, which will override
* the environment variable.
* @example
* Fastly.ApiClient.instance.authenticate("YOUR_API_TOKEN");
* const fastlyService = new FastlyInstance.ServiceApi();
* @note
* For ESM based Typescript projects, import the client like this:
* import * as Fastly from "fastly";
*
*/

const options = {
  service_id: "SU1Z0isxPaozGVKXdv0eY", // required
  version_id: 56, // required
  name: "my_acl",
};

apiInstance.createAcl(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

## Authorization

> [!NOTE]
> The Fastly API requires an [API token](https://www.fastly.com/documentation/reference/api/#authentication) for most operations.

If the `FASTLY_API_TOKEN` environment variable is set, the client will automatically use it to authenticate all API requests. Alternatively, you may authenticate the client _instance_ with a Fastly API token, which will override the environment variable.

```javascript
Fastly.ApiClient.instance.authenticate("YOUR_API_TOKEN");
```

## API Endpoints

The main documentation for the Fastly API can be found on our [Developer Hub](https://www.fastly.com/documentation/reference/api/).

<details>

<summary>Table of API endpoints</summary>

Class | Method | Description
----- | ------ | -----------
*Fastly.AclApi* | [**createAcl**](docs/AclApi.md#createAcl) | Create a new ACL
*Fastly.AclApi* | [**deleteAcl**](docs/AclApi.md#deleteAcl) | Delete an ACL
*Fastly.AclApi* | [**getAcl**](docs/AclApi.md#getAcl) | Describe an ACL
*Fastly.AclApi* | [**listAcls**](docs/AclApi.md#listAcls) | List ACLs
*Fastly.AclApi* | [**updateAcl**](docs/AclApi.md#updateAcl) | Update an ACL
*Fastly.AclEntryApi* | [**bulkUpdateAclEntries**](docs/AclEntryApi.md#bulkUpdateAclEntries) | Update multiple ACL entries
*Fastly.AclEntryApi* | [**createAclEntry**](docs/AclEntryApi.md#createAclEntry) | Create an ACL entry
*Fastly.AclEntryApi* | [**deleteAclEntry**](docs/AclEntryApi.md#deleteAclEntry) | Delete an ACL entry
*Fastly.AclEntryApi* | [**getAclEntry**](docs/AclEntryApi.md#getAclEntry) | Describe an ACL entry
*Fastly.AclEntryApi* | [**listAclEntries**](docs/AclEntryApi.md#listAclEntries) | List ACL entries
*Fastly.AclEntryApi* | [**updateAclEntry**](docs/AclEntryApi.md#updateAclEntry) | Update an ACL entry
*Fastly.AclsInComputeApi* | [**computeAclCreateAcls**](docs/AclsInComputeApi.md#computeAclCreateAcls) | Create a new ACL
*Fastly.AclsInComputeApi* | [**computeAclDeleteSAclId**](docs/AclsInComputeApi.md#computeAclDeleteSAclId) | Delete an ACL
*Fastly.AclsInComputeApi* | [**computeAclListAclEntries**](docs/AclsInComputeApi.md#computeAclListAclEntries) | List an ACL
*Fastly.AclsInComputeApi* | [**computeAclListAcls**](docs/AclsInComputeApi.md#computeAclListAcls) | List ACLs
*Fastly.AclsInComputeApi* | [**computeAclListAclsSAclId**](docs/AclsInComputeApi.md#computeAclListAclsSAclId) | Describe an ACL
*Fastly.AclsInComputeApi* | [**computeAclLookupAcls**](docs/AclsInComputeApi.md#computeAclLookupAcls) | Lookup an ACL
*Fastly.AclsInComputeApi* | [**computeAclUpdateAcls**](docs/AclsInComputeApi.md#computeAclUpdateAcls) | Update an ACL
*Fastly.ApexRedirectApi* | [**createApexRedirect**](docs/ApexRedirectApi.md#createApexRedirect) | Create an apex redirect
*Fastly.ApexRedirectApi* | [**deleteApexRedirect**](docs/ApexRedirectApi.md#deleteApexRedirect) | Delete an apex redirect
*Fastly.ApexRedirectApi* | [**getApexRedirect**](docs/ApexRedirectApi.md#getApexRedirect) | Get an apex redirect
*Fastly.ApexRedirectApi* | [**listApexRedirects**](docs/ApexRedirectApi.md#listApexRedirects) | List apex redirects
*Fastly.ApexRedirectApi* | [**updateApexRedirect**](docs/ApexRedirectApi.md#updateApexRedirect) | Update an apex redirect
*Fastly.ApisecurityOperationsApi* | [**apiSecurityCreateOperation**](docs/ApisecurityOperationsApi.md#apiSecurityCreateOperation) | Create operation
*Fastly.ApisecurityOperationsApi* | [**apiSecurityCreateOperationTag**](docs/ApisecurityOperationsApi.md#apiSecurityCreateOperationTag) | Create operation tag
*Fastly.ApisecurityOperationsApi* | [**apiSecurityDeleteOperation**](docs/ApisecurityOperationsApi.md#apiSecurityDeleteOperation) | Delete operation
*Fastly.ApisecurityOperationsApi* | [**apiSecurityDeleteOperationTag**](docs/ApisecurityOperationsApi.md#apiSecurityDeleteOperationTag) | Delete operation tag
*Fastly.ApisecurityOperationsApi* | [**apiSecurityGetOperation**](docs/ApisecurityOperationsApi.md#apiSecurityGetOperation) | Retrieve operation
*Fastly.ApisecurityOperationsApi* | [**apiSecurityGetOperationTag**](docs/ApisecurityOperationsApi.md#apiSecurityGetOperationTag) | Retrieve operation tag
*Fastly.ApisecurityOperationsApi* | [**apiSecurityListDiscoveredOperations**](docs/ApisecurityOperationsApi.md#apiSecurityListDiscoveredOperations) | List discovered operations
*Fastly.ApisecurityOperationsApi* | [**apiSecurityListOperationTags**](docs/ApisecurityOperationsApi.md#apiSecurityListOperationTags) | List operation tags
*Fastly.ApisecurityOperationsApi* | [**apiSecurityListOperations**](docs/ApisecurityOperationsApi.md#apiSecurityListOperations) | List operations
*Fastly.ApisecurityOperationsApi* | [**apiSecurityUpdateOperation**](docs/ApisecurityOperationsApi.md#apiSecurityUpdateOperation) | Update operation
*Fastly.ApisecurityOperationsApi* | [**apiSecurityUpdateOperationTag**](docs/ApisecurityOperationsApi.md#apiSecurityUpdateOperationTag) | Update operation tag
*Fastly.AutomationTokensApi* | [**createAutomationToken**](docs/AutomationTokensApi.md#createAutomationToken) | Create Automation Token
*Fastly.AutomationTokensApi* | [**getAutomationTokenId**](docs/AutomationTokensApi.md#getAutomationTokenId) | Retrieve an Automation Token by ID
*Fastly.AutomationTokensApi* | [**getAutomationTokensIdServices**](docs/AutomationTokensApi.md#getAutomationTokensIdServices) | List Automation Token Services
*Fastly.AutomationTokensApi* | [**listAutomationTokens**](docs/AutomationTokensApi.md#listAutomationTokens) | List Customer Automation Tokens
*Fastly.AutomationTokensApi* | [**revokeAutomationTokenId**](docs/AutomationTokensApi.md#revokeAutomationTokenId) | Revoke an Automation Token by ID
*Fastly.BackendApi* | [**createBackend**](docs/BackendApi.md#createBackend) | Create a backend
*Fastly.BackendApi* | [**deleteBackend**](docs/BackendApi.md#deleteBackend) | Delete a backend
*Fastly.BackendApi* | [**getBackend**](docs/BackendApi.md#getBackend) | Describe a backend
*Fastly.BackendApi* | [**listBackends**](docs/BackendApi.md#listBackends) | List backends
*Fastly.BackendApi* | [**updateBackend**](docs/BackendApi.md#updateBackend) | Update a backend
*Fastly.BillingAddressApi* | [**addBillingAddr**](docs/BillingAddressApi.md#addBillingAddr) | Add a billing address to a customer
*Fastly.BillingAddressApi* | [**deleteBillingAddr**](docs/BillingAddressApi.md#deleteBillingAddr) | Delete a billing address
*Fastly.BillingAddressApi* | [**getBillingAddr**](docs/BillingAddressApi.md#getBillingAddr) | Get a billing address
*Fastly.BillingAddressApi* | [**updateBillingAddr**](docs/BillingAddressApi.md#updateBillingAddr) | Update a billing address
*Fastly.BillingInvoicesApi* | [**getInvoiceByInvoiceId**](docs/BillingInvoicesApi.md#getInvoiceByInvoiceId) | Get invoice by ID.
*Fastly.BillingInvoicesApi* | [**getMonthToDateInvoice**](docs/BillingInvoicesApi.md#getMonthToDateInvoice) | Get month-to-date invoice.
*Fastly.BillingInvoicesApi* | [**listInvoices**](docs/BillingInvoicesApi.md#listInvoices) | List of invoices.
*Fastly.BillingUsageMetricsApi* | [**getServiceLevelUsage**](docs/BillingUsageMetricsApi.md#getServiceLevelUsage) | Retrieve service-level usage metrics for services with non-zero usage units.
*Fastly.BillingUsageMetricsApi* | [**getUsageMetrics**](docs/BillingUsageMetricsApi.md#getUsageMetrics) | Get monthly usage metrics
*Fastly.CacheSettingsApi* | [**createCacheSettings**](docs/CacheSettingsApi.md#createCacheSettings) | Create a cache settings object
*Fastly.CacheSettingsApi* | [**deleteCacheSettings**](docs/CacheSettingsApi.md#deleteCacheSettings) | Delete a cache settings object
*Fastly.CacheSettingsApi* | [**getCacheSettings**](docs/CacheSettingsApi.md#getCacheSettings) | Get a cache settings object
*Fastly.CacheSettingsApi* | [**listCacheSettings**](docs/CacheSettingsApi.md#listCacheSettings) | List cache settings objects
*Fastly.CacheSettingsApi* | [**updateCacheSettings**](docs/CacheSettingsApi.md#updateCacheSettings) | Update a cache settings object
*Fastly.ConditionApi* | [**createCondition**](docs/ConditionApi.md#createCondition) | Create a condition
*Fastly.ConditionApi* | [**deleteCondition**](docs/ConditionApi.md#deleteCondition) | Delete a condition
*Fastly.ConditionApi* | [**getCondition**](docs/ConditionApi.md#getCondition) | Describe a condition
*Fastly.ConditionApi* | [**listConditions**](docs/ConditionApi.md#listConditions) | List conditions
*Fastly.ConditionApi* | [**updateCondition**](docs/ConditionApi.md#updateCondition) | Update a condition
*Fastly.ConfigStoreApi* | [**createConfigStore**](docs/ConfigStoreApi.md#createConfigStore) | Create a config store
*Fastly.ConfigStoreApi* | [**deleteConfigStore**](docs/ConfigStoreApi.md#deleteConfigStore) | Delete a config store
*Fastly.ConfigStoreApi* | [**getConfigStore**](docs/ConfigStoreApi.md#getConfigStore) | Describe a config store
*Fastly.ConfigStoreApi* | [**getConfigStoreInfo**](docs/ConfigStoreApi.md#getConfigStoreInfo) | Get config store metadata
*Fastly.ConfigStoreApi* | [**listConfigStoreServices**](docs/ConfigStoreApi.md#listConfigStoreServices) | List linked services
*Fastly.ConfigStoreApi* | [**listConfigStores**](docs/ConfigStoreApi.md#listConfigStores) | List config stores
*Fastly.ConfigStoreApi* | [**updateConfigStore**](docs/ConfigStoreApi.md#updateConfigStore) | Update a config store
*Fastly.ConfigStoreItemApi* | [**bulkUpdateConfigStoreItem**](docs/ConfigStoreItemApi.md#bulkUpdateConfigStoreItem) | Update multiple entries in a config store
*Fastly.ConfigStoreItemApi* | [**createConfigStoreItem**](docs/ConfigStoreItemApi.md#createConfigStoreItem) | Create an entry in a config store
*Fastly.ConfigStoreItemApi* | [**deleteConfigStoreItem**](docs/ConfigStoreItemApi.md#deleteConfigStoreItem) | Delete an item from a config store
*Fastly.ConfigStoreItemApi* | [**getConfigStoreItem**](docs/ConfigStoreItemApi.md#getConfigStoreItem) | Get an item from a config store
*Fastly.ConfigStoreItemApi* | [**listConfigStoreItems**](docs/ConfigStoreItemApi.md#listConfigStoreItems) | List items in a config store
*Fastly.ConfigStoreItemApi* | [**updateConfigStoreItem**](docs/ConfigStoreItemApi.md#updateConfigStoreItem) | Update an entry in a config store
*Fastly.ConfigStoreItemApi* | [**upsertConfigStoreItem**](docs/ConfigStoreItemApi.md#upsertConfigStoreItem) | Insert or update an entry in a config store
*Fastly.ContactApi* | [**createContacts**](docs/ContactApi.md#createContacts) | Add a new customer contact
*Fastly.ContactApi* | [**deleteContact**](docs/ContactApi.md#deleteContact) | Delete a contact
*Fastly.ContactApi* | [**listContacts**](docs/ContactApi.md#listContacts) | List contacts
*Fastly.ContentApi* | [**contentCheck**](docs/ContentApi.md#contentCheck) | Check status of content in each POP&#39;s cache
*Fastly.CustomerApi* | [**deleteCustomer**](docs/CustomerApi.md#deleteCustomer) | Delete a customer
*Fastly.CustomerApi* | [**getCustomer**](docs/CustomerApi.md#getCustomer) | Get a customer
*Fastly.CustomerApi* | [**getLoggedInCustomer**](docs/CustomerApi.md#getLoggedInCustomer) | Get the logged in customer
*Fastly.CustomerApi* | [**listUsers**](docs/CustomerApi.md#listUsers) | List users
*Fastly.CustomerApi* | [**updateCustomer**](docs/CustomerApi.md#updateCustomer) | Update a customer
*Fastly.CustomerAddressesApi* | [**createCustomerAddress**](docs/CustomerAddressesApi.md#createCustomerAddress) | Creates an address associated with a customer account.
*Fastly.CustomerAddressesApi* | [**listCustomerAddresses**](docs/CustomerAddressesApi.md#listCustomerAddresses) | Return the list of addresses associated with a customer account.
*Fastly.CustomerAddressesApi* | [**updateCustomerAddress**](docs/CustomerAddressesApi.md#updateCustomerAddress) | Updates an address associated with a customer account.
*Fastly.DdosProtectionApi* | [**ddosProtectionEventGet**](docs/DdosProtectionApi.md#ddosProtectionEventGet) | Get event by ID
*Fastly.DdosProtectionApi* | [**ddosProtectionEventList**](docs/DdosProtectionApi.md#ddosProtectionEventList) | Get events
*Fastly.DdosProtectionApi* | [**ddosProtectionEventRuleList**](docs/DdosProtectionApi.md#ddosProtectionEventRuleList) | Get all rules for an event
*Fastly.DdosProtectionApi* | [**ddosProtectionRuleGet**](docs/DdosProtectionApi.md#ddosProtectionRuleGet) | Get a rule by ID
*Fastly.DdosProtectionApi* | [**ddosProtectionRulePatch**](docs/DdosProtectionApi.md#ddosProtectionRulePatch) | Update rule
*Fastly.DdosProtectionApi* | [**ddosProtectionTrafficStatsRuleGet**](docs/DdosProtectionApi.md#ddosProtectionTrafficStatsRuleGet) | Get traffic stats for a rule
*Fastly.DictionaryApi* | [**createDictionary**](docs/DictionaryApi.md#createDictionary) | Create a dictionary
*Fastly.DictionaryApi* | [**deleteDictionary**](docs/DictionaryApi.md#deleteDictionary) | Delete a dictionary
*Fastly.DictionaryApi* | [**getDictionary**](docs/DictionaryApi.md#getDictionary) | Get a dictionary
*Fastly.DictionaryApi* | [**listDictionaries**](docs/DictionaryApi.md#listDictionaries) | List dictionaries
*Fastly.DictionaryApi* | [**updateDictionary**](docs/DictionaryApi.md#updateDictionary) | Update a dictionary
*Fastly.DictionaryInfoApi* | [**getDictionaryInfo**](docs/DictionaryInfoApi.md#getDictionaryInfo) | Get dictionary metadata
*Fastly.DictionaryItemApi* | [**bulkUpdateDictionaryItem**](docs/DictionaryItemApi.md#bulkUpdateDictionaryItem) | Update multiple entries in a dictionary
*Fastly.DictionaryItemApi* | [**createDictionaryItem**](docs/DictionaryItemApi.md#createDictionaryItem) | Create an entry in a dictionary
*Fastly.DictionaryItemApi* | [**deleteDictionaryItem**](docs/DictionaryItemApi.md#deleteDictionaryItem) | Delete an item from a dictionary
*Fastly.DictionaryItemApi* | [**getDictionaryItem**](docs/DictionaryItemApi.md#getDictionaryItem) | Get an item from a dictionary
*Fastly.DictionaryItemApi* | [**listDictionaryItems**](docs/DictionaryItemApi.md#listDictionaryItems) | List items in a dictionary
*Fastly.DictionaryItemApi* | [**updateDictionaryItem**](docs/DictionaryItemApi.md#updateDictionaryItem) | Update an entry in a dictionary
*Fastly.DictionaryItemApi* | [**upsertDictionaryItem**](docs/DictionaryItemApi.md#upsertDictionaryItem) | Insert or update an entry in a dictionary
*Fastly.DiffApi* | [**diffServiceVersions**](docs/DiffApi.md#diffServiceVersions) | Diff two service versions
*Fastly.DirectorApi* | [**createDirector**](docs/DirectorApi.md#createDirector) | Create a director
*Fastly.DirectorApi* | [**deleteDirector**](docs/DirectorApi.md#deleteDirector) | Delete a director
*Fastly.DirectorApi* | [**getDirector**](docs/DirectorApi.md#getDirector) | Get a director
*Fastly.DirectorApi* | [**listDirectors**](docs/DirectorApi.md#listDirectors) | List directors
*Fastly.DirectorApi* | [**updateDirector**](docs/DirectorApi.md#updateDirector) | Update a director
*Fastly.DirectorBackendApi* | [**createDirectorBackend**](docs/DirectorBackendApi.md#createDirectorBackend) | Create a director-backend relationship
*Fastly.DirectorBackendApi* | [**deleteDirectorBackend**](docs/DirectorBackendApi.md#deleteDirectorBackend) | Delete a director-backend relationship
*Fastly.DirectorBackendApi* | [**getDirectorBackend**](docs/DirectorBackendApi.md#getDirectorBackend) | Get a director-backend relationship
*Fastly.DmDomainsApi* | [**createDmDomain**](docs/DmDomainsApi.md#createDmDomain) | Create a domain
*Fastly.DmDomainsApi* | [**deleteDmDomain**](docs/DmDomainsApi.md#deleteDmDomain) | Delete a domain
*Fastly.DmDomainsApi* | [**getDmDomain**](docs/DmDomainsApi.md#getDmDomain) | Get a domain
*Fastly.DmDomainsApi* | [**listDmDomains**](docs/DmDomainsApi.md#listDmDomains) | List domains
*Fastly.DmDomainsApi* | [**updateDmDomain**](docs/DmDomainsApi.md#updateDmDomain) | Update a domain
*Fastly.DomainApi* | [**checkDomain**](docs/DomainApi.md#checkDomain) | Validate DNS configuration for a single domain on a service
*Fastly.DomainApi* | [**checkDomains**](docs/DomainApi.md#checkDomains) | Validate DNS configuration for all domains on a service
*Fastly.DomainApi* | [**createDomain**](docs/DomainApi.md#createDomain) | Add a domain name to a service
*Fastly.DomainApi* | [**deleteDomain**](docs/DomainApi.md#deleteDomain) | Remove a domain from a service
*Fastly.DomainApi* | [**getDomain**](docs/DomainApi.md#getDomain) | Describe a domain
*Fastly.DomainApi* | [**listDomains**](docs/DomainApi.md#listDomains) | List domains
*Fastly.DomainApi* | [**updateDomain**](docs/DomainApi.md#updateDomain) | Update a domain
*Fastly.DomainInspectorHistoricalApi* | [**getDomainInspectorHistorical**](docs/DomainInspectorHistoricalApi.md#getDomainInspectorHistorical) | Get historical domain data for a service
*Fastly.DomainInspectorRealtimeApi* | [**getDomainInspectorLast120Seconds**](docs/DomainInspectorRealtimeApi.md#getDomainInspectorLast120Seconds) | Get real-time domain data for the last 120 seconds
*Fastly.DomainInspectorRealtimeApi* | [**getDomainInspectorLastMaxEntries**](docs/DomainInspectorRealtimeApi.md#getDomainInspectorLastMaxEntries) | Get a limited number of real-time domain data entries
*Fastly.DomainInspectorRealtimeApi* | [**getDomainInspectorLastSecond**](docs/DomainInspectorRealtimeApi.md#getDomainInspectorLastSecond) | Get real-time domain data from a specified time
*Fastly.DomainOwnershipsApi* | [**listDomainOwnerships**](docs/DomainOwnershipsApi.md#listDomainOwnerships) | List domain-ownerships
*Fastly.DomainResearchApi* | [**domainStatus**](docs/DomainResearchApi.md#domainStatus) | Domain status
*Fastly.DomainResearchApi* | [**suggestDomains**](docs/DomainResearchApi.md#suggestDomains) | Suggest domains
*Fastly.EventsApi* | [**getEvent**](docs/EventsApi.md#getEvent) | Get an event
*Fastly.EventsApi* | [**listEvents**](docs/EventsApi.md#listEvents) | List events
*Fastly.GzipApi* | [**createGzipConfig**](docs/GzipApi.md#createGzipConfig) | Create a gzip configuration
*Fastly.GzipApi* | [**deleteGzipConfig**](docs/GzipApi.md#deleteGzipConfig) | Delete a gzip configuration
*Fastly.GzipApi* | [**getGzipConfigs**](docs/GzipApi.md#getGzipConfigs) | Get a gzip configuration
*Fastly.GzipApi* | [**listGzipConfigs**](docs/GzipApi.md#listGzipConfigs) | List gzip configurations
*Fastly.GzipApi* | [**updateGzipConfig**](docs/GzipApi.md#updateGzipConfig) | Update a gzip configuration
*Fastly.HeaderApi* | [**createHeaderObject**](docs/HeaderApi.md#createHeaderObject) | Create a Header object
*Fastly.HeaderApi* | [**deleteHeaderObject**](docs/HeaderApi.md#deleteHeaderObject) | Delete a Header object
*Fastly.HeaderApi* | [**getHeaderObject**](docs/HeaderApi.md#getHeaderObject) | Get a Header object
*Fastly.HeaderApi* | [**listHeaderObjects**](docs/HeaderApi.md#listHeaderObjects) | List Header objects
*Fastly.HeaderApi* | [**updateHeaderObject**](docs/HeaderApi.md#updateHeaderObject) | Update a Header object
*Fastly.HealthcheckApi* | [**createHealthcheck**](docs/HealthcheckApi.md#createHealthcheck) | Create a health check
*Fastly.HealthcheckApi* | [**deleteHealthcheck**](docs/HealthcheckApi.md#deleteHealthcheck) | Delete a health check
*Fastly.HealthcheckApi* | [**getHealthcheck**](docs/HealthcheckApi.md#getHealthcheck) | Get a health check
*Fastly.HealthcheckApi* | [**listHealthchecks**](docs/HealthcheckApi.md#listHealthchecks) | List health checks
*Fastly.HealthcheckApi* | [**updateHealthcheck**](docs/HealthcheckApi.md#updateHealthcheck) | Update a health check
*Fastly.HistoricalApi* | [**getHistStats**](docs/HistoricalApi.md#getHistStats) | Get historical stats
*Fastly.HistoricalApi* | [**getHistStatsAggregated**](docs/HistoricalApi.md#getHistStatsAggregated) | Get aggregated historical stats
*Fastly.HistoricalApi* | [**getHistStatsField**](docs/HistoricalApi.md#getHistStatsField) | Get historical stats for a single field
*Fastly.HistoricalApi* | [**getHistStatsService**](docs/HistoricalApi.md#getHistStatsService) | Get historical stats for a single service
*Fastly.HistoricalApi* | [**getHistStatsServiceField**](docs/HistoricalApi.md#getHistStatsServiceField) | Get historical stats for a single service/field combination
*Fastly.HistoricalApi* | [**getRegions**](docs/HistoricalApi.md#getRegions) | Get region codes
*Fastly.HistoricalApi* | [**getUsage**](docs/HistoricalApi.md#getUsage) | Get usage statistics
*Fastly.HistoricalApi* | [**getUsageMonth**](docs/HistoricalApi.md#getUsageMonth) | Get month-to-date usage statistics
*Fastly.HistoricalApi* | [**getUsageService**](docs/HistoricalApi.md#getUsageService) | Get usage statistics per service
*Fastly.Http3Api* | [**createHttp3**](docs/Http3Api.md#createHttp3) | Enable support for HTTP/3
*Fastly.Http3Api* | [**deleteHttp3**](docs/Http3Api.md#deleteHttp3) | Disable support for HTTP/3
*Fastly.Http3Api* | [**getHttp3**](docs/Http3Api.md#getHttp3) | Get HTTP/3 status
*Fastly.IamPermissionsApi* | [**listPermissions**](docs/IamPermissionsApi.md#listPermissions) | List permissions
*Fastly.IamRolesApi* | [**iamV1RolesGet**](docs/IamRolesApi.md#iamV1RolesGet) | Get IAM role by ID
*Fastly.IamRolesApi* | [**iamV1RolesList**](docs/IamRolesApi.md#iamV1RolesList) | List IAM roles
*Fastly.IamServiceGroupsApi* | [**addServiceGroupServices**](docs/IamServiceGroupsApi.md#addServiceGroupServices) | Add services in a service group
*Fastly.IamServiceGroupsApi* | [**createAServiceGroup**](docs/IamServiceGroupsApi.md#createAServiceGroup) | Create a service group
*Fastly.IamServiceGroupsApi* | [**deleteAServiceGroup**](docs/IamServiceGroupsApi.md#deleteAServiceGroup) | Delete a service group
*Fastly.IamServiceGroupsApi* | [**getAServiceGroup**](docs/IamServiceGroupsApi.md#getAServiceGroup) | Get a service group
*Fastly.IamServiceGroupsApi* | [**listServiceGroupServices**](docs/IamServiceGroupsApi.md#listServiceGroupServices) | List services to a service group
*Fastly.IamServiceGroupsApi* | [**listServiceGroups**](docs/IamServiceGroupsApi.md#listServiceGroups) | List service groups
*Fastly.IamServiceGroupsApi* | [**removeServiceGroupServices**](docs/IamServiceGroupsApi.md#removeServiceGroupServices) | Remove services from a service group
*Fastly.IamServiceGroupsApi* | [**updateAServiceGroup**](docs/IamServiceGroupsApi.md#updateAServiceGroup) | Update a service group
*Fastly.IamUserGroupsApi* | [**addUserGroupMembers**](docs/IamUserGroupsApi.md#addUserGroupMembers) | Add members to a user group
*Fastly.IamUserGroupsApi* | [**addUserGroupRoles**](docs/IamUserGroupsApi.md#addUserGroupRoles) | Add roles to a user group
*Fastly.IamUserGroupsApi* | [**addUserGroupServiceGroups**](docs/IamUserGroupsApi.md#addUserGroupServiceGroups) | Add service groups to a user group
*Fastly.IamUserGroupsApi* | [**createAUserGroup**](docs/IamUserGroupsApi.md#createAUserGroup) | Create a user group
*Fastly.IamUserGroupsApi* | [**deleteAUserGroup**](docs/IamUserGroupsApi.md#deleteAUserGroup) | Delete a user group
*Fastly.IamUserGroupsApi* | [**getAUserGroup**](docs/IamUserGroupsApi.md#getAUserGroup) | Get a user group
*Fastly.IamUserGroupsApi* | [**listUserGroupMembers**](docs/IamUserGroupsApi.md#listUserGroupMembers) | List members of a user group
*Fastly.IamUserGroupsApi* | [**listUserGroupRoles**](docs/IamUserGroupsApi.md#listUserGroupRoles) | List roles in a user group
*Fastly.IamUserGroupsApi* | [**listUserGroupServiceGroups**](docs/IamUserGroupsApi.md#listUserGroupServiceGroups) | List service groups in a user group
*Fastly.IamUserGroupsApi* | [**listUserGroups**](docs/IamUserGroupsApi.md#listUserGroups) | List user groups
*Fastly.IamUserGroupsApi* | [**removeUserGroupMembers**](docs/IamUserGroupsApi.md#removeUserGroupMembers) | Remove members of a user group
*Fastly.IamUserGroupsApi* | [**removeUserGroupRoles**](docs/IamUserGroupsApi.md#removeUserGroupRoles) | Remove roles from a user group
*Fastly.IamUserGroupsApi* | [**removeUserGroupServiceGroups**](docs/IamUserGroupsApi.md#removeUserGroupServiceGroups) | Remove service groups from a user group
*Fastly.IamUserGroupsApi* | [**updateAUserGroup**](docs/IamUserGroupsApi.md#updateAUserGroup) | Update a user group
*Fastly.ImageOptimizerDefaultSettingsApi* | [**getDefaultSettings**](docs/ImageOptimizerDefaultSettingsApi.md#getDefaultSettings) | Get current Image Optimizer Default Settings
*Fastly.ImageOptimizerDefaultSettingsApi* | [**updateDefaultSettings**](docs/ImageOptimizerDefaultSettingsApi.md#updateDefaultSettings) | Update Image Optimizer Default Settings
*Fastly.InsightsApi* | [**getLogInsights**](docs/InsightsApi.md#getLogInsights) | Retrieve log insights
*Fastly.InvitationsApi* | [**createInvitation**](docs/InvitationsApi.md#createInvitation) | Create an invitation
*Fastly.InvitationsApi* | [**deleteInvitation**](docs/InvitationsApi.md#deleteInvitation) | Delete an invitation
*Fastly.InvitationsApi* | [**listInvitations**](docs/InvitationsApi.md#listInvitations) | List invitations
*Fastly.KvStoreApi* | [**kvStoreCreate**](docs/KvStoreApi.md#kvStoreCreate) | Create a KV store.
*Fastly.KvStoreApi* | [**kvStoreDelete**](docs/KvStoreApi.md#kvStoreDelete) | Delete a KV store.
*Fastly.KvStoreApi* | [**kvStoreGet**](docs/KvStoreApi.md#kvStoreGet) | Describe a KV store.
*Fastly.KvStoreApi* | [**kvStoreList**](docs/KvStoreApi.md#kvStoreList) | List all KV stores.
*Fastly.KvStoreApi* | [**kvStorePut**](docs/KvStoreApi.md#kvStorePut) | Update a KV store.
*Fastly.KvStoreItemApi* | [**kvStoreDeleteItem**](docs/KvStoreItemApi.md#kvStoreDeleteItem) | Delete an item.
*Fastly.KvStoreItemApi* | [**kvStoreGetItem**](docs/KvStoreItemApi.md#kvStoreGetItem) | Get an item.
*Fastly.KvStoreItemApi* | [**kvStoreListItemKeys**](docs/KvStoreItemApi.md#kvStoreListItemKeys) | List item keys.
*Fastly.KvStoreItemApi* | [**kvStoreUpsertItem**](docs/KvStoreItemApi.md#kvStoreUpsertItem) | Insert or update an item.
*Fastly.LogExplorerApi* | [**getLogRecords**](docs/LogExplorerApi.md#getLogRecords) | Retrieve log records
*Fastly.LoggingAzureblobApi* | [**createLogAzure**](docs/LoggingAzureblobApi.md#createLogAzure) | Create an Azure Blob Storage log endpoint
*Fastly.LoggingAzureblobApi* | [**deleteLogAzure**](docs/LoggingAzureblobApi.md#deleteLogAzure) | Delete the Azure Blob Storage log endpoint
*Fastly.LoggingAzureblobApi* | [**getLogAzure**](docs/LoggingAzureblobApi.md#getLogAzure) | Get an Azure Blob Storage log endpoint
*Fastly.LoggingAzureblobApi* | [**listLogAzure**](docs/LoggingAzureblobApi.md#listLogAzure) | List Azure Blob Storage log endpoints
*Fastly.LoggingAzureblobApi* | [**updateLogAzure**](docs/LoggingAzureblobApi.md#updateLogAzure) | Update an Azure Blob Storage log endpoint
*Fastly.LoggingBigqueryApi* | [**createLogBigquery**](docs/LoggingBigqueryApi.md#createLogBigquery) | Create a BigQuery log endpoint
*Fastly.LoggingBigqueryApi* | [**deleteLogBigquery**](docs/LoggingBigqueryApi.md#deleteLogBigquery) | Delete a BigQuery log endpoint
*Fastly.LoggingBigqueryApi* | [**getLogBigquery**](docs/LoggingBigqueryApi.md#getLogBigquery) | Get a BigQuery log endpoint
*Fastly.LoggingBigqueryApi* | [**listLogBigquery**](docs/LoggingBigqueryApi.md#listLogBigquery) | List BigQuery log endpoints
*Fastly.LoggingBigqueryApi* | [**updateLogBigquery**](docs/LoggingBigqueryApi.md#updateLogBigquery) | Update a BigQuery log endpoint
*Fastly.LoggingCloudfilesApi* | [**createLogCloudfiles**](docs/LoggingCloudfilesApi.md#createLogCloudfiles) | Create a Cloud Files log endpoint
*Fastly.LoggingCloudfilesApi* | [**deleteLogCloudfiles**](docs/LoggingCloudfilesApi.md#deleteLogCloudfiles) | Delete the Cloud Files log endpoint
*Fastly.LoggingCloudfilesApi* | [**getLogCloudfiles**](docs/LoggingCloudfilesApi.md#getLogCloudfiles) | Get a Cloud Files log endpoint
*Fastly.LoggingCloudfilesApi* | [**listLogCloudfiles**](docs/LoggingCloudfilesApi.md#listLogCloudfiles) | List Cloud Files log endpoints
*Fastly.LoggingCloudfilesApi* | [**updateLogCloudfiles**](docs/LoggingCloudfilesApi.md#updateLogCloudfiles) | Update the Cloud Files log endpoint
*Fastly.LoggingDatadogApi* | [**createLogDatadog**](docs/LoggingDatadogApi.md#createLogDatadog) | Create a Datadog log endpoint
*Fastly.LoggingDatadogApi* | [**deleteLogDatadog**](docs/LoggingDatadogApi.md#deleteLogDatadog) | Delete a Datadog log endpoint
*Fastly.LoggingDatadogApi* | [**getLogDatadog**](docs/LoggingDatadogApi.md#getLogDatadog) | Get a Datadog log endpoint
*Fastly.LoggingDatadogApi* | [**listLogDatadog**](docs/LoggingDatadogApi.md#listLogDatadog) | List Datadog log endpoints
*Fastly.LoggingDatadogApi* | [**updateLogDatadog**](docs/LoggingDatadogApi.md#updateLogDatadog) | Update a Datadog log endpoint
*Fastly.LoggingDigitaloceanApi* | [**createLogDigocean**](docs/LoggingDigitaloceanApi.md#createLogDigocean) | Create a DigitalOcean Spaces log endpoint
*Fastly.LoggingDigitaloceanApi* | [**deleteLogDigocean**](docs/LoggingDigitaloceanApi.md#deleteLogDigocean) | Delete a DigitalOcean Spaces log endpoint
*Fastly.LoggingDigitaloceanApi* | [**getLogDigocean**](docs/LoggingDigitaloceanApi.md#getLogDigocean) | Get a DigitalOcean Spaces log endpoint
*Fastly.LoggingDigitaloceanApi* | [**listLogDigocean**](docs/LoggingDigitaloceanApi.md#listLogDigocean) | List DigitalOcean Spaces log endpoints
*Fastly.LoggingDigitaloceanApi* | [**updateLogDigocean**](docs/LoggingDigitaloceanApi.md#updateLogDigocean) | Update a DigitalOcean Spaces log endpoint
*Fastly.LoggingElasticsearchApi* | [**createLogElasticsearch**](docs/LoggingElasticsearchApi.md#createLogElasticsearch) | Create an Elasticsearch log endpoint
*Fastly.LoggingElasticsearchApi* | [**deleteLogElasticsearch**](docs/LoggingElasticsearchApi.md#deleteLogElasticsearch) | Delete an Elasticsearch log endpoint
*Fastly.LoggingElasticsearchApi* | [**getLogElasticsearch**](docs/LoggingElasticsearchApi.md#getLogElasticsearch) | Get an Elasticsearch log endpoint
*Fastly.LoggingElasticsearchApi* | [**listLogElasticsearch**](docs/LoggingElasticsearchApi.md#listLogElasticsearch) | List Elasticsearch log endpoints
*Fastly.LoggingElasticsearchApi* | [**updateLogElasticsearch**](docs/LoggingElasticsearchApi.md#updateLogElasticsearch) | Update an Elasticsearch log endpoint
*Fastly.LoggingFtpApi* | [**createLogFtp**](docs/LoggingFtpApi.md#createLogFtp) | Create an FTP log endpoint
*Fastly.LoggingFtpApi* | [**deleteLogFtp**](docs/LoggingFtpApi.md#deleteLogFtp) | Delete an FTP log endpoint
*Fastly.LoggingFtpApi* | [**getLogFtp**](docs/LoggingFtpApi.md#getLogFtp) | Get an FTP log endpoint
*Fastly.LoggingFtpApi* | [**listLogFtp**](docs/LoggingFtpApi.md#listLogFtp) | List FTP log endpoints
*Fastly.LoggingFtpApi* | [**updateLogFtp**](docs/LoggingFtpApi.md#updateLogFtp) | Update an FTP log endpoint
*Fastly.LoggingGcsApi* | [**createLogGcs**](docs/LoggingGcsApi.md#createLogGcs) | Create a GCS log endpoint
*Fastly.LoggingGcsApi* | [**deleteLogGcs**](docs/LoggingGcsApi.md#deleteLogGcs) | Delete a GCS log endpoint
*Fastly.LoggingGcsApi* | [**getLogGcs**](docs/LoggingGcsApi.md#getLogGcs) | Get a GCS log endpoint
*Fastly.LoggingGcsApi* | [**listLogGcs**](docs/LoggingGcsApi.md#listLogGcs) | List GCS log endpoints
*Fastly.LoggingGcsApi* | [**updateLogGcs**](docs/LoggingGcsApi.md#updateLogGcs) | Update a GCS log endpoint
*Fastly.LoggingGrafanacloudlogsApi* | [**createLogGrafanacloudlogs**](docs/LoggingGrafanacloudlogsApi.md#createLogGrafanacloudlogs) | Create a Grafana Cloud Logs log endpoint
*Fastly.LoggingGrafanacloudlogsApi* | [**deleteLogGrafanacloudlogs**](docs/LoggingGrafanacloudlogsApi.md#deleteLogGrafanacloudlogs) | Delete the Grafana Cloud Logs log endpoint
*Fastly.LoggingGrafanacloudlogsApi* | [**getLogGrafanacloudlogs**](docs/LoggingGrafanacloudlogsApi.md#getLogGrafanacloudlogs) | Get a Grafana Cloud Logs log endpoint
*Fastly.LoggingGrafanacloudlogsApi* | [**listLogGrafanacloudlogs**](docs/LoggingGrafanacloudlogsApi.md#listLogGrafanacloudlogs) | List Grafana Cloud Logs log endpoints
*Fastly.LoggingGrafanacloudlogsApi* | [**updateLogGrafanacloudlogs**](docs/LoggingGrafanacloudlogsApi.md#updateLogGrafanacloudlogs) | Update a Grafana Cloud Logs log endpoint
*Fastly.LoggingHerokuApi* | [**createLogHeroku**](docs/LoggingHerokuApi.md#createLogHeroku) | Create a Heroku log endpoint
*Fastly.LoggingHerokuApi* | [**deleteLogHeroku**](docs/LoggingHerokuApi.md#deleteLogHeroku) | Delete the Heroku log endpoint
*Fastly.LoggingHerokuApi* | [**getLogHeroku**](docs/LoggingHerokuApi.md#getLogHeroku) | Get a Heroku log endpoint
*Fastly.LoggingHerokuApi* | [**listLogHeroku**](docs/LoggingHerokuApi.md#listLogHeroku) | List Heroku log endpoints
*Fastly.LoggingHerokuApi* | [**updateLogHeroku**](docs/LoggingHerokuApi.md#updateLogHeroku) | Update the Heroku log endpoint
*Fastly.LoggingHoneycombApi* | [**createLogHoneycomb**](docs/LoggingHoneycombApi.md#createLogHoneycomb) | Create a Honeycomb log endpoint
*Fastly.LoggingHoneycombApi* | [**deleteLogHoneycomb**](docs/LoggingHoneycombApi.md#deleteLogHoneycomb) | Delete the Honeycomb log endpoint
*Fastly.LoggingHoneycombApi* | [**getLogHoneycomb**](docs/LoggingHoneycombApi.md#getLogHoneycomb) | Get a Honeycomb log endpoint
*Fastly.LoggingHoneycombApi* | [**listLogHoneycomb**](docs/LoggingHoneycombApi.md#listLogHoneycomb) | List Honeycomb log endpoints
*Fastly.LoggingHoneycombApi* | [**updateLogHoneycomb**](docs/LoggingHoneycombApi.md#updateLogHoneycomb) | Update a Honeycomb log endpoint
*Fastly.LoggingHttpsApi* | [**createLogHttps**](docs/LoggingHttpsApi.md#createLogHttps) | Create an HTTPS log endpoint
*Fastly.LoggingHttpsApi* | [**deleteLogHttps**](docs/LoggingHttpsApi.md#deleteLogHttps) | Delete an HTTPS log endpoint
*Fastly.LoggingHttpsApi* | [**getLogHttps**](docs/LoggingHttpsApi.md#getLogHttps) | Get an HTTPS log endpoint
*Fastly.LoggingHttpsApi* | [**listLogHttps**](docs/LoggingHttpsApi.md#listLogHttps) | List HTTPS log endpoints
*Fastly.LoggingHttpsApi* | [**updateLogHttps**](docs/LoggingHttpsApi.md#updateLogHttps) | Update an HTTPS log endpoint
*Fastly.LoggingKafkaApi* | [**createLogKafka**](docs/LoggingKafkaApi.md#createLogKafka) | Create a Kafka log endpoint
*Fastly.LoggingKafkaApi* | [**deleteLogKafka**](docs/LoggingKafkaApi.md#deleteLogKafka) | Delete the Kafka log endpoint
*Fastly.LoggingKafkaApi* | [**getLogKafka**](docs/LoggingKafkaApi.md#getLogKafka) | Get a Kafka log endpoint
*Fastly.LoggingKafkaApi* | [**listLogKafka**](docs/LoggingKafkaApi.md#listLogKafka) | List Kafka log endpoints
*Fastly.LoggingKafkaApi* | [**updateLogKafka**](docs/LoggingKafkaApi.md#updateLogKafka) | Update the Kafka log endpoint
*Fastly.LoggingKinesisApi* | [**createLogKinesis**](docs/LoggingKinesisApi.md#createLogKinesis) | Create  an Amazon Kinesis log endpoint
*Fastly.LoggingKinesisApi* | [**deleteLogKinesis**](docs/LoggingKinesisApi.md#deleteLogKinesis) | Delete the Amazon Kinesis log endpoint
*Fastly.LoggingKinesisApi* | [**getLogKinesis**](docs/LoggingKinesisApi.md#getLogKinesis) | Get an Amazon Kinesis log endpoint
*Fastly.LoggingKinesisApi* | [**listLogKinesis**](docs/LoggingKinesisApi.md#listLogKinesis) | List Amazon Kinesis log endpoints
*Fastly.LoggingKinesisApi* | [**updateLogKinesis**](docs/LoggingKinesisApi.md#updateLogKinesis) | Update the Amazon Kinesis log endpoint
*Fastly.LoggingLogentriesApi* | [**createLogLogentries**](docs/LoggingLogentriesApi.md#createLogLogentries) | Create a Logentries log endpoint
*Fastly.LoggingLogentriesApi* | [**deleteLogLogentries**](docs/LoggingLogentriesApi.md#deleteLogLogentries) | Delete a Logentries log endpoint
*Fastly.LoggingLogentriesApi* | [**getLogLogentries**](docs/LoggingLogentriesApi.md#getLogLogentries) | Get a Logentries log endpoint
*Fastly.LoggingLogentriesApi* | [**listLogLogentries**](docs/LoggingLogentriesApi.md#listLogLogentries) | List Logentries log endpoints
*Fastly.LoggingLogentriesApi* | [**updateLogLogentries**](docs/LoggingLogentriesApi.md#updateLogLogentries) | Update a Logentries log endpoint
*Fastly.LoggingLogglyApi* | [**createLogLoggly**](docs/LoggingLogglyApi.md#createLogLoggly) | Create a Loggly log endpoint
*Fastly.LoggingLogglyApi* | [**deleteLogLoggly**](docs/LoggingLogglyApi.md#deleteLogLoggly) | Delete a Loggly log endpoint
*Fastly.LoggingLogglyApi* | [**getLogLoggly**](docs/LoggingLogglyApi.md#getLogLoggly) | Get a Loggly log endpoint
*Fastly.LoggingLogglyApi* | [**listLogLoggly**](docs/LoggingLogglyApi.md#listLogLoggly) | List Loggly log endpoints
*Fastly.LoggingLogglyApi* | [**updateLogLoggly**](docs/LoggingLogglyApi.md#updateLogLoggly) | Update a Loggly log endpoint
*Fastly.LoggingLogshuttleApi* | [**createLogLogshuttle**](docs/LoggingLogshuttleApi.md#createLogLogshuttle) | Create a Log Shuttle log endpoint
*Fastly.LoggingLogshuttleApi* | [**deleteLogLogshuttle**](docs/LoggingLogshuttleApi.md#deleteLogLogshuttle) | Delete a Log Shuttle log endpoint
*Fastly.LoggingLogshuttleApi* | [**getLogLogshuttle**](docs/LoggingLogshuttleApi.md#getLogLogshuttle) | Get a Log Shuttle log endpoint
*Fastly.LoggingLogshuttleApi* | [**listLogLogshuttle**](docs/LoggingLogshuttleApi.md#listLogLogshuttle) | List Log Shuttle log endpoints
*Fastly.LoggingLogshuttleApi* | [**updateLogLogshuttle**](docs/LoggingLogshuttleApi.md#updateLogLogshuttle) | Update a Log Shuttle log endpoint
*Fastly.LoggingNewrelicApi* | [**createLogNewrelic**](docs/LoggingNewrelicApi.md#createLogNewrelic) | Create a New Relic log endpoint
*Fastly.LoggingNewrelicApi* | [**deleteLogNewrelic**](docs/LoggingNewrelicApi.md#deleteLogNewrelic) | Delete a New Relic log endpoint
*Fastly.LoggingNewrelicApi* | [**getLogNewrelic**](docs/LoggingNewrelicApi.md#getLogNewrelic) | Get a New Relic log endpoint
*Fastly.LoggingNewrelicApi* | [**listLogNewrelic**](docs/LoggingNewrelicApi.md#listLogNewrelic) | List New Relic log endpoints
*Fastly.LoggingNewrelicApi* | [**updateLogNewrelic**](docs/LoggingNewrelicApi.md#updateLogNewrelic) | Update a New Relic log endpoint
*Fastly.LoggingNewrelicotlpApi* | [**createLogNewrelicotlp**](docs/LoggingNewrelicotlpApi.md#createLogNewrelicotlp) | Create a New Relic OTLP endpoint
*Fastly.LoggingNewrelicotlpApi* | [**deleteLogNewrelicotlp**](docs/LoggingNewrelicotlpApi.md#deleteLogNewrelicotlp) | Delete a New Relic OTLP endpoint
*Fastly.LoggingNewrelicotlpApi* | [**getLogNewrelicotlp**](docs/LoggingNewrelicotlpApi.md#getLogNewrelicotlp) | Get a New Relic OTLP endpoint
*Fastly.LoggingNewrelicotlpApi* | [**listLogNewrelicotlp**](docs/LoggingNewrelicotlpApi.md#listLogNewrelicotlp) | List New Relic OTLP endpoints
*Fastly.LoggingNewrelicotlpApi* | [**updateLogNewrelicotlp**](docs/LoggingNewrelicotlpApi.md#updateLogNewrelicotlp) | Update a New Relic log endpoint
*Fastly.LoggingOpenstackApi* | [**createLogOpenstack**](docs/LoggingOpenstackApi.md#createLogOpenstack) | Create an OpenStack log endpoint
*Fastly.LoggingOpenstackApi* | [**deleteLogOpenstack**](docs/LoggingOpenstackApi.md#deleteLogOpenstack) | Delete an OpenStack log endpoint
*Fastly.LoggingOpenstackApi* | [**getLogOpenstack**](docs/LoggingOpenstackApi.md#getLogOpenstack) | Get an OpenStack log endpoint
*Fastly.LoggingOpenstackApi* | [**listLogOpenstack**](docs/LoggingOpenstackApi.md#listLogOpenstack) | List OpenStack log endpoints
*Fastly.LoggingOpenstackApi* | [**updateLogOpenstack**](docs/LoggingOpenstackApi.md#updateLogOpenstack) | Update an OpenStack log endpoint
*Fastly.LoggingPapertrailApi* | [**createLogPapertrail**](docs/LoggingPapertrailApi.md#createLogPapertrail) | Create a Papertrail log endpoint
*Fastly.LoggingPapertrailApi* | [**deleteLogPapertrail**](docs/LoggingPapertrailApi.md#deleteLogPapertrail) | Delete a Papertrail log endpoint
*Fastly.LoggingPapertrailApi* | [**getLogPapertrail**](docs/LoggingPapertrailApi.md#getLogPapertrail) | Get a Papertrail log endpoint
*Fastly.LoggingPapertrailApi* | [**listLogPapertrail**](docs/LoggingPapertrailApi.md#listLogPapertrail) | List Papertrail log endpoints
*Fastly.LoggingPapertrailApi* | [**updateLogPapertrail**](docs/LoggingPapertrailApi.md#updateLogPapertrail) | Update a Papertrail log endpoint
*Fastly.LoggingPubsubApi* | [**createLogGcpPubsub**](docs/LoggingPubsubApi.md#createLogGcpPubsub) | Create a GCP Cloud Pub/Sub log endpoint
*Fastly.LoggingPubsubApi* | [**deleteLogGcpPubsub**](docs/LoggingPubsubApi.md#deleteLogGcpPubsub) | Delete a GCP Cloud Pub/Sub log endpoint
*Fastly.LoggingPubsubApi* | [**getLogGcpPubsub**](docs/LoggingPubsubApi.md#getLogGcpPubsub) | Get a GCP Cloud Pub/Sub log endpoint
*Fastly.LoggingPubsubApi* | [**listLogGcpPubsub**](docs/LoggingPubsubApi.md#listLogGcpPubsub) | List GCP Cloud Pub/Sub log endpoints
*Fastly.LoggingPubsubApi* | [**updateLogGcpPubsub**](docs/LoggingPubsubApi.md#updateLogGcpPubsub) | Update a GCP Cloud Pub/Sub log endpoint
*Fastly.LoggingS3Api* | [**createLogAwsS3**](docs/LoggingS3Api.md#createLogAwsS3) | Create an AWS S3 log endpoint
*Fastly.LoggingS3Api* | [**deleteLogAwsS3**](docs/LoggingS3Api.md#deleteLogAwsS3) | Delete an AWS S3 log endpoint
*Fastly.LoggingS3Api* | [**getLogAwsS3**](docs/LoggingS3Api.md#getLogAwsS3) | Get an AWS S3 log endpoint
*Fastly.LoggingS3Api* | [**listLogAwsS3**](docs/LoggingS3Api.md#listLogAwsS3) | List AWS S3 log endpoints
*Fastly.LoggingS3Api* | [**updateLogAwsS3**](docs/LoggingS3Api.md#updateLogAwsS3) | Update an AWS S3 log endpoint
*Fastly.LoggingScalyrApi* | [**createLogScalyr**](docs/LoggingScalyrApi.md#createLogScalyr) | Create a Scalyr log endpoint
*Fastly.LoggingScalyrApi* | [**deleteLogScalyr**](docs/LoggingScalyrApi.md#deleteLogScalyr) | Delete the Scalyr log endpoint
*Fastly.LoggingScalyrApi* | [**getLogScalyr**](docs/LoggingScalyrApi.md#getLogScalyr) | Get a Scalyr log endpoint
*Fastly.LoggingScalyrApi* | [**listLogScalyr**](docs/LoggingScalyrApi.md#listLogScalyr) | List Scalyr log endpoints
*Fastly.LoggingScalyrApi* | [**updateLogScalyr**](docs/LoggingScalyrApi.md#updateLogScalyr) | Update the Scalyr log endpoint
*Fastly.LoggingSftpApi* | [**createLogSftp**](docs/LoggingSftpApi.md#createLogSftp) | Create an SFTP log endpoint
*Fastly.LoggingSftpApi* | [**deleteLogSftp**](docs/LoggingSftpApi.md#deleteLogSftp) | Delete an SFTP log endpoint
*Fastly.LoggingSftpApi* | [**getLogSftp**](docs/LoggingSftpApi.md#getLogSftp) | Get an SFTP log endpoint
*Fastly.LoggingSftpApi* | [**listLogSftp**](docs/LoggingSftpApi.md#listLogSftp) | List SFTP log endpoints
*Fastly.LoggingSftpApi* | [**updateLogSftp**](docs/LoggingSftpApi.md#updateLogSftp) | Update an SFTP log endpoint
*Fastly.LoggingSplunkApi* | [**createLogSplunk**](docs/LoggingSplunkApi.md#createLogSplunk) | Create a Splunk log endpoint
*Fastly.LoggingSplunkApi* | [**deleteLogSplunk**](docs/LoggingSplunkApi.md#deleteLogSplunk) | Delete a Splunk log endpoint
*Fastly.LoggingSplunkApi* | [**getLogSplunk**](docs/LoggingSplunkApi.md#getLogSplunk) | Get a Splunk log endpoint
*Fastly.LoggingSplunkApi* | [**listLogSplunk**](docs/LoggingSplunkApi.md#listLogSplunk) | List Splunk log endpoints
*Fastly.LoggingSplunkApi* | [**updateLogSplunk**](docs/LoggingSplunkApi.md#updateLogSplunk) | Update a Splunk log endpoint
*Fastly.LoggingSumologicApi* | [**createLogSumologic**](docs/LoggingSumologicApi.md#createLogSumologic) | Create a Sumologic log endpoint
*Fastly.LoggingSumologicApi* | [**deleteLogSumologic**](docs/LoggingSumologicApi.md#deleteLogSumologic) | Delete a Sumologic log endpoint
*Fastly.LoggingSumologicApi* | [**getLogSumologic**](docs/LoggingSumologicApi.md#getLogSumologic) | Get a Sumologic log endpoint
*Fastly.LoggingSumologicApi* | [**listLogSumologic**](docs/LoggingSumologicApi.md#listLogSumologic) | List Sumologic log endpoints
*Fastly.LoggingSumologicApi* | [**updateLogSumologic**](docs/LoggingSumologicApi.md#updateLogSumologic) | Update a Sumologic log endpoint
*Fastly.LoggingSyslogApi* | [**createLogSyslog**](docs/LoggingSyslogApi.md#createLogSyslog) | Create a syslog log endpoint
*Fastly.LoggingSyslogApi* | [**deleteLogSyslog**](docs/LoggingSyslogApi.md#deleteLogSyslog) | Delete a syslog log endpoint
*Fastly.LoggingSyslogApi* | [**getLogSyslog**](docs/LoggingSyslogApi.md#getLogSyslog) | Get a syslog log endpoint
*Fastly.LoggingSyslogApi* | [**listLogSyslog**](docs/LoggingSyslogApi.md#listLogSyslog) | List Syslog log endpoints
*Fastly.LoggingSyslogApi* | [**updateLogSyslog**](docs/LoggingSyslogApi.md#updateLogSyslog) | Update a syslog log endpoint
*Fastly.MetricsPlatformApi* | [**getPlatformMetricsServiceHistorical**](docs/MetricsPlatformApi.md#getPlatformMetricsServiceHistorical) | Get historical time series metrics for a single service
*Fastly.MutualAuthenticationApi* | [**createMutualTlsAuthentication**](docs/MutualAuthenticationApi.md#createMutualTlsAuthentication) | Create a Mutual Authentication
*Fastly.MutualAuthenticationApi* | [**deleteMutualTls**](docs/MutualAuthenticationApi.md#deleteMutualTls) | Delete a Mutual TLS
*Fastly.MutualAuthenticationApi* | [**getMutualAuthentication**](docs/MutualAuthenticationApi.md#getMutualAuthentication) | Get a Mutual Authentication
*Fastly.MutualAuthenticationApi* | [**listMutualAuthentications**](docs/MutualAuthenticationApi.md#listMutualAuthentications) | List Mutual Authentications
*Fastly.MutualAuthenticationApi* | [**patchMutualAuthentication**](docs/MutualAuthenticationApi.md#patchMutualAuthentication) | Update a Mutual Authentication
*Fastly.NgwafReportsApi* | [**getAttacksReport**](docs/NgwafReportsApi.md#getAttacksReport) | Get attacks report
*Fastly.NgwafReportsApi* | [**getSignalsReport**](docs/NgwafReportsApi.md#getSignalsReport) | Get signals report
*Fastly.ObjectStorageAccessKeysApi* | [**createAccessKey**](docs/ObjectStorageAccessKeysApi.md#createAccessKey) | Create an access key
*Fastly.ObjectStorageAccessKeysApi* | [**deleteAccessKey**](docs/ObjectStorageAccessKeysApi.md#deleteAccessKey) | Delete an access key
*Fastly.ObjectStorageAccessKeysApi* | [**getAccessKey**](docs/ObjectStorageAccessKeysApi.md#getAccessKey) | Get an access key
*Fastly.ObjectStorageAccessKeysApi* | [**listAccessKeys**](docs/ObjectStorageAccessKeysApi.md#listAccessKeys) | List access keys
*Fastly.ObservabilityAggregationsForLogsApi* | [**logAggregationsGet**](docs/ObservabilityAggregationsForLogsApi.md#logAggregationsGet) | Retrieve aggregated log results
*Fastly.ObservabilityCustomDashboardsApi* | [**createDashboard**](docs/ObservabilityCustomDashboardsApi.md#createDashboard) | Create a new dashboard
*Fastly.ObservabilityCustomDashboardsApi* | [**deleteDashboard**](docs/ObservabilityCustomDashboardsApi.md#deleteDashboard) | Delete an existing dashboard
*Fastly.ObservabilityCustomDashboardsApi* | [**getDashboard**](docs/ObservabilityCustomDashboardsApi.md#getDashboard) | Retrieve a dashboard by ID
*Fastly.ObservabilityCustomDashboardsApi* | [**listDashboards**](docs/ObservabilityCustomDashboardsApi.md#listDashboards) | List all custom dashboards
*Fastly.ObservabilityCustomDashboardsApi* | [**updateDashboard**](docs/ObservabilityCustomDashboardsApi.md#updateDashboard) | Update an existing dashboard
*Fastly.ObservabilityTimeseriesApi* | [**timeseriesGet**](docs/ObservabilityTimeseriesApi.md#timeseriesGet) | Retrieve observability data as a time series
*Fastly.OriginInspectorHistoricalApi* | [**getOriginInspectorHistorical**](docs/OriginInspectorHistoricalApi.md#getOriginInspectorHistorical) | Get historical origin data for a service
*Fastly.OriginInspectorRealtimeApi* | [**getOriginInspectorLast120Seconds**](docs/OriginInspectorRealtimeApi.md#getOriginInspectorLast120Seconds) | Get real-time origin data for the last 120 seconds
*Fastly.OriginInspectorRealtimeApi* | [**getOriginInspectorLastMaxEntries**](docs/OriginInspectorRealtimeApi.md#getOriginInspectorLastMaxEntries) | Get a limited number of real-time origin data entries
*Fastly.OriginInspectorRealtimeApi* | [**getOriginInspectorLastSecond**](docs/OriginInspectorRealtimeApi.md#getOriginInspectorLastSecond) | Get real-time origin data from specific time.
*Fastly.PackageApi* | [**getPackage**](docs/PackageApi.md#getPackage) | Get details of the service&#39;s Compute package.
*Fastly.PackageApi* | [**putPackage**](docs/PackageApi.md#putPackage) | Upload a Compute package.
*Fastly.PoolApi* | [**createServerPool**](docs/PoolApi.md#createServerPool) | Create a server pool
*Fastly.PoolApi* | [**deleteServerPool**](docs/PoolApi.md#deleteServerPool) | Delete a server pool
*Fastly.PoolApi* | [**getServerPool**](docs/PoolApi.md#getServerPool) | Get a server pool
*Fastly.PoolApi* | [**listServerPools**](docs/PoolApi.md#listServerPools) | List server pools
*Fastly.PoolApi* | [**updateServerPool**](docs/PoolApi.md#updateServerPool) | Update a server pool
*Fastly.PopApi* | [**listPops**](docs/PopApi.md#listPops) | List Fastly POPs
*Fastly.ProductAiAcceleratorApi* | [**disableProductAiAccelerator**](docs/ProductAiAcceleratorApi.md#disableProductAiAccelerator) | Disable product
*Fastly.ProductAiAcceleratorApi* | [**enableAiAccelerator**](docs/ProductAiAcceleratorApi.md#enableAiAccelerator) | Enable product
*Fastly.ProductAiAcceleratorApi* | [**getAiAccelerator**](docs/ProductAiAcceleratorApi.md#getAiAccelerator) | Get product enablement status
*Fastly.ProductApiDiscoveryApi* | [**disableProductApiDiscovery**](docs/ProductApiDiscoveryApi.md#disableProductApiDiscovery) | Disable product
*Fastly.ProductApiDiscoveryApi* | [**enableProductApiDiscovery**](docs/ProductApiDiscoveryApi.md#enableProductApiDiscovery) | Enable product
*Fastly.ProductApiDiscoveryApi* | [**getProductApiDiscovery**](docs/ProductApiDiscoveryApi.md#getProductApiDiscovery) | Get product enablement status
*Fastly.ProductApiDiscoveryApi* | [**getServicesProductApiDiscovery**](docs/ProductApiDiscoveryApi.md#getServicesProductApiDiscovery) | Get services with product enabled
*Fastly.ProductBotManagementApi* | [**disableProductBotManagement**](docs/ProductBotManagementApi.md#disableProductBotManagement) | Disable product
*Fastly.ProductBotManagementApi* | [**enableProductBotManagement**](docs/ProductBotManagementApi.md#enableProductBotManagement) | Enable product
*Fastly.ProductBotManagementApi* | [**getProductBotManagement**](docs/ProductBotManagementApi.md#getProductBotManagement) | Get product enablement status
*Fastly.ProductBotManagementApi* | [**getServicesProductBotManagement**](docs/ProductBotManagementApi.md#getServicesProductBotManagement) | Get services with product enabled
*Fastly.ProductBrotliCompressionApi* | [**disableProductBrotliCompression**](docs/ProductBrotliCompressionApi.md#disableProductBrotliCompression) | Disable product
*Fastly.ProductBrotliCompressionApi* | [**enableProductBrotliCompression**](docs/ProductBrotliCompressionApi.md#enableProductBrotliCompression) | Enable product
*Fastly.ProductBrotliCompressionApi* | [**getProductBrotliCompression**](docs/ProductBrotliCompressionApi.md#getProductBrotliCompression) | Get product enablement status
*Fastly.ProductBrotliCompressionApi* | [**getServicesProductBrotliCompression**](docs/ProductBrotliCompressionApi.md#getServicesProductBrotliCompression) | Get services with product enabled
*Fastly.ProductDdosProtectionApi* | [**disableProductDdosProtection**](docs/ProductDdosProtectionApi.md#disableProductDdosProtection) | Disable product
*Fastly.ProductDdosProtectionApi* | [**enableProductDdosProtection**](docs/ProductDdosProtectionApi.md#enableProductDdosProtection) | Enable product
*Fastly.ProductDdosProtectionApi* | [**getProductDdosProtection**](docs/ProductDdosProtectionApi.md#getProductDdosProtection) | Get product enablement status
*Fastly.ProductDdosProtectionApi* | [**getProductDdosProtectionConfiguration**](docs/ProductDdosProtectionApi.md#getProductDdosProtectionConfiguration) | Get configuration
*Fastly.ProductDdosProtectionApi* | [**getServicesProductDdosProtection**](docs/ProductDdosProtectionApi.md#getServicesProductDdosProtection) | Get services with product enabled
*Fastly.ProductDdosProtectionApi* | [**setProductDdosProtectionConfiguration**](docs/ProductDdosProtectionApi.md#setProductDdosProtectionConfiguration) | Update configuration
*Fastly.ProductDomainInspectorApi* | [**disableProductDomainInspector**](docs/ProductDomainInspectorApi.md#disableProductDomainInspector) | Disable product
*Fastly.ProductDomainInspectorApi* | [**enableProductDomainInspector**](docs/ProductDomainInspectorApi.md#enableProductDomainInspector) | Enable product
*Fastly.ProductDomainInspectorApi* | [**getProductDomainInspector**](docs/ProductDomainInspectorApi.md#getProductDomainInspector) | Get product enablement status
*Fastly.ProductDomainInspectorApi* | [**getServicesProductDomainInspector**](docs/ProductDomainInspectorApi.md#getServicesProductDomainInspector) | Get services with product enabled
*Fastly.ProductDomainResearchApi* | [**disableProductDomainResearch**](docs/ProductDomainResearchApi.md#disableProductDomainResearch) | Disable product
*Fastly.ProductDomainResearchApi* | [**enableDomainResearch**](docs/ProductDomainResearchApi.md#enableDomainResearch) | Enable product
*Fastly.ProductDomainResearchApi* | [**getDomainResearch**](docs/ProductDomainResearchApi.md#getDomainResearch) | Get product enablement status
*Fastly.ProductFanoutApi* | [**disableProductFanout**](docs/ProductFanoutApi.md#disableProductFanout) | Disable product
*Fastly.ProductFanoutApi* | [**enableProductFanout**](docs/ProductFanoutApi.md#enableProductFanout) | Enable product
*Fastly.ProductFanoutApi* | [**getProductFanout**](docs/ProductFanoutApi.md#getProductFanout) | Get product enablement status
*Fastly.ProductFanoutApi* | [**getServicesProductFanout**](docs/ProductFanoutApi.md#getServicesProductFanout) | Get services with product enabled
*Fastly.ProductImageOptimizerApi* | [**disableProductImageOptimizer**](docs/ProductImageOptimizerApi.md#disableProductImageOptimizer) | Disable product
*Fastly.ProductImageOptimizerApi* | [**enableProductImageOptimizer**](docs/ProductImageOptimizerApi.md#enableProductImageOptimizer) | Enable product
*Fastly.ProductImageOptimizerApi* | [**getProductImageOptimizer**](docs/ProductImageOptimizerApi.md#getProductImageOptimizer) | Get product enablement status
*Fastly.ProductImageOptimizerApi* | [**getServicesProductImageOptimizer**](docs/ProductImageOptimizerApi.md#getServicesProductImageOptimizer) | Get services with product enabled
*Fastly.ProductLogExplorerInsightsApi* | [**disableProductLogExplorerInsights**](docs/ProductLogExplorerInsightsApi.md#disableProductLogExplorerInsights) | Disable product
*Fastly.ProductLogExplorerInsightsApi* | [**enableProductLogExplorerInsights**](docs/ProductLogExplorerInsightsApi.md#enableProductLogExplorerInsights) | Enable product
*Fastly.ProductLogExplorerInsightsApi* | [**getProductLogExplorerInsights**](docs/ProductLogExplorerInsightsApi.md#getProductLogExplorerInsights) | Get product enablement status
*Fastly.ProductLogExplorerInsightsApi* | [**getServicesProductLogExplorerInsights**](docs/ProductLogExplorerInsightsApi.md#getServicesProductLogExplorerInsights) | Get services with product enabled
*Fastly.ProductNgwafApi* | [**disableProductNgwaf**](docs/ProductNgwafApi.md#disableProductNgwaf) | Disable product
*Fastly.ProductNgwafApi* | [**enableProductNgwaf**](docs/ProductNgwafApi.md#enableProductNgwaf) | Enable product
*Fastly.ProductNgwafApi* | [**getProductNgwaf**](docs/ProductNgwafApi.md#getProductNgwaf) | Get product enablement status
*Fastly.ProductNgwafApi* | [**getProductNgwafConfiguration**](docs/ProductNgwafApi.md#getProductNgwafConfiguration) | Get configuration
*Fastly.ProductNgwafApi* | [**getServicesProductNgwaf**](docs/ProductNgwafApi.md#getServicesProductNgwaf) | Get services with product enabled
*Fastly.ProductNgwafApi* | [**setProductNgwafConfiguration**](docs/ProductNgwafApi.md#setProductNgwafConfiguration) | Update configuration
*Fastly.ProductObjectStorageApi* | [**disableProductObjectStorage**](docs/ProductObjectStorageApi.md#disableProductObjectStorage) | Disable product
*Fastly.ProductObjectStorageApi* | [**enableObjectStorage**](docs/ProductObjectStorageApi.md#enableObjectStorage) | Enable product
*Fastly.ProductObjectStorageApi* | [**getObjectStorage**](docs/ProductObjectStorageApi.md#getObjectStorage) | Get product enablement status
*Fastly.ProductOriginInspectorApi* | [**disableProductOriginInspector**](docs/ProductOriginInspectorApi.md#disableProductOriginInspector) | Disable product
*Fastly.ProductOriginInspectorApi* | [**enableProductOriginInspector**](docs/ProductOriginInspectorApi.md#enableProductOriginInspector) | Enable product
*Fastly.ProductOriginInspectorApi* | [**getProductOriginInspector**](docs/ProductOriginInspectorApi.md#getProductOriginInspector) | Get product enablement status
*Fastly.ProductOriginInspectorApi* | [**getServicesProductOriginInspector**](docs/ProductOriginInspectorApi.md#getServicesProductOriginInspector) | Get services with product enabled
*Fastly.ProductWebsocketsApi* | [**disableProductWebsockets**](docs/ProductWebsocketsApi.md#disableProductWebsockets) | Disable product
*Fastly.ProductWebsocketsApi* | [**enableProductWebsockets**](docs/ProductWebsocketsApi.md#enableProductWebsockets) | Enable product
*Fastly.ProductWebsocketsApi* | [**getProductWebsockets**](docs/ProductWebsocketsApi.md#getProductWebsockets) | Get product enablement status
*Fastly.ProductWebsocketsApi* | [**getServicesProductWebsockets**](docs/ProductWebsocketsApi.md#getServicesProductWebsockets) | Get services with product enabled
*Fastly.PublicIpListApi* | [**listFastlyIps**](docs/PublicIpListApi.md#listFastlyIps) | List Fastly&#39;s public IPs
*Fastly.PublishApi* | [**publish**](docs/PublishApi.md#publish) | Send messages to Fanout subscribers
*Fastly.PurgeApi* | [**bulkPurgeTag**](docs/PurgeApi.md#bulkPurgeTag) | Purge multiple surrogate key tags
*Fastly.PurgeApi* | [**purgeAll**](docs/PurgeApi.md#purgeAll) | Purge everything from a service
*Fastly.PurgeApi* | [**purgeSingleUrl**](docs/PurgeApi.md#purgeSingleUrl) | Purge a URL
*Fastly.PurgeApi* | [**purgeTag**](docs/PurgeApi.md#purgeTag) | Purge by surrogate key tag
*Fastly.RateLimiterApi* | [**createRateLimiter**](docs/RateLimiterApi.md#createRateLimiter) | Create a rate limiter
*Fastly.RateLimiterApi* | [**deleteRateLimiter**](docs/RateLimiterApi.md#deleteRateLimiter) | Delete a rate limiter
*Fastly.RateLimiterApi* | [**getRateLimiter**](docs/RateLimiterApi.md#getRateLimiter) | Get a rate limiter
*Fastly.RateLimiterApi* | [**listRateLimiters**](docs/RateLimiterApi.md#listRateLimiters) | List rate limiters
*Fastly.RateLimiterApi* | [**updateRateLimiter**](docs/RateLimiterApi.md#updateRateLimiter) | Update a rate limiter
*Fastly.RealtimeApi* | [**getStatsLast120Seconds**](docs/RealtimeApi.md#getStatsLast120Seconds) | Get real-time data for the last 120 seconds
*Fastly.RealtimeApi* | [**getStatsLast120SecondsLimitEntries**](docs/RealtimeApi.md#getStatsLast120SecondsLimitEntries) | Get a limited number of real-time data entries
*Fastly.RealtimeApi* | [**getStatsLastSecond**](docs/RealtimeApi.md#getStatsLastSecond) | Get real-time data from specified time
*Fastly.RequestSettingsApi* | [**createRequestSettings**](docs/RequestSettingsApi.md#createRequestSettings) | Create a Request Settings object
*Fastly.RequestSettingsApi* | [**deleteRequestSettings**](docs/RequestSettingsApi.md#deleteRequestSettings) | Delete a Request Settings object
*Fastly.RequestSettingsApi* | [**getRequestSettings**](docs/RequestSettingsApi.md#getRequestSettings) | Get a Request Settings object
*Fastly.RequestSettingsApi* | [**listRequestSettings**](docs/RequestSettingsApi.md#listRequestSettings) | List Request Settings objects
*Fastly.RequestSettingsApi* | [**updateRequestSettings**](docs/RequestSettingsApi.md#updateRequestSettings) | Update a Request Settings object
*Fastly.ResourceApi* | [**createResource**](docs/ResourceApi.md#createResource) | Create a resource link
*Fastly.ResourceApi* | [**deleteResource**](docs/ResourceApi.md#deleteResource) | Delete a resource link
*Fastly.ResourceApi* | [**getResource**](docs/ResourceApi.md#getResource) | Display a resource link
*Fastly.ResourceApi* | [**listResources**](docs/ResourceApi.md#listResources) | List resource links
*Fastly.ResourceApi* | [**updateResource**](docs/ResourceApi.md#updateResource) | Update a resource link
*Fastly.ResponseObjectApi* | [**createResponseObject**](docs/ResponseObjectApi.md#createResponseObject) | Create a Response object
*Fastly.ResponseObjectApi* | [**deleteResponseObject**](docs/ResponseObjectApi.md#deleteResponseObject) | Delete a Response Object
*Fastly.ResponseObjectApi* | [**getResponseObject**](docs/ResponseObjectApi.md#getResponseObject) | Get a Response object
*Fastly.ResponseObjectApi* | [**listResponseObjects**](docs/ResponseObjectApi.md#listResponseObjects) | List Response objects
*Fastly.ResponseObjectApi* | [**updateResponseObject**](docs/ResponseObjectApi.md#updateResponseObject) | Update a Response object
*Fastly.SecretStoreApi* | [**clientKey**](docs/SecretStoreApi.md#clientKey) | Create new client key
*Fastly.SecretStoreApi* | [**createSecretStore**](docs/SecretStoreApi.md#createSecretStore) | Create new secret store
*Fastly.SecretStoreApi* | [**deleteSecretStore**](docs/SecretStoreApi.md#deleteSecretStore) | Delete secret store
*Fastly.SecretStoreApi* | [**getSecretStore**](docs/SecretStoreApi.md#getSecretStore) | Get secret store by ID
*Fastly.SecretStoreApi* | [**getSecretStores**](docs/SecretStoreApi.md#getSecretStores) | Get all secret stores
*Fastly.SecretStoreApi* | [**signingKey**](docs/SecretStoreApi.md#signingKey) | Get public key
*Fastly.SecretStoreItemApi* | [**createSecret**](docs/SecretStoreItemApi.md#createSecret) | Create a new secret in a store.
*Fastly.SecretStoreItemApi* | [**deleteSecret**](docs/SecretStoreItemApi.md#deleteSecret) | Delete a secret from a store.
*Fastly.SecretStoreItemApi* | [**getSecret**](docs/SecretStoreItemApi.md#getSecret) | Get secret metadata.
*Fastly.SecretStoreItemApi* | [**getSecrets**](docs/SecretStoreItemApi.md#getSecrets) | List secrets within a store.
*Fastly.SecretStoreItemApi* | [**mustRecreateSecret**](docs/SecretStoreItemApi.md#mustRecreateSecret) | Recreate a secret in a store.
*Fastly.SecretStoreItemApi* | [**recreateSecret**](docs/SecretStoreItemApi.md#recreateSecret) | Create or recreate a secret in a store.
*Fastly.ServerApi* | [**createPoolServer**](docs/ServerApi.md#createPoolServer) | Add a server to a pool
*Fastly.ServerApi* | [**deletePoolServer**](docs/ServerApi.md#deletePoolServer) | Delete a server from a pool
*Fastly.ServerApi* | [**getPoolServer**](docs/ServerApi.md#getPoolServer) | Get a pool server
*Fastly.ServerApi* | [**listPoolServers**](docs/ServerApi.md#listPoolServers) | List servers in a pool
*Fastly.ServerApi* | [**updatePoolServer**](docs/ServerApi.md#updatePoolServer) | Update a server
*Fastly.ServiceApi* | [**createService**](docs/ServiceApi.md#createService) | Create a service
*Fastly.ServiceApi* | [**deleteService**](docs/ServiceApi.md#deleteService) | Delete a service
*Fastly.ServiceApi* | [**getService**](docs/ServiceApi.md#getService) | Get a service
*Fastly.ServiceApi* | [**getServiceDetail**](docs/ServiceApi.md#getServiceDetail) | Get service details
*Fastly.ServiceApi* | [**listServiceDomains**](docs/ServiceApi.md#listServiceDomains) | List the domains within a service
*Fastly.ServiceApi* | [**listServices**](docs/ServiceApi.md#listServices) | List services
*Fastly.ServiceApi* | [**searchService**](docs/ServiceApi.md#searchService) | Search for a service by name
*Fastly.ServiceApi* | [**updateService**](docs/ServiceApi.md#updateService) | Update a service
*Fastly.ServiceAuthorizationsApi* | [**createServiceAuthorization**](docs/ServiceAuthorizationsApi.md#createServiceAuthorization) | Create service authorization
*Fastly.ServiceAuthorizationsApi* | [**deleteServiceAuthorization**](docs/ServiceAuthorizationsApi.md#deleteServiceAuthorization) | Delete service authorization
*Fastly.ServiceAuthorizationsApi* | [**deleteServiceAuthorization2**](docs/ServiceAuthorizationsApi.md#deleteServiceAuthorization2) | Delete service authorizations
*Fastly.ServiceAuthorizationsApi* | [**listServiceAuthorization**](docs/ServiceAuthorizationsApi.md#listServiceAuthorization) | List service authorizations
*Fastly.ServiceAuthorizationsApi* | [**showServiceAuthorization**](docs/ServiceAuthorizationsApi.md#showServiceAuthorization) | Show service authorization
*Fastly.ServiceAuthorizationsApi* | [**updateServiceAuthorization**](docs/ServiceAuthorizationsApi.md#updateServiceAuthorization) | Update service authorization
*Fastly.ServiceAuthorizationsApi* | [**updateServiceAuthorization2**](docs/ServiceAuthorizationsApi.md#updateServiceAuthorization2) | Update service authorizations
*Fastly.SettingsApi* | [**getServiceSettings**](docs/SettingsApi.md#getServiceSettings) | Get service settings
*Fastly.SettingsApi* | [**updateServiceSettings**](docs/SettingsApi.md#updateServiceSettings) | Update service settings
*Fastly.SnippetApi* | [**createSnippet**](docs/SnippetApi.md#createSnippet) | Create a snippet
*Fastly.SnippetApi* | [**deleteSnippet**](docs/SnippetApi.md#deleteSnippet) | Delete a snippet
*Fastly.SnippetApi* | [**getSnippet**](docs/SnippetApi.md#getSnippet) | Get a versioned snippet
*Fastly.SnippetApi* | [**getSnippetDynamic**](docs/SnippetApi.md#getSnippetDynamic) | Get a dynamic snippet
*Fastly.SnippetApi* | [**listSnippets**](docs/SnippetApi.md#listSnippets) | List snippets
*Fastly.SnippetApi* | [**updateSnippet**](docs/SnippetApi.md#updateSnippet) | Update a versioned snippet
*Fastly.SnippetApi* | [**updateSnippetDynamic**](docs/SnippetApi.md#updateSnippetDynamic) | Update a dynamic snippet
*Fastly.StarApi* | [**createServiceStar**](docs/StarApi.md#createServiceStar) | Create a star
*Fastly.StarApi* | [**deleteServiceStar**](docs/StarApi.md#deleteServiceStar) | Delete a star
*Fastly.StarApi* | [**getServiceStar**](docs/StarApi.md#getServiceStar) | Get a star
*Fastly.StarApi* | [**listServiceStars**](docs/StarApi.md#listServiceStars) | List stars
*Fastly.StatsApi* | [**getServiceStats**](docs/StatsApi.md#getServiceStats) | Get stats for a service
*Fastly.SudoApi* | [**requestSudoAccess**](docs/SudoApi.md#requestSudoAccess) | Request Sudo access
*Fastly.TlsActivationsApi* | [**createTlsActivation**](docs/TlsActivationsApi.md#createTlsActivation) | Enable TLS for a domain using a custom certificate
*Fastly.TlsActivationsApi* | [**deleteTlsActivation**](docs/TlsActivationsApi.md#deleteTlsActivation) | Disable TLS on a domain
*Fastly.TlsActivationsApi* | [**getTlsActivation**](docs/TlsActivationsApi.md#getTlsActivation) | Get a TLS activation
*Fastly.TlsActivationsApi* | [**listTlsActivations**](docs/TlsActivationsApi.md#listTlsActivations) | List TLS activations
*Fastly.TlsActivationsApi* | [**updateTlsActivation**](docs/TlsActivationsApi.md#updateTlsActivation) | Update a certificate
*Fastly.TlsBulkCertificatesApi* | [**deleteBulkTlsCert**](docs/TlsBulkCertificatesApi.md#deleteBulkTlsCert) | Delete a certificate
*Fastly.TlsBulkCertificatesApi* | [**getTlsBulkCert**](docs/TlsBulkCertificatesApi.md#getTlsBulkCert) | Get a certificate
*Fastly.TlsBulkCertificatesApi* | [**listTlsBulkCerts**](docs/TlsBulkCertificatesApi.md#listTlsBulkCerts) | List certificates
*Fastly.TlsBulkCertificatesApi* | [**updateBulkTlsCert**](docs/TlsBulkCertificatesApi.md#updateBulkTlsCert) | Update a certificate
*Fastly.TlsBulkCertificatesApi* | [**uploadTlsBulkCert**](docs/TlsBulkCertificatesApi.md#uploadTlsBulkCert) | Upload a certificate
*Fastly.TlsCertificatesApi* | [**createTlsCert**](docs/TlsCertificatesApi.md#createTlsCert) | Create a TLS certificate
*Fastly.TlsCertificatesApi* | [**deleteTlsCert**](docs/TlsCertificatesApi.md#deleteTlsCert) | Delete a TLS certificate
*Fastly.TlsCertificatesApi* | [**getTlsCert**](docs/TlsCertificatesApi.md#getTlsCert) | Get a TLS certificate
*Fastly.TlsCertificatesApi* | [**getTlsCertBlob**](docs/TlsCertificatesApi.md#getTlsCertBlob) | Get a TLS certificate blob (Limited Availability)
*Fastly.TlsCertificatesApi* | [**listTlsCerts**](docs/TlsCertificatesApi.md#listTlsCerts) | List TLS certificates
*Fastly.TlsCertificatesApi* | [**updateTlsCert**](docs/TlsCertificatesApi.md#updateTlsCert) | Update a TLS certificate
*Fastly.TlsConfigurationsApi* | [**getTlsConfig**](docs/TlsConfigurationsApi.md#getTlsConfig) | Get a TLS configuration
*Fastly.TlsConfigurationsApi* | [**listTlsConfigs**](docs/TlsConfigurationsApi.md#listTlsConfigs) | List TLS configurations
*Fastly.TlsConfigurationsApi* | [**updateTlsConfig**](docs/TlsConfigurationsApi.md#updateTlsConfig) | Update a TLS configuration
*Fastly.TlsCsrsApi* | [**createCsr**](docs/TlsCsrsApi.md#createCsr) | Create CSR
*Fastly.TlsDomainsApi* | [**listTlsDomains**](docs/TlsDomainsApi.md#listTlsDomains) | List TLS domains
*Fastly.TlsPrivateKeysApi* | [**createTlsKey**](docs/TlsPrivateKeysApi.md#createTlsKey) | Create a TLS private key
*Fastly.TlsPrivateKeysApi* | [**deleteTlsKey**](docs/TlsPrivateKeysApi.md#deleteTlsKey) | Delete a TLS private key
*Fastly.TlsPrivateKeysApi* | [**getTlsKey**](docs/TlsPrivateKeysApi.md#getTlsKey) | Get a TLS private key
*Fastly.TlsPrivateKeysApi* | [**listTlsKeys**](docs/TlsPrivateKeysApi.md#listTlsKeys) | List TLS private keys
*Fastly.TlsSubscriptionsApi* | [**createGlobalsignEmailChallenge**](docs/TlsSubscriptionsApi.md#createGlobalsignEmailChallenge) | Creates a GlobalSign email challenge.
*Fastly.TlsSubscriptionsApi* | [**createTlsSub**](docs/TlsSubscriptionsApi.md#createTlsSub) | Create a TLS subscription
*Fastly.TlsSubscriptionsApi* | [**deleteGlobalsignEmailChallenge**](docs/TlsSubscriptionsApi.md#deleteGlobalsignEmailChallenge) | Delete a GlobalSign email challenge
*Fastly.TlsSubscriptionsApi* | [**deleteTlsSub**](docs/TlsSubscriptionsApi.md#deleteTlsSub) | Delete a TLS subscription
*Fastly.TlsSubscriptionsApi* | [**getTlsSub**](docs/TlsSubscriptionsApi.md#getTlsSub) | Get a TLS subscription
*Fastly.TlsSubscriptionsApi* | [**listTlsSubs**](docs/TlsSubscriptionsApi.md#listTlsSubs) | List TLS subscriptions
*Fastly.TlsSubscriptionsApi* | [**patchTlsSub**](docs/TlsSubscriptionsApi.md#patchTlsSub) | Update a TLS subscription
*Fastly.TokensApi* | [**bulkRevokeTokens**](docs/TokensApi.md#bulkRevokeTokens) | Revoke multiple tokens
*Fastly.TokensApi* | [**createToken**](docs/TokensApi.md#createToken) | Create a token
*Fastly.TokensApi* | [**getToken**](docs/TokensApi.md#getToken) | Get a token
*Fastly.TokensApi* | [**getTokenCurrent**](docs/TokensApi.md#getTokenCurrent) | Get the current token
*Fastly.TokensApi* | [**listTokensCustomer**](docs/TokensApi.md#listTokensCustomer) | List tokens for a customer
*Fastly.TokensApi* | [**listTokensUser**](docs/TokensApi.md#listTokensUser) | List tokens for the authenticated user
*Fastly.TokensApi* | [**revokeToken**](docs/TokensApi.md#revokeToken) | Revoke a token
*Fastly.TokensApi* | [**revokeTokenCurrent**](docs/TokensApi.md#revokeTokenCurrent) | Revoke the current token
*Fastly.UserApi* | [**createUser**](docs/UserApi.md#createUser) | Create a user
*Fastly.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | Delete a user
*Fastly.UserApi* | [**getCurrentUser**](docs/UserApi.md#getCurrentUser) | Get the current user
*Fastly.UserApi* | [**getUser**](docs/UserApi.md#getUser) | Get a user
*Fastly.UserApi* | [**requestPasswordReset**](docs/UserApi.md#requestPasswordReset) | Request a password reset
*Fastly.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | Update a user
*Fastly.UserApi* | [**updateUserPassword**](docs/UserApi.md#updateUserPassword) | Update the user&#39;s password
*Fastly.VclApi* | [**createCustomVcl**](docs/VclApi.md#createCustomVcl) | Create a custom VCL file
*Fastly.VclApi* | [**deleteCustomVcl**](docs/VclApi.md#deleteCustomVcl) | Delete a custom VCL file
*Fastly.VclApi* | [**getCustomVcl**](docs/VclApi.md#getCustomVcl) | Get a custom VCL file
*Fastly.VclApi* | [**getCustomVclBoilerplate**](docs/VclApi.md#getCustomVclBoilerplate) | Get boilerplate VCL
*Fastly.VclApi* | [**getCustomVclGenerated**](docs/VclApi.md#getCustomVclGenerated) | Get the generated VCL for a service
*Fastly.VclApi* | [**getCustomVclGeneratedHighlighted**](docs/VclApi.md#getCustomVclGeneratedHighlighted) | Get the generated VCL with syntax highlighting
*Fastly.VclApi* | [**getCustomVclHighlighted**](docs/VclApi.md#getCustomVclHighlighted) | Get a custom VCL file with syntax highlighting
*Fastly.VclApi* | [**getCustomVclRaw**](docs/VclApi.md#getCustomVclRaw) | Download a custom VCL file
*Fastly.VclApi* | [**lintVclDefault**](docs/VclApi.md#lintVclDefault) | Lint (validate) VCL using a default set of flags.
*Fastly.VclApi* | [**lintVclForService**](docs/VclApi.md#lintVclForService) | Lint (validate) VCL using flags set for the service.
*Fastly.VclApi* | [**listCustomVcl**](docs/VclApi.md#listCustomVcl) | List custom VCL files
*Fastly.VclApi* | [**setCustomVclMain**](docs/VclApi.md#setCustomVclMain) | Set a custom VCL file as main
*Fastly.VclApi* | [**updateCustomVcl**](docs/VclApi.md#updateCustomVcl) | Update a custom VCL file
*Fastly.VclDiffApi* | [**vclDiffServiceVersions**](docs/VclDiffApi.md#vclDiffServiceVersions) | Get a comparison of the VCL changes between two service versions
*Fastly.VersionApi* | [**activateServiceVersion**](docs/VersionApi.md#activateServiceVersion) | Activate a service version
*Fastly.VersionApi* | [**activateServiceVersionEnvironment**](docs/VersionApi.md#activateServiceVersionEnvironment) | Activate a service version on the specified environment
*Fastly.VersionApi* | [**cloneServiceVersion**](docs/VersionApi.md#cloneServiceVersion) | Clone a service version
*Fastly.VersionApi* | [**createServiceVersion**](docs/VersionApi.md#createServiceVersion) | Create a service version
*Fastly.VersionApi* | [**deactivateServiceVersion**](docs/VersionApi.md#deactivateServiceVersion) | Deactivate a service version
*Fastly.VersionApi* | [**deactivateServiceVersionEnvironment**](docs/VersionApi.md#deactivateServiceVersionEnvironment) | Deactivate a service version on an environment
*Fastly.VersionApi* | [**getServiceVersion**](docs/VersionApi.md#getServiceVersion) | Get a version of a service
*Fastly.VersionApi* | [**listServiceVersions**](docs/VersionApi.md#listServiceVersions) | List versions of a service
*Fastly.VersionApi* | [**lockServiceVersion**](docs/VersionApi.md#lockServiceVersion) | Lock a service version
*Fastly.VersionApi* | [**updateServiceVersion**](docs/VersionApi.md#updateServiceVersion) | Update a service version
*Fastly.VersionApi* | [**validateServiceVersion**](docs/VersionApi.md#validateServiceVersion) | Validate a service version
*Fastly.WholePlatformDdosHistoricalApi* | [**getPlatformDdosHistorical**](docs/WholePlatformDdosHistoricalApi.md#getPlatformDdosHistorical) | Get historical DDoS metrics for the entire Fastly platform


</details>

## Issues

The fastly-js API client currently does not support the following endpoints:

- [`/alerts/definitions/{definition_id}`](https://www.fastly.com/documentation/reference/api/observability/alerts/definitions) (DELETE, GET, PUT)
- [`/alerts/definitions`](https://www.fastly.com/documentation/reference/api/observability/alerts/definitions) (GET, POST)
- [`/alerts/history`](https://www.fastly.com/documentation/reference/api/observability/alerts/history) (GET)
- [`/dns/configurations/{dns_configuration_id}`](https://www.fastly.com/documentation/reference/api/) (DELETE, GET, PATCH)
- [`/dns/configurations`](https://www.fastly.com/documentation/reference/api/) (GET, POST)
- [`/dns/v1/tsig-keys/{tsig_key_id}`](https://www.fastly.com/documentation/reference/api/) (DELETE, GET, PATCH)
- [`/dns/v1/tsig-keys`](https://www.fastly.com/documentation/reference/api/) (GET, POST)
- [`/dns/v1/zones/{zone_id}`](https://www.fastly.com/documentation/reference/api/) (DELETE, GET, PATCH)
- [`/dns/v1/zones`](https://www.fastly.com/documentation/reference/api/) (GET, POST)
- [`/ngwaf/v1/default-dashboards`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/custom-dashboards) (GET)
- [`/ngwaf/v1/lists/{listId}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/lists) (DELETE, GET, PATCH)
- [`/ngwaf/v1/lists`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/lists) (GET, POST)
- [`/ngwaf/v1/signals/{signal_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/signals) (DELETE, GET, PATCH)
- [`/ngwaf/v1/signals`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/signals) (GET, POST)
- [`/ngwaf/v1/timeseries`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/timeseries) (GET)
- [`/ngwaf/v1/workspaces/{workspaceId}/lists/{listId}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/lists) (DELETE, GET, PATCH)
- [`/ngwaf/v1/workspaces/{workspaceId}/lists`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/lists) (GET, POST)
- [`/ngwaf/v1/workspaces/{workspace_id}/alerts/{alert_id}/signing-key`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/workspace_alerts) (GET, POST)
- [`/ngwaf/v1/workspaces/{workspace_id}/alerts/{alert_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/workspace_alerts) (DELETE, GET, PATCH)
- [`/ngwaf/v1/workspaces/{workspace_id}/alerts`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/workspace_alerts) (GET, POST)
- [`/ngwaf/v1/workspaces/{workspace_id}/dashboards/{dashboard_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/custom-dashboards) (DELETE, GET, PATCH)
- [`/ngwaf/v1/workspaces/{workspace_id}/dashboards`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/custom-dashboards) (GET, POST)
- [`/ngwaf/v1/workspaces/{workspace_id}/default-dashboard`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/custom-dashboards) (GET, PUT)
- [`/ngwaf/v1/workspaces/{workspace_id}/events/{event_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/events) (GET, PATCH)
- [`/ngwaf/v1/workspaces/{workspace_id}/events`](https://www.fastly.com/documentation/reference/api/ngwaf/events) (GET)
- [`/ngwaf/v1/workspaces/{workspace_id}/header-links/{header_link_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/header-links) (DELETE, GET, PUT)
- [`/ngwaf/v1/workspaces/{workspace_id}/header-links`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/header-links) (GET, POST)
- [`/ngwaf/v1/workspaces/{workspace_id}/redactions/{redaction_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/redactions) (DELETE, GET, PATCH)
- [`/ngwaf/v1/workspaces/{workspace_id}/redactions`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/redactions) (GET, POST)
- [`/ngwaf/v1/workspaces/{workspace_id}/requests/{request_id}/report`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/requests) (POST)
- [`/ngwaf/v1/workspaces/{workspace_id}/requests/{request_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/requests) (GET)
- [`/ngwaf/v1/workspaces/{workspace_id}/requests`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/requests) (GET)
- [`/ngwaf/v1/workspaces/{workspace_id}/rules/{rule_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/rules) (DELETE, GET, PATCH)
- [`/ngwaf/v1/workspaces/{workspace_id}/rules`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/rules) (GET, POST)
- [`/ngwaf/v1/workspaces/{workspace_id}/thresholds/{threshold_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/thresholds) (DELETE, GET, PATCH)
- [`/ngwaf/v1/workspaces/{workspace_id}/thresholds`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/thresholds) (GET, POST)
- [`/ngwaf/v1/workspaces/{workspace_id}/timeseries`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/timeseries) (GET)
- [`/ngwaf/v1/workspaces/{workspace_id}/top-attacks`](https://www.fastly.com/documentation/reference/api/ngwaf/workspaces) (GET)
- [`/ngwaf/v1/workspaces/{workspace_id}/virtual-patches/{virtual_patch_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/virtual-patches) (GET, PATCH)
- [`/ngwaf/v1/workspaces/{workspace_id}/virtual-patches`](https://www.fastly.com/documentation/reference/api/ngwaf/v1/virtual-patches) (GET)
- [`/ngwaf/v1/workspaces/{workspace_id}`](https://www.fastly.com/documentation/reference/api/ngwaf/workspaces) (DELETE, GET, PATCH)
- [`/ngwaf/v1/workspaces`](https://www.fastly.com/documentation/reference/api/ngwaf/workspaces) (GET, POST)
- [`/notifications/integration-types`](https://developer.fastly.com/reference/api/observability/notification) (GET)
- [`/notifications/integrations/{integration_id}/rotateSigningKey`](https://developer.fastly.com/reference/api/observability/notification) (POST)
- [`/notifications/integrations/{integration_id}/signingKey`](https://developer.fastly.com/reference/api/observability/notification) (GET)
- [`/notifications/integrations/{integration_id}`](https://developer.fastly.com/reference/api/observability/notification) (DELETE, GET, PATCH)
- [`/notifications/integrations`](https://developer.fastly.com/reference/api/observability/notification) (GET, POST)
- [`/notifications/mailinglist-confirmations`](https://developer.fastly.com/reference/api/observability/notification) (POST)
- [`/observability/timeseries`](https://www.fastly.com/documentation/reference/api/observability/timeseries/logs/) (GET)
- [`/observability/timeseries`](https://www.fastly.com/documentation/reference/api/observability/timeseries/sustainability/) (GET)
- [`/resources/stores/kv/{store_id}/batch`](https://www.fastly.com/documentation/reference/api/services/resources/kv-store-item) (PUT)
- [`/security/workspaces/{workspace_id}/events/{event_id}`](https://www.fastly.com/documentation/reference/api/security/events) (GET, PATCH)
- [`/security/workspaces/{workspace_id}/events`](https://www.fastly.com/documentation/reference/api/security/events) (GET)
- [`/security/workspaces/{workspace_id}/redactions/{redaction_id}`](https://www.fastly.com/documentation/reference/api/security/redactions) (DELETE, GET, PATCH)
- [`/security/workspaces/{workspace_id}/redactions`](https://www.fastly.com/documentation/reference/api/security/redactions) (GET, POST)
- [`/security/workspaces/{workspace_id}/requests/{request_id}`](https://www.fastly.com/documentation/reference/api/security/requests) (GET)
- [`/security/workspaces/{workspace_id}/requests`](https://www.fastly.com/documentation/reference/api/security/requests) (GET)
- [`/security/workspaces/{workspace_id}/rules/{rule_id}`](https://www.fastly.com/documentation/reference/api/security/rules) (DELETE, GET, PATCH)
- [`/security/workspaces/{workspace_id}/rules`](https://www.fastly.com/documentation/reference/api/security/rules) (GET, POST)
- [`/security/workspaces/{workspace_id}/timeseries`](https://www.fastly.com/documentation/reference/api/security/timeseries) (GET)
- [`/security/workspaces/{workspace_id}/virtual-patches/{virtual_patch_id}`](https://www.fastly.com/documentation/reference/api/security/virtual-patches) (GET, PATCH)
- [`/security/workspaces/{workspace_id}/virtual-patches`](https://www.fastly.com/documentation/reference/api/security/virtual-patches) (GET)
- [`/security/workspaces/{workspace_id}`](https://www.fastly.com/documentation/reference/api/security/workspaces) (DELETE, GET, PATCH)
- [`/security/workspaces`](https://www.fastly.com/documentation/reference/api/security/workspaces) (GET, POST)
- [`/tls/activations/{tls_activation_id}`](https://www.fastly.com/documentation/reference/api/tls/mutual-tls/activations) (GET, PATCH)
- [`/tls/activations`](https://www.fastly.com/documentation/reference/api/tls/mutual-tls/activations) (GET)
- [`/tls/configurations/{tls_configuration_id}`](https://www.fastly.com/documentation/reference/api/) (DELETE, GET, PATCH)
- [`/tls/configurations`](https://www.fastly.com/documentation/reference/api/) (GET, POST)
- [`/v1/channel/{service_id}/ts/h/limit/{max_entries}`](https://www.fastly.com/documentation/reference/api/metrics-stats/origin-insights) (GET)
- [`/v1/channel/{service_id}/ts/h`](https://www.fastly.com/documentation/reference/api/metrics-stats/origin-insights) (GET)
- [`/v1/channel/{service_id}/ts/{start_timestamp}`](https://www.fastly.com/documentation/reference/api/metrics-stats/origin-insights) (GET)


If you encounter any non-security-related bug or unexpected behavior, please [file an issue][bug]
using the bug report template.

[bug]: https://github.com/fastly/fastly-js/issues/new?labels=bug

### Security issues

Please see our [SECURITY.md](./SECURITY.md) for guidance on reporting security-related issues.

## License

[MIT](./LICENSE).
