# Director.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deletedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updatedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**backends** | [**[ServiceServiceIdVersionVersionIdDirectorBackends]**](ServiceServiceIdVersionVersionIdDirectorBackends.md) | List of backends associated to a director. | [optional] 
**capacity** | **Number** | Unused. | [optional] 
**comment** | **String** | A freeform descriptive note. | [optional] [default to &#39;&#39;]
**name** | **String** | Name for the Director. | [optional] 
**quorum** | **Number** | The percentage of capacity that needs to be up for a director to be considered up. &#x60;0&#x60; to &#x60;100&#x60;. | [optional] [default to 75]
**shield** | **String** | Selected POP to serve as a shield for the backends. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [datacenters API endpoint](/reference/api/utils/datacenter/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
**type** | **Number** | What type of load balance group to use. | [optional] [default to TypeEnum.1]
**retries** | **Number** | How many backends to search if it fails. | [optional] [default to 5]



## Enum: TypeEnum


* `1` (value: `1`)

* `3` (value: `3`)

* `4` (value: `4`)




