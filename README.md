# Fastly

An asynchronous JavaScript client library for interacting with most facets of the [Fastly API](https://developer.fastly.com/reference/api).

> ⚠️ This client library  is an early-access release. Features may change without notice. Use at your own risk.

**We strongly recommend that you do not install alpha and beta releases on live production services.** No official support is provided for such releases. Please try out the library in a test environment, see what breaks without worrying about consequences, and give us [feedback](#issues).

## Usage

Please follow the [installation](#installation) instructions and execute the following JS code:

```javascript
import Fastly from "fastly";

const apiInstance = new Fastly.AclApi();

// If the FASTLY_API_TOKEN environment variable is set, 
// the client will use it to authenticate all API requests.
// Alternatively, you may authorize the client instance
// with a Fastly API token, which will override 
// the environment variable.
// Fastly.ApiClient.instance.authenticate("YOUR_API_TOKEN");

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

The Fastly API requires an [API token](https://developer.fastly.com/reference/api/#authentication) for most operations. If the `FASTLY_API_TOKEN` environment variable is set, the client will automatically use it to authenticate all API requests. Alternatively, you may authenticate the client _instance_ with a Fastly API token, which will override the environment variable.

```javascript
Fastly.ApiClient.instance.authenticate("YOUR_API_TOKEN");
```

## Endpoints

The main documentation for the Fastly API can be found on our [Developer Hub](https://developer.fastly.com/reference/api).

Class | Method | Description
--- | --- | ---
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
*Fastly.BackendApi* | [**createBackend**](docs/BackendApi.md#createBackend) | Create a backend
*Fastly.BackendApi* | [**deleteBackend**](docs/BackendApi.md#deleteBackend) | Delete a backend
*Fastly.BackendApi* | [**getBackend**](docs/BackendApi.md#getBackend) | Describe a backend
*Fastly.BackendApi* | [**listBackends**](docs/BackendApi.md#listBackends) | List backends
*Fastly.BackendApi* | [**updateBackend**](docs/BackendApi.md#updateBackend) | Update a backend
*Fastly.BillingApi* | [**getInvoice**](docs/BillingApi.md#getInvoice) | Get an invoice
*Fastly.BillingApi* | [**getInvoiceById**](docs/BillingApi.md#getInvoiceById) | Get an invoice
*Fastly.BillingApi* | [**getInvoiceMtd**](docs/BillingApi.md#getInvoiceMtd) | Get month-to-date billing estimate
*Fastly.BillingAddressApi* | [**addBillingAddr**](docs/BillingAddressApi.md#addBillingAddr) | Add a billing address to a customer
*Fastly.BillingAddressApi* | [**deleteBillingAddr**](docs/BillingAddressApi.md#deleteBillingAddr) | Delete a billing address
*Fastly.BillingAddressApi* | [**getBillingAddr**](docs/BillingAddressApi.md#getBillingAddr) | Get a billing address
*Fastly.BillingAddressApi* | [**updateBillingAddr**](docs/BillingAddressApi.md#updateBillingAddr) | Update a billing address
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
*Fastly.ContentApi* | [**contentCheck**](docs/ContentApi.md#contentCheck) | Check status of content in each POP&#39;s cache
*Fastly.CustomerApi* | [**deleteCustomer**](docs/CustomerApi.md#deleteCustomer) | Delete a customer
*Fastly.CustomerApi* | [**getCustomer**](docs/CustomerApi.md#getCustomer) | Get a customer
*Fastly.CustomerApi* | [**getLoggedInCustomer**](docs/CustomerApi.md#getLoggedInCustomer) | Get the logged in customer
*Fastly.CustomerApi* | [**listUsers**](docs/CustomerApi.md#listUsers) | List users
*Fastly.CustomerApi* | [**updateCustomer**](docs/CustomerApi.md#updateCustomer) | Update a customer
*Fastly.DictionaryApi* | [**createDictionary**](docs/DictionaryApi.md#createDictionary) | Create an edge dictionary
*Fastly.DictionaryApi* | [**deleteDictionary**](docs/DictionaryApi.md#deleteDictionary) | Delete an edge dictionary
*Fastly.DictionaryApi* | [**getDictionary**](docs/DictionaryApi.md#getDictionary) | Get an edge dictionary
*Fastly.DictionaryApi* | [**listDictionaries**](docs/DictionaryApi.md#listDictionaries) | List edge dictionaries
*Fastly.DictionaryApi* | [**updateDictionary**](docs/DictionaryApi.md#updateDictionary) | Update an edge dictionary
*Fastly.DictionaryInfoApi* | [**getDictionaryInfo**](docs/DictionaryInfoApi.md#getDictionaryInfo) | Get edge dictionary metadata
*Fastly.DictionaryItemApi* | [**bulkUpdateDictionaryItem**](docs/DictionaryItemApi.md#bulkUpdateDictionaryItem) | Update multiple entries in an edge dictionary
*Fastly.DictionaryItemApi* | [**createDictionaryItem**](docs/DictionaryItemApi.md#createDictionaryItem) | Create an entry in an edge dictionary
*Fastly.DictionaryItemApi* | [**deleteDictionaryItem**](docs/DictionaryItemApi.md#deleteDictionaryItem) | Delete an item from an edge dictionary
*Fastly.DictionaryItemApi* | [**getDictionaryItem**](docs/DictionaryItemApi.md#getDictionaryItem) | Get an item from an edge dictionary
*Fastly.DictionaryItemApi* | [**listDictionaryItems**](docs/DictionaryItemApi.md#listDictionaryItems) | List items in an edge dictionary
*Fastly.DictionaryItemApi* | [**updateDictionaryItem**](docs/DictionaryItemApi.md#updateDictionaryItem) | Update an entry in an edge dictionary
*Fastly.DictionaryItemApi* | [**upsertDictionaryItem**](docs/DictionaryItemApi.md#upsertDictionaryItem) | Insert or update an entry in an edge dictionary
*Fastly.DiffApi* | [**diffServiceVersions**](docs/DiffApi.md#diffServiceVersions) | Diff two service versions
*Fastly.DirectorApi* | [**createDirector**](docs/DirectorApi.md#createDirector) | Create a director
*Fastly.DirectorApi* | [**deleteDirector**](docs/DirectorApi.md#deleteDirector) | Delete a director
*Fastly.DirectorApi* | [**getDirector**](docs/DirectorApi.md#getDirector) | Get a director
*Fastly.DirectorApi* | [**listDirectors**](docs/DirectorApi.md#listDirectors) | List directors
*Fastly.DirectorApi* | [**updateDirector**](docs/DirectorApi.md#updateDirector) | Update a director
*Fastly.DirectorBackendApi* | [**createDirectorBackend**](docs/DirectorBackendApi.md#createDirectorBackend) | Create a director-backend relationship
*Fastly.DirectorBackendApi* | [**deleteDirectorBackend**](docs/DirectorBackendApi.md#deleteDirectorBackend) | Delete a director-backend relationship
*Fastly.DirectorBackendApi* | [**getDirectorBackend**](docs/DirectorBackendApi.md#getDirectorBackend) | Get a director-backend relationship
*Fastly.DomainApi* | [**checkDomain**](docs/DomainApi.md#checkDomain) | Validate DNS configuration for a single domain on a service
*Fastly.DomainApi* | [**checkDomains**](docs/DomainApi.md#checkDomains) | Validate DNS configuration for all domains on a service
*Fastly.DomainApi* | [**createDomain**](docs/DomainApi.md#createDomain) | Add a domain name to a service
*Fastly.DomainApi* | [**deleteDomain**](docs/DomainApi.md#deleteDomain) | Remove a domain from a service
*Fastly.DomainApi* | [**getDomain**](docs/DomainApi.md#getDomain) | Describe a domain
*Fastly.DomainApi* | [**listDomains**](docs/DomainApi.md#listDomains) | List domains
*Fastly.DomainApi* | [**updateDomain**](docs/DomainApi.md#updateDomain) | Update a domain
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
*Fastly.HealthcheckApi* | [**createHealthcheck**](docs/HealthcheckApi.md#createHealthcheck) | Create a healthcheck
*Fastly.HealthcheckApi* | [**deleteHealthcheck**](docs/HealthcheckApi.md#deleteHealthcheck) | Delete a healthcheck
*Fastly.HealthcheckApi* | [**getHealthcheck**](docs/HealthcheckApi.md#getHealthcheck) | Get a healthcheck
*Fastly.HealthcheckApi* | [**listHealthchecks**](docs/HealthcheckApi.md#listHealthchecks) | List healthchecks
*Fastly.HealthcheckApi* | [**updateHealthcheck**](docs/HealthcheckApi.md#updateHealthcheck) | Update a healthcheck
*Fastly.HistoricalApi* | [**getHistStats**](docs/HistoricalApi.md#getHistStats) | Get historical stats
*Fastly.HistoricalApi* | [**getHistStatsAggregated**](docs/HistoricalApi.md#getHistStatsAggregated) | Get aggregated historical stats
*Fastly.HistoricalApi* | [**getHistStatsField**](docs/HistoricalApi.md#getHistStatsField) | Get historical stats for a single field
*Fastly.HistoricalApi* | [**getHistStatsService**](docs/HistoricalApi.md#getHistStatsService) | Get historical stats for a single service
*Fastly.HistoricalApi* | [**getHistStatsServiceField**](docs/HistoricalApi.md#getHistStatsServiceField) | Get historical stats for a single service/field combination
*Fastly.HistoricalApi* | [**getRegions**](docs/HistoricalApi.md#getRegions) | Get region codes
*Fastly.HistoricalApi* | [**getUsage**](docs/HistoricalApi.md#getUsage) | Get usage statistics
*Fastly.HistoricalApi* | [**getUsageMonth**](docs/HistoricalApi.md#getUsageMonth) | Get month-to-date usage statistics
*Fastly.HistoricalApi* | [**getUsageService**](docs/HistoricalApi.md#getUsageService) | Get usage statistics per service
*Fastly.InvitationsApi* | [**createInvitation**](docs/InvitationsApi.md#createInvitation) | Create an invitation
*Fastly.InvitationsApi* | [**deleteInvitation**](docs/InvitationsApi.md#deleteInvitation) | Delete an invitation
*Fastly.InvitationsApi* | [**listInvitations**](docs/InvitationsApi.md#listInvitations) | List invitations
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
*Fastly.PoolApi* | [**createServerPool**](docs/PoolApi.md#createServerPool) | Create a server pool
*Fastly.PoolApi* | [**deleteServerPool**](docs/PoolApi.md#deleteServerPool) | Delete a server pool
*Fastly.PoolApi* | [**getServerPool**](docs/PoolApi.md#getServerPool) | Get a server pool
*Fastly.PoolApi* | [**listServerPools**](docs/PoolApi.md#listServerPools) | List server pools
*Fastly.PoolApi* | [**updateServerPool**](docs/PoolApi.md#updateServerPool) | Update a server pool
*Fastly.PopApi* | [**listPops**](docs/PopApi.md#listPops) | List Fastly POPs
*Fastly.PublicIpListApi* | [**listFastlyIps**](docs/PublicIpListApi.md#listFastlyIps) | List Fastly&#39;s public IPs
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
*Fastly.RealtimeApi* | [**getStatsLastSecond**](docs/RealtimeApi.md#getStatsLastSecond) | Get real-time data for the last second
*Fastly.RequestSettingsApi* | [**createRequestSettings**](docs/RequestSettingsApi.md#createRequestSettings) | Create a Request Settings object
*Fastly.RequestSettingsApi* | [**deleteRequestSettings**](docs/RequestSettingsApi.md#deleteRequestSettings) | Delete a Request Settings object
*Fastly.RequestSettingsApi* | [**getRequestSettings**](docs/RequestSettingsApi.md#getRequestSettings) | Get a Request Settings object
*Fastly.RequestSettingsApi* | [**listRequestSettings**](docs/RequestSettingsApi.md#listRequestSettings) | List Request Settings objects
*Fastly.RequestSettingsApi* | [**updateRequestSettings**](docs/RequestSettingsApi.md#updateRequestSettings) | Update a Request Settings object
*Fastly.ResponseObjectApi* | [**createResponseObject**](docs/ResponseObjectApi.md#createResponseObject) | Create a Response object
*Fastly.ResponseObjectApi* | [**deleteResponseObject**](docs/ResponseObjectApi.md#deleteResponseObject) | Delete a Response Object
*Fastly.ResponseObjectApi* | [**getResponseObject**](docs/ResponseObjectApi.md#getResponseObject) | Get a Response object
*Fastly.ResponseObjectApi* | [**listResponseObjects**](docs/ResponseObjectApi.md#listResponseObjects) | List Response objects
*Fastly.ResponseObjectApi* | [**updateResponseObject**](docs/ResponseObjectApi.md#updateResponseObject) | Update a Response object
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
*Fastly.TlsCertificatesApi* | [**listTlsCerts**](docs/TlsCertificatesApi.md#listTlsCerts) | List TLS certificates
*Fastly.TlsCertificatesApi* | [**updateTlsCert**](docs/TlsCertificatesApi.md#updateTlsCert) | Update a TLS certificate
*Fastly.TlsConfigurationsApi* | [**getTlsConfig**](docs/TlsConfigurationsApi.md#getTlsConfig) | Get a TLS configuration
*Fastly.TlsConfigurationsApi* | [**listTlsConfigs**](docs/TlsConfigurationsApi.md#listTlsConfigs) | List TLS configurations
*Fastly.TlsConfigurationsApi* | [**updateTlsConfig**](docs/TlsConfigurationsApi.md#updateTlsConfig) | Update a TLS configuration
*Fastly.TlsDomainsApi* | [**listTlsDomains**](docs/TlsDomainsApi.md#listTlsDomains) | List TLS domains
*Fastly.TlsPrivateKeysApi* | [**createTlsKey**](docs/TlsPrivateKeysApi.md#createTlsKey) | Create a TLS private key
*Fastly.TlsPrivateKeysApi* | [**deleteTlsKey**](docs/TlsPrivateKeysApi.md#deleteTlsKey) | Delete a TLS private key
*Fastly.TlsPrivateKeysApi* | [**getTlsKey**](docs/TlsPrivateKeysApi.md#getTlsKey) | Get a TLS private key
*Fastly.TlsPrivateKeysApi* | [**listTlsKeys**](docs/TlsPrivateKeysApi.md#listTlsKeys) | List TLS private keys
*Fastly.TlsSubscriptionsApi* | [**createTlsSub**](docs/TlsSubscriptionsApi.md#createTlsSub) | Create a TLS subscription
*Fastly.TlsSubscriptionsApi* | [**deleteTlsSub**](docs/TlsSubscriptionsApi.md#deleteTlsSub) | Delete a TLS subscription
*Fastly.TlsSubscriptionsApi* | [**deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeId**](docs/TlsSubscriptionsApi.md#deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeId) | Delete a GlobalSign email challenge
*Fastly.TlsSubscriptionsApi* | [**getTlsSub**](docs/TlsSubscriptionsApi.md#getTlsSub) | Get a TLS subscription
*Fastly.TlsSubscriptionsApi* | [**listTlsSubs**](docs/TlsSubscriptionsApi.md#listTlsSubs) | List TLS subscriptions
*Fastly.TlsSubscriptionsApi* | [**patchTlsSub**](docs/TlsSubscriptionsApi.md#patchTlsSub) | Update a TLS subscription
*Fastly.TlsSubscriptionsApi* | [**postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallenges**](docs/TlsSubscriptionsApi.md#postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallenges) | Creates a GlobalSign email challenge.
*Fastly.TokensApi* | [**bulkRevokeTokens**](docs/TokensApi.md#bulkRevokeTokens) | Revoke multiple tokens
*Fastly.TokensApi* | [**createToken**](docs/TokensApi.md#createToken) | Create a token
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
*Fastly.VclApi* | [**listCustomVcl**](docs/VclApi.md#listCustomVcl) | List custom VCL files
*Fastly.VclApi* | [**setCustomVclMain**](docs/VclApi.md#setCustomVclMain) | Set a custom VCL file as main
*Fastly.VclApi* | [**updateCustomVcl**](docs/VclApi.md#updateCustomVcl) | Update a custom VCL file
*Fastly.VclDiffApi* | [**vclDiffServiceVersions**](docs/VclDiffApi.md#vclDiffServiceVersions) | Get a comparison of the VCL changes between two service versions
*Fastly.VersionApi* | [**activateServiceVersion**](docs/VersionApi.md#activateServiceVersion) | Activate a service version
*Fastly.VersionApi* | [**cloneServiceVersion**](docs/VersionApi.md#cloneServiceVersion) | Clone a service version
*Fastly.VersionApi* | [**createServiceVersion**](docs/VersionApi.md#createServiceVersion) | Create a service version
*Fastly.VersionApi* | [**deactivateServiceVersion**](docs/VersionApi.md#deactivateServiceVersion) | Deactivate a service version
*Fastly.VersionApi* | [**getServiceVersion**](docs/VersionApi.md#getServiceVersion) | Get a version of a service
*Fastly.VersionApi* | [**listServiceVersions**](docs/VersionApi.md#listServiceVersions) | List versions of a service
*Fastly.VersionApi* | [**lockServiceVersion**](docs/VersionApi.md#lockServiceVersion) | Lock a service version
*Fastly.VersionApi* | [**updateServiceVersion**](docs/VersionApi.md#updateServiceVersion) | Update a service version
*Fastly.VersionApi* | [**validateServiceVersion**](docs/VersionApi.md#validateServiceVersion) | Validate a service version
*Fastly.WafActiveRulesApi* | [**bulkDeleteWafActiveRules**](docs/WafActiveRulesApi.md#bulkDeleteWafActiveRules) | Delete multiple active rules from a WAF
*Fastly.WafActiveRulesApi* | [**bulkUpdateWafActiveRules**](docs/WafActiveRulesApi.md#bulkUpdateWafActiveRules) | Update multiple active rules
*Fastly.WafActiveRulesApi* | [**createWafActiveRule**](docs/WafActiveRulesApi.md#createWafActiveRule) | Add a rule to a WAF as an active rule
*Fastly.WafActiveRulesApi* | [**createWafActiveRulesTag**](docs/WafActiveRulesApi.md#createWafActiveRulesTag) | Create active rules by tag
*Fastly.WafActiveRulesApi* | [**deleteWafActiveRule**](docs/WafActiveRulesApi.md#deleteWafActiveRule) | Delete an active rule
*Fastly.WafActiveRulesApi* | [**getWafActiveRule**](docs/WafActiveRulesApi.md#getWafActiveRule) | Get an active WAF rule object
*Fastly.WafActiveRulesApi* | [**listWafActiveRules**](docs/WafActiveRulesApi.md#listWafActiveRules) | List active rules on a WAF
*Fastly.WafActiveRulesApi* | [**updateWafActiveRule**](docs/WafActiveRulesApi.md#updateWafActiveRule) | Update an active rule
*Fastly.WafExclusionsApi* | [**createWafRuleExclusion**](docs/WafExclusionsApi.md#createWafRuleExclusion) | Create a WAF rule exclusion
*Fastly.WafExclusionsApi* | [**deleteWafRuleExclusion**](docs/WafExclusionsApi.md#deleteWafRuleExclusion) | Delete a WAF rule exclusion
*Fastly.WafExclusionsApi* | [**getWafRuleExclusion**](docs/WafExclusionsApi.md#getWafRuleExclusion) | Get a WAF rule exclusion
*Fastly.WafExclusionsApi* | [**listWafRuleExclusions**](docs/WafExclusionsApi.md#listWafRuleExclusions) | List WAF rule exclusions
*Fastly.WafExclusionsApi* | [**updateWafRuleExclusion**](docs/WafExclusionsApi.md#updateWafRuleExclusion) | Update a WAF rule exclusion
*Fastly.WafFirewallVersionsApi* | [**cloneWafFirewallVersion**](docs/WafFirewallVersionsApi.md#cloneWafFirewallVersion) | Clone a firewall version
*Fastly.WafFirewallVersionsApi* | [**createWafFirewallVersion**](docs/WafFirewallVersionsApi.md#createWafFirewallVersion) | Create a firewall version
*Fastly.WafFirewallVersionsApi* | [**deployActivateWafFirewallVersion**](docs/WafFirewallVersionsApi.md#deployActivateWafFirewallVersion) | Deploy or activate a firewall version
*Fastly.WafFirewallVersionsApi* | [**getWafFirewallVersion**](docs/WafFirewallVersionsApi.md#getWafFirewallVersion) | Get a firewall version
*Fastly.WafFirewallVersionsApi* | [**listWafFirewallVersions**](docs/WafFirewallVersionsApi.md#listWafFirewallVersions) | List firewall versions
*Fastly.WafFirewallVersionsApi* | [**updateWafFirewallVersion**](docs/WafFirewallVersionsApi.md#updateWafFirewallVersion) | Update a firewall version
*Fastly.WafFirewallsApi* | [**createWafFirewall**](docs/WafFirewallsApi.md#createWafFirewall) | Create a firewall
*Fastly.WafFirewallsApi* | [**deleteWafFirewall**](docs/WafFirewallsApi.md#deleteWafFirewall) | Delete a firewall
*Fastly.WafFirewallsApi* | [**getWafFirewall**](docs/WafFirewallsApi.md#getWafFirewall) | Get a firewall
*Fastly.WafFirewallsApi* | [**listWafFirewalls**](docs/WafFirewallsApi.md#listWafFirewalls) | List firewalls
*Fastly.WafFirewallsApi* | [**updateWafFirewall**](docs/WafFirewallsApi.md#updateWafFirewall) | Update a firewall
*Fastly.WafRuleRevisionsApi* | [**getWafRuleRevision**](docs/WafRuleRevisionsApi.md#getWafRuleRevision) | Get a revision of a rule
*Fastly.WafRuleRevisionsApi* | [**listWafRuleRevisions**](docs/WafRuleRevisionsApi.md#listWafRuleRevisions) | List revisions for a rule
*Fastly.WafRulesApi* | [**getWafRule**](docs/WafRulesApi.md#getWafRule) | Get a rule
*Fastly.WafRulesApi* | [**listWafRules**](docs/WafRulesApi.md#listWafRules) | List available WAF rules
*Fastly.WafTagsApi* | [**listWafTags**](docs/WafTagsApi.md#listWafTags) | List tags


## Issues

If you encounter any non-security-related bug or unexpected behavior, please [file an issue][bug]
using the bug report template.

[bug]: https://github.com/fastly/fastly-js/issues/new?labels=bug

### Security issues

Please see our [SECURITY.md](./SECURITY.md) for guidance on reporting security-related issues.

## License

[MIT](./LICENSE).
