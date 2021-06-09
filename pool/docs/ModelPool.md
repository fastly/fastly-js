# Pool.ModelPool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deletedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updatedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**tlsCaCert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tlsClientCert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tlsClientKey** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tlsCertHostname** | **String** | The hostname used to verify a server&#39;s certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN). | [optional] [default to &#39;null&#39;]
**useTls** | **Number** | Whether to use TLS. | [optional] [default to UseTlsEnum.0]
**id** | **String** | Alphanumeric string identifying a Pool. | [optional] [readonly] 
**name** | **String** | Name for the Pool. | [optional] 
**shield** | **String** | Selected POP to serve as a shield for the servers. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [datacenters API endpoint](/reference/api/utils/datacenter/) to get a list of available POPs used for shielding. | [optional] 
**requestCondition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional] 
**maxConnDefault** | **Number** | Maximum number of connections. | [optional] 
**connectTimeout** | **Number** | How long to wait for a timeout in milliseconds. Optional. | [optional] 
**firstByteTimeout** | **Number** | How long to wait for the first byte in milliseconds. Optional. | [optional] 
**quorum** | **Number** | Percentage of capacity (&#x60;0-100&#x60;) that needs to be operationally available for a pool to be considered up. | [optional] [default to 75]
**tlsCiphers** | **String** | List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional. | [optional] 
**tlsSniHostname** | **String** | SNI hostname. Optional. | [optional] 
**tlsCheckCert** | **Number** | Be strict on checking TLS certs. Optional. | [optional] 
**minTlsVersion** | **Number** | Minimum allowed TLS version on connections to this server. Optional. | [optional] 
**maxTlsVersion** | **Number** | Maximum allowed TLS version on connections to this server. Optional. | [optional] 
**healthcheck** | **String** | Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools. | [optional] 
**comment** | **String** | A freeform descriptive note. | [optional] [default to &#39;&#39;]
**type** | **String** | What type of load balance group to use. | [optional] 
**overrideHost** | **String** | The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to &#x60;null&#x60; meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting. | [optional] [default to &#39;null&#39;]



## Enum: UseTlsEnum


* `0` (value: `0`)

* `1` (value: `1`)





## Enum: TypeEnum


* `random` (value: `"random"`)

* `hash` (value: `"hash"`)

* `client` (value: `"client"`)




