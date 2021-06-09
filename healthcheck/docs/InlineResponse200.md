# Healthcheck.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**checkInterval** | **Number** | How often to run the healthcheck in milliseconds. | [optional] 
**comment** | **String** | A freeform descriptive note. | [optional] [default to &#39;&#39;]
**expectedResponse** | **Number** | The status code expected from the host. | [optional] 
**host** | **String** | Which host to check. | [optional] 
**httpVersion** | **String** | Whether to use version 1.0 or 1.1 HTTP. | [optional] 
**initial** | **Number** | When loading a config, the initial number of probes to be seen as OK. | [optional] 
**method** | **String** | Which HTTP method to use. | [optional] 
**name** | **String** | The name of the healthcheck. | [optional] 
**path** | **String** | The path to check. | [optional] 
**threshold** | **Number** | How many healthchecks must succeed to be considered healthy. | [optional] 
**timeout** | **Number** | Timeout in milliseconds. | [optional] 
**window** | **Number** | The number of most recent healthcheck queries to keep for this healthcheck. | [optional] 


