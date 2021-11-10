# Fastly.DirectorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | [**[SchemasBackend]**](SchemasBackend.md) | List of backends associated to a director. | [optional] 
**capacity** | **Number** | Unused. | [optional] 
**comment** | **String** | A freeform descriptive note. | [optional] 
**name** | **String** | Name for the Director. | [optional] 
**quorum** | **Number** | The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`. | [optional] [defaults to 75]
**shield** | **String** | Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding. | [optional] [defaults to 'null']
**type** | **Number** | What type of load balance group to use. | [optional]  [one of: 1, 3, 4][defaults to TypeEnum.random]
**retries** | **Number** | How many backends to search if it fails. | [optional] [defaults to 5]
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 



 

### `type`

* `random` (value: `1`)

* `hash` (value: `3`)

* `client` (value: `4`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
