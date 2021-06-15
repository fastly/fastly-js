# FastlyApi.ModelRequestSettingsAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Allows you to terminate request handling and immediately perform an action. When set it can be &#x60;lookup&#x60; or &#x60;pass&#x60; (ignore the cache completely). | [optional] 
**bypass_busy_wait** | **Number** | Disable collapsed forwarding, so you don&#39;t wait for other objects to origin. | [optional] 
**default_host** | **String** | Sets the host header. | [optional] 
**force_miss** | **Number** | Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable. | [optional] 
**force_ssl** | **Number** | Forces the request use SSL (redirects a non-SSL to SSL). | [optional] 
**geo_headers** | **Number** | Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers. | [optional] 
**hash_keys** | **String** | Comma separated list of varnish request object fields that should be in the hash key. | [optional] 
**max_stale_age** | **Number** | How old an object is allowed to be to serve stale-if-error or stale-while-revalidate. | [optional] 
**name** | **String** | Name for the request settings. | [optional] 
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional] 
**timer_support** | **Number** | Injects the X-Timer info into the request for viewing origin fetch durations. | [optional] 
**xff** | **String** | Short for X-Forwarded-For, should be &#x60;clear&#x60;, &#x60;leave&#x60;, &#x60;append&#x60;, &#x60;append_all&#x60;, or &#x60;overwrite&#x60;. | [optional] 


