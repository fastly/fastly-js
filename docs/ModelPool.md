# FastlyApi.ModelPool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_cert_hostname** | **String** | The hostname used to verify a server&#39;s certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN). | [optional] [default to &#39;null&#39;]
**use_tls** | **Number** | Whether to use TLS. | [optional] [default to UseTlsEnum.0]
**id** | **String** | Alphanumeric string identifying a Pool. | [optional] [readonly] 
**name** | **String** | Name for the Pool. | [optional] 
**shield** | **String** | Selected POP to serve as a shield for the servers. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [datacenters API endpoint](/reference/api/utils/datacenter/) to get a list of available POPs used for shielding. | [optional] 
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional] 
**max_conn_default** | **Number** | Maximum number of connections. | [optional] 
**connect_timeout** | **Number** | How long to wait for a timeout in milliseconds. Optional. | [optional] 
**first_byte_timeout** | **Number** | How long to wait for the first byte in milliseconds. Optional. | [optional] 
**quorum** | **Number** | Percentage of capacity (&#x60;0-100&#x60;) that needs to be operationally available for a pool to be considered up. | [optional] [default to 75]
**tls_ciphers** | **String** | List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional. | [optional] 
**tls_sni_hostname** | **String** | SNI hostname. Optional. | [optional] 
**tls_check_cert** | **Number** | Be strict on checking TLS certs. Optional. | [optional] 
**min_tls_version** | **Number** | Minimum allowed TLS version on connections to this server. Optional. | [optional] 
**max_tls_version** | **Number** | Maximum allowed TLS version on connections to this server. Optional. | [optional] 
**healthcheck** | **String** | Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools. | [optional] 
**comment** | **String** | A freeform descriptive note. | [optional] [default to &#39;&#39;]
**type** | **String** | What type of load balance group to use. | [optional] 
**override_host** | **String** | The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to &#x60;null&#x60; meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting. | [optional] [default to &#39;null&#39;]



## Enum: UseTlsEnum


* `0` (value: `0`)

* `1` (value: `1`)





## Enum: TypeEnum


* `random` (value: `"random"`)

* `hash` (value: `"hash"`)

* `client` (value: `"client"`)




