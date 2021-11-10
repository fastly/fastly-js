# Fastly.RateLimiter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A human readable name for the rate limiting rule. | [optional] 
**uri_dictionary_name** | **String** | The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited. | [optional] 
**http_methods** | **[String]** | Array of HTTP methods to apply rate limiting to. | [optional]  [one of: "HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE", "TRACE"]
**rps_limit** | **Number** | Upper limit of requests per second allowed by the rate limiter. | [optional] 
**window_size** | **Number** | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | [optional]  [one of: 1, 10, 60]
**client_key** | **[String]** | Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`. | [optional] 
**penalty_box_duration** | **Number** | Length of time in minutes that the rate limiter is in effect after the initial violation is detected. | [optional] 
**action** | **String** | The action to take when a rate limiter violation is detected. | [optional]  [one of: "response", "response_object", "log_only"]
**response** | [**RateLimiterResponse1**](RateLimiterResponse1.md) |  | [optional] 
**response_object_name** | **String** | Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional] 
**logger_type** | **String** | Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional]  [one of: "azureblob", "bigquery", "cloudfiles", "datadog", "digitalocean", "elasticsearch", "ftp", "gcs", "googleanalytics", "heroku", "honeycomb", "http", "https", "kafka", "kinesis", "logentries", "loggly", "logshuttle", "newrelic", "openstack", "papertrail", "pubsub", "s3", "scalyr", "sftp", "splunk", "stackdriver", "sumologic", "syslog"]
**feature_revision** | **Number** | Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional] 



 

### `http_methods`

* `HEAD` (value: `"HEAD"`)

* `OPTIONS` (value: `"OPTIONS"`)

* `GET` (value: `"GET"`)

* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)

* `PATCH` (value: `"PATCH"`)

* `DELETE` (value: `"DELETE"`)

* `TRACE` (value: `"TRACE"`)





 

### `window_size`

* `one_second` (value: `1`)

* `ten_seconds` (value: `10`)

* `one_minute` (value: `60`)





 

### `action`

* `response` (value: `"response"`)

* `response_object` (value: `"response_object"`)

* `log_only` (value: `"log_only"`)





 

### `logger_type`

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
