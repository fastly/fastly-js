# RateLimiter.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human readable name for the rate limiting rule. | 
**httpMethods** | **[String]** | Array of HTTP methods to apply rate limiting to. | 
**rpsLimit** | **Number** | Upper limit of requests per second allowed by the rate limiter. | 
**windowSize** | **Number** | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | 
**clientKey** | **[String]** | Array of VCL variables used to generate a counter key to identify a client. Examples variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | 
**penaltyBoxDuration** | **Number** | Length of time in seconds that the rate limiter is in effect after the initial violation is detected. | 
**action** | **String** | The action to take when a rate limiter violation is detected. \&quot;response\&quot; and \&quot;response_object\&quot; prevent an origin request; \&quot;log_only\&quot; logs the violation but allows the origin request to continue. | 
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**createdAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deletedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updatedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**uriDictionaryName** | **String** | The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited. | [optional] 
**response** | [**ServiceServiceIdVersionVersionIdRateLimitersResponse**](ServiceServiceIdVersionVersionIdRateLimitersResponse.md) |  | [optional] 
**responseObjectName** | **String** | Name of existing response object. Required if &#x60;action&#x60; is \&quot;response_object\&quot;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional] 
**loggerType** | **String** | Name of the type of logging endpoint to be used when action is \&quot;log_only\&quot;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional] 
**featureRevision** | **Number** | Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional] 



## Enum: [HttpMethodsEnum]


* `HEAD` (value: `"HEAD"`)

* `OPTIONS` (value: `"OPTIONS"`)

* `GET` (value: `"GET"`)

* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)

* `PATCH` (value: `"PATCH"`)

* `DELETE` (value: `"DELETE"`)

* `TRACE` (value: `"TRACE"`)





## Enum: WindowSizeEnum


* `1` (value: `1`)

* `10` (value: `10`)

* `60` (value: `60`)





## Enum: ActionEnum


* `response` (value: `"response"`)

* `response_object` (value: `"response_object"`)

* `log_only` (value: `"log_only"`)





## Enum: LoggerTypeEnum


* `azureblob` (value: `"azureblob"`)

* `bigquery` (value: `"bigquery"`)

* `cloudfiles` (value: `"cloudfiles"`)

* `datadog` (value: `"datadog"`)

* `digitalocean` (value: `"digitalocean"`)

* `elasticsearch` (value: `"elasticsearch"`)

* `ftp` (value: `"ftp"`)

* `gcs` (value: `"gcs"`)

* `googleanalytics` (value: `"googleanalytics"`)

* `heroku` (value: `"heroku"`)

* `honeycomb` (value: `"honeycomb"`)

* `http` (value: `"http"`)

* `https` (value: `"https"`)

* `kafka` (value: `"kafka"`)

* `kinesis` (value: `"kinesis"`)

* `logentries` (value: `"logentries"`)

* `loggly` (value: `"loggly"`)

* `logshuttle` (value: `"logshuttle"`)

* `newrelic` (value: `"newrelic"`)

* `openstack` (value: `"openstack"`)

* `papertrail` (value: `"papertrail"`)

* `pubsub` (value: `"pubsub"`)

* `s3` (value: `"s3"`)

* `scalyr` (value: `"scalyr"`)

* `sftp` (value: `"sftp"`)

* `splunk` (value: `"splunk"`)

* `stackdriver` (value: `"stackdriver"`)

* `sumologic` (value: `"sumologic"`)

* `syslog` (value: `"syslog"`)




