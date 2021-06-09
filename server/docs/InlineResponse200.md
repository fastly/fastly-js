# Server.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deletedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updatedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**id** | **String** | Alphanumeric string identifying a Server. | [optional] [readonly] 
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] 
**poolId** | **String** | Alphanumeric string identifying a Pool. | [optional] [readonly] 
**weight** | **Number** | Weight (&#x60;1-100&#x60;) used to load balance this server against others. | [optional] [default to 100]
**maxConn** | **Number** | Maximum number of connections. If the value is &#x60;0&#x60;, it inherits the value from pool&#39;s &#x60;max_conn_default&#x60;. | [optional] [default to 0]
**port** | **Number** | Port number. Setting port &#x60;443&#x60; does not force TLS. Set &#x60;use_tls&#x60; in pool to force TLS. | [optional] [default to 80]
**address** | **String** | A hostname, IPv4, or IPv6 address for the server. Required. | [optional] 
**comment** | **String** | A freeform descriptive note. | [optional] [default to &#39;&#39;]
**disabled** | **Boolean** | Allows servers to be enabled and disabled in a pool. | [optional] [default to false]
**overrideHost** | **String** | The hostname to override the Host header. Defaults to &#x60;null&#x60; meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting. | [optional] [default to &#39;null&#39;]


