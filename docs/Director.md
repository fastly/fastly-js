# FastlyApi.Director

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | [**[Backend]**](Backend.md) | List of backends associated to a director. | [optional] 
**capacity** | **Number** | Unused. | [optional] 
**comment** | **String** | A freeform descriptive note. | [optional] 
**name** | **String** | Name for the Director. | [optional] 
**quorum** | **Number** | The percentage of capacity that needs to be up for a director to be considered up. &#x60;0&#x60; to &#x60;100&#x60;. | [optional] [default to 75]
**shield** | **String** | Selected POP to serve as a shield for the backends. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
**type** | **Number** | What type of load balance group to use. | [optional] [default to TypeEnum.random]
**retries** | **Number** | How many backends to search if it fails. | [optional] [default to 5]



## Enum: TypeEnum


* `random` (value: `1`)

* `hash` (value: `3`)

* `client` (value: `4`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
