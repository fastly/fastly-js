# Fastly.RateLimiter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human readable name for the rate limiting rule. | [optional] 
**uri_dictionary_name** | **String** | The name of an Edge Dictionary containing URIs as keys. If not defined or &#x60;null&#x60;, all origin URIs will be rate limited. | [optional] 
**http_methods** | **[String]** | Array of HTTP methods to apply rate limiting to. | [optional] 
**rps_limit** | **Number** | Upper limit of requests per second allowed by the rate limiter. | [optional] 
**window_size** | **Number** | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | [optional] 
**client_key** | **[String]** | Array of VCL variables used to generate a counter key to identify a client. Example variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | [optional] 
**penalty_box_duration** | **Number** | Length of time in minutes that the rate limiter is in effect after the initial violation is detected. | [optional] 
**action** | **String** | The action to take when a rate limiter violation is detected. | [optional] 
**response** | [**RateLimiterResponse1**](RateLimiterResponse1.md) |  | [optional] 
**response_object_name** | **String** | Name of existing response object. Required if &#x60;action&#x60; is &#x60;response_object&#x60;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional] 
**logger_type** | **String** | Name of the type of logging endpoint to be used when action is &#x60;log_only&#x60;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional] 
**feature_revision** | **Number** | Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional] 



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


* `one_second` (value: `1`)

* `ten_seconds` (value: `10`)

* `one_minute` (value: `60`)





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





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
