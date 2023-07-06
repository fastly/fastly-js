# Fastly.DomainInspectorRealtimeEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recorded** | [**RecordedTimestamp**](RecordedTimestamp.md) |  | [optional] 
**aggregated** | [**{String: DomainInspectorMeasurements}**](DomainInspectorMeasurements.md) | Groups [measurements](#measurements-data-model) by backend name and then by IP address. | [optional] 
**datacenter** | **{String: {String: DomainInspectorMeasurements}}** | Groups [measurements](#measurements-data-model) by POP, then backend name, and then IP address. See the [POPs API](/reference/api/utils/pops/) for details about POP identifiers. | [optional] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
