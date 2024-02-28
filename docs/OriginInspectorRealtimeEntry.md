# Fastly.OriginInspectorRealtimeEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recorded** | [**OriginInspectorRealtimeEntryRecorded**](OriginInspectorRealtimeEntryRecorded.md) |  | [optional] 
**aggregated** | [**{String: OriginInspectorMeasurements}**](OriginInspectorMeasurements.md) | Groups [measurements](#measurements-data-model) by backend name. | [optional] 
**datacenter** | **{String: {String: OriginInspectorMeasurements}}** | Groups [measurements](#measurements-data-model) by POP, then backend name. See the [POPs API](https://www.fastly.com/documentation/reference/api/utils/pops/) for details about POP identifiers. | [optional] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
