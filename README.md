# Fastly

A JavaScript client library for interacting with most facets of the [Fastly API](https://developer.fastly.com/reference/api).

> ⚠️ This client library  is an early-access release. Features may change without notice. Use at your own risk.

**We strongly recommend that you do not install alpha and beta releases on live production services.** No official support is provided for such releases. Please try out the library in a test environment, see what breaks without worrying about consequences, and give us [feedback](#issues).

## Usage

Please follow the [installation](#installation) instructions and execute the following JS code:

```javascript
import FastlyApi from "fastly_api";


FastlyApi.ApiClient.instance.authenticate("YOUR FASTLY API KEY");

const api = new FastlyApi.AclApi()
const service_id = "service_id_example"; // {String} 
const version_id = 56; // {Number} 
const opts = {
  'name': "name_example" // {String} Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace.
};
api.createAcl(service_id, version_id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Authorization

The Fastly API requires an [API token](https://developer.fastly.com/reference/api/#authentication) for most operations.  Set it in the PHP client by using the `setApiToken` method of a configuration as shown:

```javascript
// TODO: refactor auth method and write static example here
```

## Endpoints

The main documentation for the Fastly API can be found on our [Developer Hub](https://developer.fastly.com/reference/api).

Class | Method | Description
------------ | ------------- | -------------
*FastlyApi.AclApi* | [**createAcl**](docs/AclApi.md#createAcl) | Create a new ACL
*FastlyApi.AclApi* | [**deleteAcl**](docs/AclApi.md#deleteAcl) | Delete an ACL
*FastlyApi.AclApi* | [**getAcl**](docs/AclApi.md#getAcl) | Describe an ACL
*FastlyApi.AclApi* | [**listAcls**](docs/AclApi.md#listAcls) | List ACLs
*FastlyApi.AclApi* | [**updateAcl**](docs/AclApi.md#updateAcl) | Update an ACL
*FastlyApi.AclEntryApi* | [**bulkUpdateAclEntries**](docs/AclEntryApi.md#bulkUpdateAclEntries) | Update multiple ACL entries
*FastlyApi.AclEntryApi* | [**createAclEntry**](docs/AclEntryApi.md#createAclEntry) | Create an ACL entry
*FastlyApi.AclEntryApi* | [**deleteAclEntry**](docs/AclEntryApi.md#deleteAclEntry) | Delete an ACL entry
*FastlyApi.AclEntryApi* | [**getAclEntry**](docs/AclEntryApi.md#getAclEntry) | Describe an ACL entry
*FastlyApi.AclEntryApi* | [**listAclEntries**](docs/AclEntryApi.md#listAclEntries) | List ACL entries
*FastlyApi.AclEntryApi* | [**updateAclEntry**](docs/AclEntryApi.md#updateAclEntry) | Update an ACL entry
*FastlyApi.BackendApi* | [**createBackend**](docs/BackendApi.md#createBackend) | Create a backend
*FastlyApi.BackendApi* | [**deleteBackend**](docs/BackendApi.md#deleteBackend) | Delete a backend
*FastlyApi.BackendApi* | [**getBackend**](docs/BackendApi.md#getBackend) | Describe a backend
*FastlyApi.BackendApi* | [**listBackends**](docs/BackendApi.md#listBackends) | List backends
*FastlyApi.BackendApi* | [**updateBackend**](docs/BackendApi.md#updateBackend) | Update a backend
*FastlyApi.CacheSettingsApi* | [**createCacheSettings**](docs/CacheSettingsApi.md#createCacheSettings) | Create a cache settings object
*FastlyApi.CacheSettingsApi* | [**deleteCacheSettings**](docs/CacheSettingsApi.md#deleteCacheSettings) | Delete a cache settings object
*FastlyApi.CacheSettingsApi* | [**getCacheSettings**](docs/CacheSettingsApi.md#getCacheSettings) | Get a cache settings object
*FastlyApi.CacheSettingsApi* | [**listCacheSettings**](docs/CacheSettingsApi.md#listCacheSettings) | List cache settings objects
*FastlyApi.CacheSettingsApi* | [**updateCacheSettings**](docs/CacheSettingsApi.md#updateCacheSettings) | Update a cache settings object
*FastlyApi.ConditionApi* | [**createCondition**](docs/ConditionApi.md#createCondition) | Create a condition
*FastlyApi.ConditionApi* | [**deleteCondition**](docs/ConditionApi.md#deleteCondition) | Delete a condition
*FastlyApi.ConditionApi* | [**getCondition**](docs/ConditionApi.md#getCondition) | Describe a condition
*FastlyApi.ConditionApi* | [**listConditions**](docs/ConditionApi.md#listConditions) | List conditions
*FastlyApi.ConditionApi* | [**updateCondition**](docs/ConditionApi.md#updateCondition) | Update a condition
*FastlyApi.ContentApi* | [**contentCheck**](docs/ContentApi.md#contentCheck) | Check status of content in each data center cache
*FastlyApi.CustomerApi* | [**deleteCustomer**](docs/CustomerApi.md#deleteCustomer) | Delete a customer
*FastlyApi.CustomerApi* | [**getCustomer**](docs/CustomerApi.md#getCustomer) | Get a customer
*FastlyApi.CustomerApi* | [**getLoggedInCustomer**](docs/CustomerApi.md#getLoggedInCustomer) | Get the logged in customer
*FastlyApi.CustomerApi* | [**listUsers**](docs/CustomerApi.md#listUsers) | List users
*FastlyApi.CustomerApi* | [**updateCustomer**](docs/CustomerApi.md#updateCustomer) | Update a customer
*FastlyApi.DictionaryApi* | [**createDictionary**](docs/DictionaryApi.md#createDictionary) | Create an edge dictionary
*FastlyApi.DictionaryApi* | [**deleteDictionary**](docs/DictionaryApi.md#deleteDictionary) | Delete an edge dictionary
*FastlyApi.DictionaryApi* | [**getDictionary**](docs/DictionaryApi.md#getDictionary) | Get an edge dictionary
*FastlyApi.DictionaryApi* | [**listDictionaries**](docs/DictionaryApi.md#listDictionaries) | List edge dictionaries
*FastlyApi.DictionaryApi* | [**updateDictionary**](docs/DictionaryApi.md#updateDictionary) | Update an edge dictionary
*FastlyApi.DictionaryInfoApi* | [**getDictionaryInfo**](docs/DictionaryInfoApi.md#getDictionaryInfo) | Get edge dictionary metadata
*FastlyApi.DictionaryItemApi* | [**bulkUpdateDictionaryItem**](docs/DictionaryItemApi.md#bulkUpdateDictionaryItem) | Update multiple entries in an edge dictionary
*FastlyApi.DictionaryItemApi* | [**createDictionaryItem**](docs/DictionaryItemApi.md#createDictionaryItem) | Create an entry in an edge dictionary
*FastlyApi.DictionaryItemApi* | [**deleteDictionaryItem**](docs/DictionaryItemApi.md#deleteDictionaryItem) | Delete an item from an edge dictionary
*FastlyApi.DictionaryItemApi* | [**getDictionaryItem**](docs/DictionaryItemApi.md#getDictionaryItem) | Get an item from an edge dictionary
*FastlyApi.DictionaryItemApi* | [**listDictionaryItems**](docs/DictionaryItemApi.md#listDictionaryItems) | List items in an edge dictionary
*FastlyApi.DictionaryItemApi* | [**updateDictionaryItem**](docs/DictionaryItemApi.md#updateDictionaryItem) | Update an entry in an edge dictionary
*FastlyApi.DictionaryItemApi* | [**upsertDictionaryItem**](docs/DictionaryItemApi.md#upsertDictionaryItem) | Insert or update an entry in an edge dictionary
*FastlyApi.DiffApi* | [**diffServiceVersions**](docs/DiffApi.md#diffServiceVersions) | Diff two service versions
*FastlyApi.DirectorApi* | [**createDirector**](docs/DirectorApi.md#createDirector) | Create a director
*FastlyApi.DirectorApi* | [**deleteDirector**](docs/DirectorApi.md#deleteDirector) | Delete a director
*FastlyApi.DirectorApi* | [**getDirector**](docs/DirectorApi.md#getDirector) | Get a director
*FastlyApi.DirectorApi* | [**listDirectors**](docs/DirectorApi.md#listDirectors) | List directors
*FastlyApi.DirectorApi* | [**updateDirector**](docs/DirectorApi.md#updateDirector) | Update a director
*FastlyApi.DirectorBackendApi* | [**createDirectorBackend**](docs/DirectorBackendApi.md#createDirectorBackend) | Create a director-backend relationship
*FastlyApi.DirectorBackendApi* | [**deleteDirectorBackend**](docs/DirectorBackendApi.md#deleteDirectorBackend) | Delete a director-backend relationship
*FastlyApi.DirectorBackendApi* | [**getDirectorBackend**](docs/DirectorBackendApi.md#getDirectorBackend) | Get a director-backend relationship
*FastlyApi.DomainApi* | [**checkDomain**](docs/DomainApi.md#checkDomain) | Validate DNS configuration for a single domain on a service
*FastlyApi.DomainApi* | [**checkDomains**](docs/DomainApi.md#checkDomains) | Validate DNS configuration for all domains on a service
*FastlyApi.DomainApi* | [**createDomain**](docs/DomainApi.md#createDomain) | Add a domain name to a service
*FastlyApi.DomainApi* | [**deleteDomain**](docs/DomainApi.md#deleteDomain) | Remove a domain from a service
*FastlyApi.DomainApi* | [**getDomain**](docs/DomainApi.md#getDomain) | Describe a domain
*FastlyApi.DomainApi* | [**listDomains**](docs/DomainApi.md#listDomains) | List domains
*FastlyApi.DomainApi* | [**updateDomain**](docs/DomainApi.md#updateDomain) | Update a domain
*FastlyApi.EventsApi* | [**getEvent**](docs/EventsApi.md#getEvent) | Get an event
*FastlyApi.EventsApi* | [**listEvents**](docs/EventsApi.md#listEvents) | List events
*FastlyApi.GzipApi* | [**createGzipConfig**](docs/GzipApi.md#createGzipConfig) | Create a gzip configuration
*FastlyApi.GzipApi* | [**deleteGzipConfig**](docs/GzipApi.md#deleteGzipConfig) | Delete a gzip configuration
*FastlyApi.GzipApi* | [**getGzipConfigs**](docs/GzipApi.md#getGzipConfigs) | Get a gzip configuration
*FastlyApi.GzipApi* | [**listGzipConfigs**](docs/GzipApi.md#listGzipConfigs) | List gzip configurations
*FastlyApi.GzipApi* | [**updateGzipConfig**](docs/GzipApi.md#updateGzipConfig) | Update a gzip configuration
*FastlyApi.HeaderApi* | [**createHeaderObject**](docs/HeaderApi.md#createHeaderObject) | Create a Header object
*FastlyApi.HeaderApi* | [**deleteHeaderObject**](docs/HeaderApi.md#deleteHeaderObject) | Delete a Header object
*FastlyApi.HeaderApi* | [**getHeaderObject**](docs/HeaderApi.md#getHeaderObject) | Get a Header object
*FastlyApi.HeaderApi* | [**listHeaderObjects**](docs/HeaderApi.md#listHeaderObjects) | List Header objects
*FastlyApi.HeaderApi* | [**updateHeaderObject**](docs/HeaderApi.md#updateHeaderObject) | Update a Header object
*FastlyApi.HealthcheckApi* | [**createHealthcheck**](docs/HealthcheckApi.md#createHealthcheck) | Create a healthcheck
*FastlyApi.HealthcheckApi* | [**deleteHealthcheck**](docs/HealthcheckApi.md#deleteHealthcheck) | Delete a healthcheck
*FastlyApi.HealthcheckApi* | [**getHealthcheck**](docs/HealthcheckApi.md#getHealthcheck) | Get a healthcheck
*FastlyApi.HealthcheckApi* | [**listHealthchecks**](docs/HealthcheckApi.md#listHealthchecks) | List healthchecks
*FastlyApi.HealthcheckApi* | [**updateHealthcheck**](docs/HealthcheckApi.md#updateHealthcheck) | Update a healthcheck
*FastlyApi.InvitationsApi* | [**createInvitation**](docs/InvitationsApi.md#createInvitation) | Create an invitation
*FastlyApi.InvitationsApi* | [**deleteInvitation**](docs/InvitationsApi.md#deleteInvitation) | Delete an invitation
*FastlyApi.InvitationsApi* | [**listInvitations**](docs/InvitationsApi.md#listInvitations) | List invitations
*FastlyApi.LoggingAzureblobApi* | [**createLogAzure**](docs/LoggingAzureblobApi.md#createLogAzure) | Create an Azure Blob Storage log endpoint
*FastlyApi.LoggingAzureblobApi* | [**deleteLogAzure**](docs/LoggingAzureblobApi.md#deleteLogAzure) | Delete the Azure Blob Storage log endpoint
*FastlyApi.LoggingAzureblobApi* | [**getLogAzure**](docs/LoggingAzureblobApi.md#getLogAzure) | Get an Azure Blob Storage log endpoint
*FastlyApi.LoggingAzureblobApi* | [**listLogAzure**](docs/LoggingAzureblobApi.md#listLogAzure) | List Azure Blob Storage log endpoints
*FastlyApi.LoggingAzureblobApi* | [**updateLogAzure**](docs/LoggingAzureblobApi.md#updateLogAzure) | Update an Azure Blob Storage log endpoint
*FastlyApi.LoggingBigqueryApi* | [**createLogBigquery**](docs/LoggingBigqueryApi.md#createLogBigquery) | Create a BigQuery log endpoint
*FastlyApi.LoggingBigqueryApi* | [**deleteLogBigquery**](docs/LoggingBigqueryApi.md#deleteLogBigquery) | Delete a BigQuery log endpoint
*FastlyApi.LoggingBigqueryApi* | [**getLogBigquery**](docs/LoggingBigqueryApi.md#getLogBigquery) | Get a BigQuery log endpoint
*FastlyApi.LoggingBigqueryApi* | [**listLogBigquery**](docs/LoggingBigqueryApi.md#listLogBigquery) | List BigQuery log endpoints
*FastlyApi.LoggingBigqueryApi* | [**updateLogBigquery**](docs/LoggingBigqueryApi.md#updateLogBigquery) | Update a BigQuery log endpoint
*FastlyApi.LoggingCloudfilesApi* | [**createLogCloudfiles**](docs/LoggingCloudfilesApi.md#createLogCloudfiles) | Create a Cloud Files log endpoint
*FastlyApi.LoggingCloudfilesApi* | [**deleteLogCloudfiles**](docs/LoggingCloudfilesApi.md#deleteLogCloudfiles) | Delete the Cloud Files log endpoint
*FastlyApi.LoggingCloudfilesApi* | [**getLogCloudfiles**](docs/LoggingCloudfilesApi.md#getLogCloudfiles) | Get a Cloud Files log endpoint
*FastlyApi.LoggingCloudfilesApi* | [**listLogCloudfiles**](docs/LoggingCloudfilesApi.md#listLogCloudfiles) | List Cloud Files log endpoints
*FastlyApi.LoggingCloudfilesApi* | [**updateLogCloudfiles**](docs/LoggingCloudfilesApi.md#updateLogCloudfiles) | Update the Cloud Files log endpoint
*FastlyApi.LoggingDatadogApi* | [**createLogDatadog**](docs/LoggingDatadogApi.md#createLogDatadog) | Create a Datadog log endpoint
*FastlyApi.LoggingDatadogApi* | [**deleteLogDatadog**](docs/LoggingDatadogApi.md#deleteLogDatadog) | Delete a Datadog log endpoint
*FastlyApi.LoggingDatadogApi* | [**getLogDatadog**](docs/LoggingDatadogApi.md#getLogDatadog) | Get a Datadog log endpoint
*FastlyApi.LoggingDatadogApi* | [**listLogDatadog**](docs/LoggingDatadogApi.md#listLogDatadog) | List Datadog log endpoints
*FastlyApi.LoggingDatadogApi* | [**updateLogDatadog**](docs/LoggingDatadogApi.md#updateLogDatadog) | Update a Datadog log endpoint
*FastlyApi.LoggingDigitaloceanApi* | [**createLogDigocean**](docs/LoggingDigitaloceanApi.md#createLogDigocean) | Create a DigitalOcean Spaces log endpoint
*FastlyApi.LoggingDigitaloceanApi* | [**deleteLogDigocean**](docs/LoggingDigitaloceanApi.md#deleteLogDigocean) | Delete a DigitalOcean Spaces log endpoint
*FastlyApi.LoggingDigitaloceanApi* | [**getLogDigocean**](docs/LoggingDigitaloceanApi.md#getLogDigocean) | Get a DigitalOcean Spaces log endpoint
*FastlyApi.LoggingDigitaloceanApi* | [**listLogDigocean**](docs/LoggingDigitaloceanApi.md#listLogDigocean) | List DigitalOcean Spaces log endpoints
*FastlyApi.LoggingDigitaloceanApi* | [**updateLogDigocean**](docs/LoggingDigitaloceanApi.md#updateLogDigocean) | Update a DigitalOcean Spaces log endpoint
*FastlyApi.LoggingElasticsearchApi* | [**createLogElasticsearch**](docs/LoggingElasticsearchApi.md#createLogElasticsearch) | Create an Elasticsearch log endpoint
*FastlyApi.LoggingElasticsearchApi* | [**deleteLogElasticsearch**](docs/LoggingElasticsearchApi.md#deleteLogElasticsearch) | Delete an Elasticsearch log endpoint
*FastlyApi.LoggingElasticsearchApi* | [**getLogElasticsearch**](docs/LoggingElasticsearchApi.md#getLogElasticsearch) | Get an Elasticsearch log endpoint
*FastlyApi.LoggingElasticsearchApi* | [**listLogElasticsearch**](docs/LoggingElasticsearchApi.md#listLogElasticsearch) | List Elasticsearch log endpoints
*FastlyApi.LoggingElasticsearchApi* | [**updateLogElasticsearch**](docs/LoggingElasticsearchApi.md#updateLogElasticsearch) | Update an Elasticsearch log endpoint
*FastlyApi.LoggingFtpApi* | [**createLogFtp**](docs/LoggingFtpApi.md#createLogFtp) | Create an FTP log endpoint
*FastlyApi.LoggingFtpApi* | [**deleteLogFtp**](docs/LoggingFtpApi.md#deleteLogFtp) | Delete an FTP log endpoint
*FastlyApi.LoggingFtpApi* | [**getLogFtp**](docs/LoggingFtpApi.md#getLogFtp) | Get an FTP log endpoint
*FastlyApi.LoggingFtpApi* | [**listLogFtp**](docs/LoggingFtpApi.md#listLogFtp) | List FTP log endpoints
*FastlyApi.LoggingFtpApi* | [**updateLogFtp**](docs/LoggingFtpApi.md#updateLogFtp) | Update an FTP log endpoint
*FastlyApi.LoggingGcsApi* | [**createLogGcs**](docs/LoggingGcsApi.md#createLogGcs) | Create a GCS log endpoint
*FastlyApi.LoggingGcsApi* | [**deleteLogGcs**](docs/LoggingGcsApi.md#deleteLogGcs) | Delete a GCS log endpoint
*FastlyApi.LoggingGcsApi* | [**getLogGcs**](docs/LoggingGcsApi.md#getLogGcs) | Get a GCS log endpoint
*FastlyApi.LoggingGcsApi* | [**listLogGcs**](docs/LoggingGcsApi.md#listLogGcs) | List GCS log endpoints
*FastlyApi.LoggingGcsApi* | [**updateLogGcs**](docs/LoggingGcsApi.md#updateLogGcs) | Update a GCS log endpoint
*FastlyApi.LoggingHerokuApi* | [**createLogHeroku**](docs/LoggingHerokuApi.md#createLogHeroku) | Create a Heroku log endpoint
*FastlyApi.LoggingHerokuApi* | [**deleteLogHeroku**](docs/LoggingHerokuApi.md#deleteLogHeroku) | Delete the Heroku log endpoint
*FastlyApi.LoggingHerokuApi* | [**getLogHeroku**](docs/LoggingHerokuApi.md#getLogHeroku) | Get a Heroku log endpoint
*FastlyApi.LoggingHerokuApi* | [**listLogHeroku**](docs/LoggingHerokuApi.md#listLogHeroku) | List Heroku log endpoints
*FastlyApi.LoggingHerokuApi* | [**updateLogHeroku**](docs/LoggingHerokuApi.md#updateLogHeroku) | Update the Heroku log endpoint
*FastlyApi.LoggingHoneycombApi* | [**createLogHoneycomb**](docs/LoggingHoneycombApi.md#createLogHoneycomb) | Create a Honeycomb log endpoint
*FastlyApi.LoggingHoneycombApi* | [**deleteLogHoneycomb**](docs/LoggingHoneycombApi.md#deleteLogHoneycomb) | Delete the Honeycomb log endpoint
*FastlyApi.LoggingHoneycombApi* | [**getLogHoneycomb**](docs/LoggingHoneycombApi.md#getLogHoneycomb) | Get a Honeycomb log endpoint
*FastlyApi.LoggingHoneycombApi* | [**listLogHoneycomb**](docs/LoggingHoneycombApi.md#listLogHoneycomb) | List Honeycomb log endpoints
*FastlyApi.LoggingHoneycombApi* | [**updateLogHoneycomb**](docs/LoggingHoneycombApi.md#updateLogHoneycomb) | Update a Honeycomb log endpoint
*FastlyApi.LoggingHttpsApi* | [**createLogHttps**](docs/LoggingHttpsApi.md#createLogHttps) | Create an HTTPS log endpoint
*FastlyApi.LoggingHttpsApi* | [**deleteLogHttps**](docs/LoggingHttpsApi.md#deleteLogHttps) | Delete an HTTPS log endpoint
*FastlyApi.LoggingHttpsApi* | [**getLogHttps**](docs/LoggingHttpsApi.md#getLogHttps) | Get an HTTPS log endpoint
*FastlyApi.LoggingHttpsApi* | [**listLogHttps**](docs/LoggingHttpsApi.md#listLogHttps) | List HTTPS log endpoints
*FastlyApi.LoggingHttpsApi* | [**updateLogHttps**](docs/LoggingHttpsApi.md#updateLogHttps) | Update an HTTPS log endpoint
*FastlyApi.LoggingKafkaApi* | [**createLogKafka**](docs/LoggingKafkaApi.md#createLogKafka) | Create a Kafka log endpoint
*FastlyApi.LoggingKafkaApi* | [**deleteLogKafka**](docs/LoggingKafkaApi.md#deleteLogKafka) | Delete the Kafka log endpoint
*FastlyApi.LoggingKafkaApi* | [**getLogKafka**](docs/LoggingKafkaApi.md#getLogKafka) | Get a Kafka log endpoint
*FastlyApi.LoggingKafkaApi* | [**listLogKafka**](docs/LoggingKafkaApi.md#listLogKafka) | List Kafka log endpoints
*FastlyApi.LoggingKafkaApi* | [**updateLogKafka**](docs/LoggingKafkaApi.md#updateLogKafka) | Update the Kafka log endpoint
*FastlyApi.LoggingKinesisApi* | [**createLogKinesis**](docs/LoggingKinesisApi.md#createLogKinesis) | Create  an Amazon Kinesis log endpoint
*FastlyApi.LoggingKinesisApi* | [**deleteLogKinesis**](docs/LoggingKinesisApi.md#deleteLogKinesis) | Delete the Amazon Kinesis log endpoint
*FastlyApi.LoggingKinesisApi* | [**getLogKinesis**](docs/LoggingKinesisApi.md#getLogKinesis) | Get an Amazon Kinesis log endpoint
*FastlyApi.LoggingKinesisApi* | [**listLogKinesis**](docs/LoggingKinesisApi.md#listLogKinesis) | List Amazon Kinesis log endpoints
*FastlyApi.LoggingKinesisApi* | [**updateLogKinesis**](docs/LoggingKinesisApi.md#updateLogKinesis) | Update the Amazon Kinesis log endpoint
*FastlyApi.LoggingLogentriesApi* | [**createLogLogentries**](docs/LoggingLogentriesApi.md#createLogLogentries) | Create a Logentries log endpoint
*FastlyApi.LoggingLogentriesApi* | [**deleteLogLogentries**](docs/LoggingLogentriesApi.md#deleteLogLogentries) | Delete a Logentries log endpoint
*FastlyApi.LoggingLogentriesApi* | [**getLogLogentries**](docs/LoggingLogentriesApi.md#getLogLogentries) | Get a Logentries log endpoint
*FastlyApi.LoggingLogentriesApi* | [**listLogLogentries**](docs/LoggingLogentriesApi.md#listLogLogentries) | List Logentries log endpoints
*FastlyApi.LoggingLogentriesApi* | [**updateLogLogentries**](docs/LoggingLogentriesApi.md#updateLogLogentries) | Update a Logentries log endpoint
*FastlyApi.LoggingLogglyApi* | [**createLogLoggly**](docs/LoggingLogglyApi.md#createLogLoggly) | Create a Loggly log endpoint
*FastlyApi.LoggingLogglyApi* | [**deleteLogLoggly**](docs/LoggingLogglyApi.md#deleteLogLoggly) | Delete a Loggly log endpoint
*FastlyApi.LoggingLogglyApi* | [**getLogLoggly**](docs/LoggingLogglyApi.md#getLogLoggly) | Get a Loggly log endpoint
*FastlyApi.LoggingLogglyApi* | [**listLogLoggly**](docs/LoggingLogglyApi.md#listLogLoggly) | List Loggly log endpoints
*FastlyApi.LoggingLogglyApi* | [**updateLogLoggly**](docs/LoggingLogglyApi.md#updateLogLoggly) | Update a Loggly log endpoint
*FastlyApi.LoggingLogshuttleApi* | [**createLogLogshuttle**](docs/LoggingLogshuttleApi.md#createLogLogshuttle) | Create a Log Shuttle log endpoint
*FastlyApi.LoggingLogshuttleApi* | [**deleteLogLogshuttle**](docs/LoggingLogshuttleApi.md#deleteLogLogshuttle) | Delete a Log Shuttle log endpoint
*FastlyApi.LoggingLogshuttleApi* | [**getLogLogshuttle**](docs/LoggingLogshuttleApi.md#getLogLogshuttle) | Get a Log Shuttle log endpoint
*FastlyApi.LoggingLogshuttleApi* | [**listLogLogshuttle**](docs/LoggingLogshuttleApi.md#listLogLogshuttle) | List Log Shuttle log endpoints
*FastlyApi.LoggingLogshuttleApi* | [**updateLogLogshuttle**](docs/LoggingLogshuttleApi.md#updateLogLogshuttle) | Update a Log Shuttle log endpoint
*FastlyApi.LoggingNewrelicApi* | [**createLogNewrelic**](docs/LoggingNewrelicApi.md#createLogNewrelic) | Create a New Relic log endpoint
*FastlyApi.LoggingNewrelicApi* | [**deleteLogNewrelic**](docs/LoggingNewrelicApi.md#deleteLogNewrelic) | Delete a New Relic log endpoint
*FastlyApi.LoggingNewrelicApi* | [**getLogNewrelic**](docs/LoggingNewrelicApi.md#getLogNewrelic) | Get a New Relic log endpoint
*FastlyApi.LoggingNewrelicApi* | [**listLogNewrelic**](docs/LoggingNewrelicApi.md#listLogNewrelic) | List New Relic log endpoints
*FastlyApi.LoggingNewrelicApi* | [**updateLogNewrelic**](docs/LoggingNewrelicApi.md#updateLogNewrelic) | Update a New Relic log endpoint
*FastlyApi.LoggingOpenstackApi* | [**createLogOpenstack**](docs/LoggingOpenstackApi.md#createLogOpenstack) | Create an OpenStack log endpoint
*FastlyApi.LoggingOpenstackApi* | [**deleteLogOpenstack**](docs/LoggingOpenstackApi.md#deleteLogOpenstack) | Delete an OpenStack log endpoint
*FastlyApi.LoggingOpenstackApi* | [**getLogOpenstack**](docs/LoggingOpenstackApi.md#getLogOpenstack) | Get an OpenStack log endpoint
*FastlyApi.LoggingOpenstackApi* | [**listLogOpenstack**](docs/LoggingOpenstackApi.md#listLogOpenstack) | List OpenStack log endpoints
*FastlyApi.LoggingOpenstackApi* | [**updateLogOpenstack**](docs/LoggingOpenstackApi.md#updateLogOpenstack) | Update an OpenStack log endpoint
*FastlyApi.LoggingPapertrailApi* | [**createLogPapertrail**](docs/LoggingPapertrailApi.md#createLogPapertrail) | Create a Papertrail log endpoint
*FastlyApi.LoggingPapertrailApi* | [**deleteLogPapertrail**](docs/LoggingPapertrailApi.md#deleteLogPapertrail) | Delete a Papertrail log endpoint
*FastlyApi.LoggingPapertrailApi* | [**getLogPapertrail**](docs/LoggingPapertrailApi.md#getLogPapertrail) | Get a Papertrail log endpoint
*FastlyApi.LoggingPapertrailApi* | [**listLogPapertrail**](docs/LoggingPapertrailApi.md#listLogPapertrail) | List Papertrail log endpoints
*FastlyApi.LoggingPapertrailApi* | [**updateLogPapertrail**](docs/LoggingPapertrailApi.md#updateLogPapertrail) | Update a Papertrail log endpoint
*FastlyApi.LoggingPubsubApi* | [**createLogGcpPubsub**](docs/LoggingPubsubApi.md#createLogGcpPubsub) | Create a GCP Cloud Pub/Sub log endpoint
*FastlyApi.LoggingPubsubApi* | [**deleteLogGcpPubsub**](docs/LoggingPubsubApi.md#deleteLogGcpPubsub) | Delete a GCP Cloud Pub/Sub log endpoint
*FastlyApi.LoggingPubsubApi* | [**getLogGcpPubsub**](docs/LoggingPubsubApi.md#getLogGcpPubsub) | Get a GCP Cloud Pub/Sub log endpoint
*FastlyApi.LoggingPubsubApi* | [**listLogGcpPubsub**](docs/LoggingPubsubApi.md#listLogGcpPubsub) | List GCP Cloud Pub/Sub log endpoints
*FastlyApi.LoggingPubsubApi* | [**updateLogGcpPubsub**](docs/LoggingPubsubApi.md#updateLogGcpPubsub) | Update a GCP Cloud Pub/Sub log endpoint
*FastlyApi.LoggingS3Api* | [**createLogAwsS3**](docs/LoggingS3Api.md#createLogAwsS3) | Create an AWS S3 log endpoint
*FastlyApi.LoggingS3Api* | [**deleteLogAwsS3**](docs/LoggingS3Api.md#deleteLogAwsS3) | Delete an AWS S3 log endpoint
*FastlyApi.LoggingS3Api* | [**getLogAwsS3**](docs/LoggingS3Api.md#getLogAwsS3) | Get an AWS S3 log endpoint
*FastlyApi.LoggingS3Api* | [**listLogAwsS3**](docs/LoggingS3Api.md#listLogAwsS3) | List AWS S3 log endpoints
*FastlyApi.LoggingS3Api* | [**updateLogAwsS3**](docs/LoggingS3Api.md#updateLogAwsS3) | Update an AWS S3 log endpoint
*FastlyApi.LoggingScalyrApi* | [**createLogScalyr**](docs/LoggingScalyrApi.md#createLogScalyr) | Create a Scalyr log endpoint
*FastlyApi.LoggingScalyrApi* | [**deleteLogScalyr**](docs/LoggingScalyrApi.md#deleteLogScalyr) | Delete the Scalyr log endpoint
*FastlyApi.LoggingScalyrApi* | [**getLogScalyr**](docs/LoggingScalyrApi.md#getLogScalyr) | Get a Scalyr log endpoint
*FastlyApi.LoggingScalyrApi* | [**listLogScalyr**](docs/LoggingScalyrApi.md#listLogScalyr) | List Scalyr log endpoints
*FastlyApi.LoggingScalyrApi* | [**updateLogScalyr**](docs/LoggingScalyrApi.md#updateLogScalyr) | Update the Scalyr log endpoint
*FastlyApi.LoggingSftpApi* | [**createLogSftp**](docs/LoggingSftpApi.md#createLogSftp) | Create an SFTP log endpoint
*FastlyApi.LoggingSftpApi* | [**deleteLogSftp**](docs/LoggingSftpApi.md#deleteLogSftp) | Delete an SFTP log endpoint
*FastlyApi.LoggingSftpApi* | [**getLogSftp**](docs/LoggingSftpApi.md#getLogSftp) | Get an SFTP log endpoint
*FastlyApi.LoggingSftpApi* | [**listLogSftp**](docs/LoggingSftpApi.md#listLogSftp) | List SFTP log endpoints
*FastlyApi.LoggingSftpApi* | [**updateLogSftp**](docs/LoggingSftpApi.md#updateLogSftp) | Update an SFTP log endpoint
*FastlyApi.LoggingSplunkApi* | [**createLogSplunk**](docs/LoggingSplunkApi.md#createLogSplunk) | Create a Splunk log endpoint
*FastlyApi.LoggingSplunkApi* | [**deleteLogSplunk**](docs/LoggingSplunkApi.md#deleteLogSplunk) | Delete a Splunk log endpoint
*FastlyApi.LoggingSplunkApi* | [**getLogSplunk**](docs/LoggingSplunkApi.md#getLogSplunk) | Get a Splunk log endpoint
*FastlyApi.LoggingSplunkApi* | [**listLogSplunk**](docs/LoggingSplunkApi.md#listLogSplunk) | List Splunk log endpoints
*FastlyApi.LoggingSplunkApi* | [**updateLogSplunk**](docs/LoggingSplunkApi.md#updateLogSplunk) | Update a Splunk log endpoint
*FastlyApi.LoggingSumologicApi* | [**createLogSumologic**](docs/LoggingSumologicApi.md#createLogSumologic) | Create a Sumologic log endpoint
*FastlyApi.LoggingSumologicApi* | [**deleteLogSumologic**](docs/LoggingSumologicApi.md#deleteLogSumologic) | Delete a Sumologic log endpoint
*FastlyApi.LoggingSumologicApi* | [**getLogSumologic**](docs/LoggingSumologicApi.md#getLogSumologic) | Get a Sumologic log endpoint
*FastlyApi.LoggingSumologicApi* | [**listLogSumologic**](docs/LoggingSumologicApi.md#listLogSumologic) | List Sumologic log endpoints
*FastlyApi.LoggingSumologicApi* | [**updateLogSumologic**](docs/LoggingSumologicApi.md#updateLogSumologic) | Update a Sumologic log endpoint
*FastlyApi.LoggingSyslogApi* | [**createLogSyslog**](docs/LoggingSyslogApi.md#createLogSyslog) | Create a syslog log endpoint
*FastlyApi.LoggingSyslogApi* | [**deleteLogSyslog**](docs/LoggingSyslogApi.md#deleteLogSyslog) | Delete a syslog log endpoint
*FastlyApi.LoggingSyslogApi* | [**getLogSyslog**](docs/LoggingSyslogApi.md#getLogSyslog) | Get a syslog log endpoint
*FastlyApi.LoggingSyslogApi* | [**listLogSyslog**](docs/LoggingSyslogApi.md#listLogSyslog) | List Syslog log endpoints
*FastlyApi.LoggingSyslogApi* | [**updateLogSyslog**](docs/LoggingSyslogApi.md#updateLogSyslog) | Update a syslog log endpoint
*FastlyApi.PackageApi* | [**getPackage**](docs/PackageApi.md#getPackage) | Get details of the service&#39;s Compute@Edge package.
*FastlyApi.PackageApi* | [**putPackage**](docs/PackageApi.md#putPackage) | Upload a Compute@Edge package.
*FastlyApi.PoolApi* | [**createServerPool**](docs/PoolApi.md#createServerPool) | Create a server pool
*FastlyApi.PoolApi* | [**deleteServerPool**](docs/PoolApi.md#deleteServerPool) | Delete a server pool
*FastlyApi.PoolApi* | [**getServerPool**](docs/PoolApi.md#getServerPool) | Get a server pool
*FastlyApi.PoolApi* | [**listServerPools**](docs/PoolApi.md#listServerPools) | List server pools
*FastlyApi.PoolApi* | [**updateServerPool**](docs/PoolApi.md#updateServerPool) | Update a server pool
*FastlyApi.PublicIpListApi* | [**listFastlyIps**](docs/PublicIpListApi.md#listFastlyIps) | List Fastly&#39;s public IPs
*FastlyApi.RateLimiterApi* | [**createRateLimiter**](docs/RateLimiterApi.md#createRateLimiter) | Create a rate limiter
*FastlyApi.RateLimiterApi* | [**deleteRateLimiter**](docs/RateLimiterApi.md#deleteRateLimiter) | Delete a rate limiter
*FastlyApi.RateLimiterApi* | [**getRateLimiter**](docs/RateLimiterApi.md#getRateLimiter) | Get a rate limiter
*FastlyApi.RateLimiterApi* | [**listRateLimiters**](docs/RateLimiterApi.md#listRateLimiters) | List rate limiters
*FastlyApi.RateLimiterApi* | [**updateRateLimiter**](docs/RateLimiterApi.md#updateRateLimiter) | Update a rate limiter
*FastlyApi.RequestSettingsApi* | [**createRequestSettings**](docs/RequestSettingsApi.md#createRequestSettings) | Create a Request Settings object
*FastlyApi.RequestSettingsApi* | [**deleteRequestSettings**](docs/RequestSettingsApi.md#deleteRequestSettings) | Delete a Request Settings object
*FastlyApi.RequestSettingsApi* | [**getRequestSettings**](docs/RequestSettingsApi.md#getRequestSettings) | Get a Request Settings object
*FastlyApi.RequestSettingsApi* | [**listRequestSettings**](docs/RequestSettingsApi.md#listRequestSettings) | List Request Settings objects
*FastlyApi.RequestSettingsApi* | [**updateRequestSettings**](docs/RequestSettingsApi.md#updateRequestSettings) | Update a Request Settings object
*FastlyApi.ResponseObjectApi* | [**createResponseObject**](docs/ResponseObjectApi.md#createResponseObject) | Create a Response object
*FastlyApi.ResponseObjectApi* | [**deleteResponseObject**](docs/ResponseObjectApi.md#deleteResponseObject) | Delete a Response Object
*FastlyApi.ResponseObjectApi* | [**getResponseObject**](docs/ResponseObjectApi.md#getResponseObject) | Get a Response object
*FastlyApi.ResponseObjectApi* | [**listResponseObjects**](docs/ResponseObjectApi.md#listResponseObjects) | List Response objects
*FastlyApi.ResponseObjectApi* | [**updateResponseObject**](docs/ResponseObjectApi.md#updateResponseObject) | Update a Response object
*FastlyApi.ServerApi* | [**createPoolServer**](docs/ServerApi.md#createPoolServer) | Add a server to a pool
*FastlyApi.ServerApi* | [**deletePoolServer**](docs/ServerApi.md#deletePoolServer) | Delete a server from a pool
*FastlyApi.ServerApi* | [**getPoolServer**](docs/ServerApi.md#getPoolServer) | Get a pool server
*FastlyApi.ServerApi* | [**listPoolServers**](docs/ServerApi.md#listPoolServers) | List servers in a pool
*FastlyApi.ServerApi* | [**updatePoolServer**](docs/ServerApi.md#updatePoolServer) | Update a server
*FastlyApi.ServiceApi* | [**createService**](docs/ServiceApi.md#createService) | Create a service
*FastlyApi.ServiceApi* | [**deleteService**](docs/ServiceApi.md#deleteService) | Delete a service
*FastlyApi.ServiceApi* | [**getService**](docs/ServiceApi.md#getService) | Get a service
*FastlyApi.ServiceApi* | [**getServiceDetail**](docs/ServiceApi.md#getServiceDetail) | Get service details
*FastlyApi.ServiceApi* | [**listServiceDomains**](docs/ServiceApi.md#listServiceDomains) | List the domains within a service
*FastlyApi.ServiceApi* | [**listServices**](docs/ServiceApi.md#listServices) | List services
*FastlyApi.ServiceApi* | [**searchService**](docs/ServiceApi.md#searchService) | Search for a service by name
*FastlyApi.ServiceApi* | [**updateService**](docs/ServiceApi.md#updateService) | Update a service
*FastlyApi.SettingsApi* | [**getServiceSettings**](docs/SettingsApi.md#getServiceSettings) | Get service settings
*FastlyApi.SettingsApi* | [**updateServiceSettings**](docs/SettingsApi.md#updateServiceSettings) | Update service settings
*FastlyApi.SnippetApi* | [**createSnippet**](docs/SnippetApi.md#createSnippet) | Create a snippet
*FastlyApi.SnippetApi* | [**deleteSnippet**](docs/SnippetApi.md#deleteSnippet) | Delete a snippet
*FastlyApi.SnippetApi* | [**getSnippet**](docs/SnippetApi.md#getSnippet) | Get a versioned snippet
*FastlyApi.SnippetApi* | [**getSnippetDynamic**](docs/SnippetApi.md#getSnippetDynamic) | Get a dynamic snippet
*FastlyApi.SnippetApi* | [**listSnippets**](docs/SnippetApi.md#listSnippets) | List snippets
*FastlyApi.SnippetApi* | [**updateSnippet**](docs/SnippetApi.md#updateSnippet) | Update a versioned snippet
*FastlyApi.SnippetApi* | [**updateSnippetDynamic**](docs/SnippetApi.md#updateSnippetDynamic) | Update a dynamic snippet
*FastlyApi.StarApi* | [**createServiceStar**](docs/StarApi.md#createServiceStar) | Create a star
*FastlyApi.StarApi* | [**deleteServiceStar**](docs/StarApi.md#deleteServiceStar) | Delete a star
*FastlyApi.StarApi* | [**getServiceStar**](docs/StarApi.md#getServiceStar) | Get a star
*FastlyApi.StarApi* | [**listServiceStars**](docs/StarApi.md#listServiceStars) | List stars
*FastlyApi.TlsActivationsApi* | [**createTlsActivation**](docs/TlsActivationsApi.md#createTlsActivation) | Enable TLS for a domain using a custom certificate
*FastlyApi.TlsActivationsApi* | [**deleteTlsActivation**](docs/TlsActivationsApi.md#deleteTlsActivation) | Disable TLS on a domain
*FastlyApi.TlsActivationsApi* | [**getTlsActivation**](docs/TlsActivationsApi.md#getTlsActivation) | Get a TLS activation
*FastlyApi.TlsActivationsApi* | [**listTlsActivations**](docs/TlsActivationsApi.md#listTlsActivations) | List TLS activations
*FastlyApi.TlsActivationsApi* | [**updateTlsActivation**](docs/TlsActivationsApi.md#updateTlsActivation) | Update a certificate
*FastlyApi.TlsBulkCertificatesApi* | [**deleteBulkTlsCert**](docs/TlsBulkCertificatesApi.md#deleteBulkTlsCert) | Delete a certificate
*FastlyApi.TlsBulkCertificatesApi* | [**getTlsBulkCert**](docs/TlsBulkCertificatesApi.md#getTlsBulkCert) | Get a certificate
*FastlyApi.TlsBulkCertificatesApi* | [**listTlsBulkCerts**](docs/TlsBulkCertificatesApi.md#listTlsBulkCerts) | List certificates
*FastlyApi.TlsBulkCertificatesApi* | [**updateBulkTlsCert**](docs/TlsBulkCertificatesApi.md#updateBulkTlsCert) | Update a certificate
*FastlyApi.TlsBulkCertificatesApi* | [**uploadTlsBulkCert**](docs/TlsBulkCertificatesApi.md#uploadTlsBulkCert) | Upload a certificate
*FastlyApi.TlsCertificatesApi* | [**createTlsCert**](docs/TlsCertificatesApi.md#createTlsCert) | Create a TLS certificate
*FastlyApi.TlsCertificatesApi* | [**deleteTlsCert**](docs/TlsCertificatesApi.md#deleteTlsCert) | Delete a TLS certificate
*FastlyApi.TlsCertificatesApi* | [**getTlsCert**](docs/TlsCertificatesApi.md#getTlsCert) | Get a TLS certificate
*FastlyApi.TlsCertificatesApi* | [**listTlsCerts**](docs/TlsCertificatesApi.md#listTlsCerts) | List TLS certificates
*FastlyApi.TlsCertificatesApi* | [**updateTlsCert**](docs/TlsCertificatesApi.md#updateTlsCert) | Update a TLS certificate
*FastlyApi.TlsConfigurationsApi* | [**getTlsConfig**](docs/TlsConfigurationsApi.md#getTlsConfig) | Get a TLS configuration
*FastlyApi.TlsConfigurationsApi* | [**listTlsConfigs**](docs/TlsConfigurationsApi.md#listTlsConfigs) | List TLS configurations
*FastlyApi.TlsConfigurationsApi* | [**updateTlsConfig**](docs/TlsConfigurationsApi.md#updateTlsConfig) | Update a TLS configuration
*FastlyApi.TlsDomainsApi* | [**listTlsDomains**](docs/TlsDomainsApi.md#listTlsDomains) | List TLS domains
*FastlyApi.TlsPrivateKeysApi* | [**createTlsKey**](docs/TlsPrivateKeysApi.md#createTlsKey) | Create a TLS private key
*FastlyApi.TlsPrivateKeysApi* | [**deleteTlsKey**](docs/TlsPrivateKeysApi.md#deleteTlsKey) | Delete a TLS private key
*FastlyApi.TlsPrivateKeysApi* | [**getTlsKey**](docs/TlsPrivateKeysApi.md#getTlsKey) | Get a TLS private key
*FastlyApi.TlsPrivateKeysApi* | [**listTlsKeys**](docs/TlsPrivateKeysApi.md#listTlsKeys) | List TLS private keys
*FastlyApi.TlsSubscriptionsApi* | [**createTlsSub**](docs/TlsSubscriptionsApi.md#createTlsSub) | Create a TLS subscription
*FastlyApi.TlsSubscriptionsApi* | [**deleteTlsSub**](docs/TlsSubscriptionsApi.md#deleteTlsSub) | Delete a TLS subscription
*FastlyApi.TlsSubscriptionsApi* | [**getTlsSub**](docs/TlsSubscriptionsApi.md#getTlsSub) | Get a TLS subscription
*FastlyApi.TlsSubscriptionsApi* | [**listTlsSubs**](docs/TlsSubscriptionsApi.md#listTlsSubs) | List TLS subscriptions
*FastlyApi.TlsSubscriptionsApi* | [**patchTlsSub**](docs/TlsSubscriptionsApi.md#patchTlsSub) | Update a TLS subscription
*FastlyApi.TokensApi* | [**bulkRevokeTokens**](docs/TokensApi.md#bulkRevokeTokens) | Revoke multiple tokens
*FastlyApi.TokensApi* | [**createToken**](docs/TokensApi.md#createToken) | Create a token
*FastlyApi.TokensApi* | [**getTokenCurrent**](docs/TokensApi.md#getTokenCurrent) | Get the current token
*FastlyApi.TokensApi* | [**listTokensCustomer**](docs/TokensApi.md#listTokensCustomer) | List tokens for a customer
*FastlyApi.TokensApi* | [**listTokensUser**](docs/TokensApi.md#listTokensUser) | List tokens for the authenticated user
*FastlyApi.TokensApi* | [**revokeToken**](docs/TokensApi.md#revokeToken) | Revoke a token
*FastlyApi.TokensApi* | [**revokeTokenCurrent**](docs/TokensApi.md#revokeTokenCurrent) | Revoke the current token
*FastlyApi.UserApi* | [**createUser**](docs/UserApi.md#createUser) | Create a user
*FastlyApi.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | Delete a user
*FastlyApi.UserApi* | [**getCurrentUser**](docs/UserApi.md#getCurrentUser) | Get the current user
*FastlyApi.UserApi* | [**getUser**](docs/UserApi.md#getUser) | Get a user
*FastlyApi.UserApi* | [**requestPasswordReset**](docs/UserApi.md#requestPasswordReset) | Request a password reset
*FastlyApi.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | Update a user
*FastlyApi.UserApi* | [**updateUserPassword**](docs/UserApi.md#updateUserPassword) | Update the user&#39;s password
*FastlyApi.VclApi* | [**createCustomVcl**](docs/VclApi.md#createCustomVcl) | Create a custom VCL file
*FastlyApi.VclApi* | [**deleteCustomVcl**](docs/VclApi.md#deleteCustomVcl) | Delete a custom VCL file
*FastlyApi.VclApi* | [**getCustomVcl**](docs/VclApi.md#getCustomVcl) | Get a custom VCL file
*FastlyApi.VclApi* | [**getCustomVclBoilerplate**](docs/VclApi.md#getCustomVclBoilerplate) | Get boilerplate VCL
*FastlyApi.VclApi* | [**getCustomVclGenerated**](docs/VclApi.md#getCustomVclGenerated) | Get the generated VCL for a service
*FastlyApi.VclApi* | [**getCustomVclGeneratedHighlighted**](docs/VclApi.md#getCustomVclGeneratedHighlighted) | Get the generated VCL with syntax highlighting
*FastlyApi.VclApi* | [**getCustomVclHighlighted**](docs/VclApi.md#getCustomVclHighlighted) | Get a custom VCL file with syntax highlighting
*FastlyApi.VclApi* | [**getCustomVclRaw**](docs/VclApi.md#getCustomVclRaw) | Download a custom VCL file
*FastlyApi.VclApi* | [**listCustomVcl**](docs/VclApi.md#listCustomVcl) | List custom VCL files
*FastlyApi.VclApi* | [**setCustomVclMain**](docs/VclApi.md#setCustomVclMain) | Set a custom VCL file as main
*FastlyApi.VclApi* | [**updateCustomVcl**](docs/VclApi.md#updateCustomVcl) | Update a custom VCL file
*FastlyApi.VclDiffApi* | [**vclDiffServiceVersions**](docs/VclDiffApi.md#vclDiffServiceVersions) | Get a comparison of the VCL changes between two service versions
*FastlyApi.VersionApi* | [**activateServiceVersion**](docs/VersionApi.md#activateServiceVersion) | Activate a service version
*FastlyApi.VersionApi* | [**cloneServiceVersion**](docs/VersionApi.md#cloneServiceVersion) | Clone a service version
*FastlyApi.VersionApi* | [**createServiceVersion**](docs/VersionApi.md#createServiceVersion) | Create a service version
*FastlyApi.VersionApi* | [**deactivateServiceVersion**](docs/VersionApi.md#deactivateServiceVersion) | Deactivate a service version
*FastlyApi.VersionApi* | [**getServiceVersion**](docs/VersionApi.md#getServiceVersion) | Get a version of a service
*FastlyApi.VersionApi* | [**listServiceVersions**](docs/VersionApi.md#listServiceVersions) | List versions of a service
*FastlyApi.VersionApi* | [**lockServiceVersion**](docs/VersionApi.md#lockServiceVersion) | Lock a service version
*FastlyApi.VersionApi* | [**updateServiceVersion**](docs/VersionApi.md#updateServiceVersion) | Update a service version
*FastlyApi.VersionApi* | [**validateServiceVersion**](docs/VersionApi.md#validateServiceVersion) | Validate a service version
*FastlyApi.WafActiveRulesApi* | [**bulkDeleteWafActiveRules**](docs/WafActiveRulesApi.md#bulkDeleteWafActiveRules) | Delete multiple active rules from a WAF
*FastlyApi.WafActiveRulesApi* | [**bulkUpdateWafActiveRules**](docs/WafActiveRulesApi.md#bulkUpdateWafActiveRules) | Update multiple active rules
*FastlyApi.WafActiveRulesApi* | [**createWafActiveRule**](docs/WafActiveRulesApi.md#createWafActiveRule) | Add a rule to a WAF as an active rule
*FastlyApi.WafActiveRulesApi* | [**createWafActiveRulesTag**](docs/WafActiveRulesApi.md#createWafActiveRulesTag) | Create active rules by tag
*FastlyApi.WafActiveRulesApi* | [**deleteWafActiveRule**](docs/WafActiveRulesApi.md#deleteWafActiveRule) | Delete an active rule
*FastlyApi.WafActiveRulesApi* | [**getWafActiveRule**](docs/WafActiveRulesApi.md#getWafActiveRule) | Get an active WAF rule object
*FastlyApi.WafActiveRulesApi* | [**listWafActiveRules**](docs/WafActiveRulesApi.md#listWafActiveRules) | List active rules on a WAF
*FastlyApi.WafActiveRulesApi* | [**updateWafActiveRule**](docs/WafActiveRulesApi.md#updateWafActiveRule) | Update an active rule
*FastlyApi.WafExclusionsApi* | [**createWafRuleExclusion**](docs/WafExclusionsApi.md#createWafRuleExclusion) | Create a WAF rule exclusion
*FastlyApi.WafExclusionsApi* | [**deleteWafRuleExclusion**](docs/WafExclusionsApi.md#deleteWafRuleExclusion) | Delete a WAF rule exclusion
*FastlyApi.WafExclusionsApi* | [**getWafRuleExclusion**](docs/WafExclusionsApi.md#getWafRuleExclusion) | Get a WAF rule exclusion
*FastlyApi.WafExclusionsApi* | [**listWafRuleExclusions**](docs/WafExclusionsApi.md#listWafRuleExclusions) | List WAF rule exclusions
*FastlyApi.WafExclusionsApi* | [**updateWafRuleExclusion**](docs/WafExclusionsApi.md#updateWafRuleExclusion) | Update a WAF rule exclusion
*FastlyApi.WafFirewallVersionsApi* | [**cloneWafFirewallVersion**](docs/WafFirewallVersionsApi.md#cloneWafFirewallVersion) | Clone a firewall version
*FastlyApi.WafFirewallVersionsApi* | [**createWafFirewallVersion**](docs/WafFirewallVersionsApi.md#createWafFirewallVersion) | Create a firewall version
*FastlyApi.WafFirewallVersionsApi* | [**deployActivateWafFirewallVersion**](docs/WafFirewallVersionsApi.md#deployActivateWafFirewallVersion) | Deploy or activate a firewall version
*FastlyApi.WafFirewallVersionsApi* | [**getWafFirewallVersion**](docs/WafFirewallVersionsApi.md#getWafFirewallVersion) | Get a firewall version
*FastlyApi.WafFirewallVersionsApi* | [**listWafFirewallVersions**](docs/WafFirewallVersionsApi.md#listWafFirewallVersions) | List firewall versions
*FastlyApi.WafFirewallVersionsApi* | [**updateWafFirewallVersion**](docs/WafFirewallVersionsApi.md#updateWafFirewallVersion) | Update a firewall version
*FastlyApi.WafFirewallsApi* | [**createWafFirewall**](docs/WafFirewallsApi.md#createWafFirewall) | Create a firewall
*FastlyApi.WafFirewallsApi* | [**deleteWafFirewall**](docs/WafFirewallsApi.md#deleteWafFirewall) | Delete a firewall
*FastlyApi.WafFirewallsApi* | [**getWafFirewall**](docs/WafFirewallsApi.md#getWafFirewall) | Get a firewall
*FastlyApi.WafFirewallsApi* | [**listWafFirewalls**](docs/WafFirewallsApi.md#listWafFirewalls) | List firewalls
*FastlyApi.WafFirewallsApi* | [**updateWafFirewall**](docs/WafFirewallsApi.md#updateWafFirewall) | Update a firewall
*FastlyApi.WafRuleRevisionsApi* | [**getWafRuleRevision**](docs/WafRuleRevisionsApi.md#getWafRuleRevision) | Get a revision of a rule
*FastlyApi.WafRuleRevisionsApi* | [**listWafRuleRevisions**](docs/WafRuleRevisionsApi.md#listWafRuleRevisions) | List revisions for a rule
*FastlyApi.WafRulesApi* | [**getWafRule**](docs/WafRulesApi.md#getWafRule) | Get a rule
*FastlyApi.WafRulesApi* | [**listWafRules**](docs/WafRulesApi.md#listWafRules) | List available WAF rules
*FastlyApi.WafTagsApi* | [**listWafTags**](docs/WafTagsApi.md#listWafTags) | List tags


## Issues

If you encounter any non-security-related bug or unexpected behavior, please [file an issue][bug]
using the bug report template.

[bug]: https://github.com/fastly/fastly-php/issues/new?labels=bug

### Security issues

Please see our [SECURITY.md](./SECURITY.md) for guidance on reporting security-related issues.

## License

[MIT](./LICENSE).
