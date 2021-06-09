# RequestSettings.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**action** | **String** | Allows you to terminate request handling and immediately perform an action. When set it can be &#x60;lookup&#x60; or &#x60;pass&#x60; (ignore the cache completely). | [optional] 
**bypassBusyWait** | **Number** | Disable collapsed forwarding, so you don&#39;t wait for other objects to origin. | [optional] 
**defaultHost** | **String** | Sets the host header. | [optional] 
**forceMiss** | **Number** | Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable. | [optional] 
**forceSsl** | **Number** | Forces the request use SSL (redirects a non-SSL to SSL). | [optional] 
**geoHeaders** | **Number** | Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers. | [optional] 
**hashKeys** | **String** | Comma separated list of varnish request object fields that should be in the hash key. | [optional] 
**maxStaleAge** | **Number** | How old an object is allowed to be to serve stale-if-error or stale-while-revalidate. | [optional] 
**name** | **String** | Name for the request settings. | [optional] 
**requestCondition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional] 
**timerSupport** | **Number** | Injects the X-Timer info into the request for viewing origin fetch durations. | [optional] 
**xff** | **String** | Short for X-Forwarded-For, should be &#x60;clear&#x60;, &#x60;leave&#x60;, &#x60;append&#x60;, &#x60;append_all&#x60;, or &#x60;overwrite&#x60;. | [optional] 


