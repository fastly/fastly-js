/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LoggingCommonResponse from './LoggingCommonResponse';
import LoggingDatadogAdditional from './LoggingDatadogAdditional';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The LoggingDatadogResponse model module.
 * @module model/LoggingDatadogResponse
 * @version 15.0.0-beta.1
 */
class LoggingDatadogResponse {
    /**
     * Constructs a new <code>LoggingDatadogResponse</code>.
     * @alias module:model/LoggingDatadogResponse
     * @implements module:model/LoggingCommonResponse
     * @implements module:model/LoggingDatadogAdditional
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersionString
     */
    constructor() { 
        LoggingCommonResponse.initialize(this);LoggingDatadogAdditional.initialize(this);Timestamps.initialize(this);ServiceIdAndVersionString.initialize(this);
        LoggingDatadogResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingDatadogResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDatadogResponse} obj Optional instance to populate.
     * @return {module:model/LoggingDatadogResponse} The populated <code>LoggingDatadogResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingDatadogResponse();
            LoggingCommonResponse.constructFromObject(data, obj);
            LoggingDatadogAdditional.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('log_processing_region')) {
                obj['log_processing_region'] = ApiClient.convertToType(data['log_processing_region'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingDatadogResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingDatadogResponse.PlacementEnum} placement
 */
LoggingDatadogResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingDatadogResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/). Must produce valid JSON that Datadog can ingest. 
 * @member {String} format
 * @default '{"ddsource":"fastly","service":"%{req.service_id}V","date":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_start":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_end":"%{end:%Y-%m-%dT%H:%M:%S%Z}t","http":{"request_time_ms":"%D","method":"%m","url":"%{json.escape(req.url)}V","useragent":"%{User-Agent}i","referer":"%{Referer}i","protocol":"%H","request_x_forwarded_for":"%{X-Forwarded-For}i","status_code":"%s"},"network":{"client":{"ip":"%h","name":"%{client.as.name}V","number":"%{client.as.number}V","connection_speed":"%{client.geo.conn_speed}V"},"destination":{"ip":"%A"},"geoip":{"geo_city":"%{client.geo.city.utf8}V","geo_country_code":"%{client.geo.country_code}V","geo_continent_code":"%{client.geo.continent_code}V","geo_region":"%{client.geo.region}V"},"bytes_written":"%B","bytes_read":"%{req.body_bytes_read}V"},"host":"%{Fastly-Orig-Host}i","origin_host":"%v","is_ipv6":"%{if(req.is_ipv6, \"true\", \"false\")}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","tls_client_protocol":"%{json.escape(tls.client.protocol)}V","tls_client_servername":"%{json.escape(tls.client.servername)}V","tls_client_cipher":"%{json.escape(tls.client.cipher)}V","tls_client_cipher_sha":"%{json.escape(tls.client.ciphers_sha)}V","tls_client_tlsexts_sha":"%{json.escape(tls.client.tlsexts_sha)}V","is_h2":"%{if(fastly_info.is_h2, \"true\", \"false\")}V","is_h2_push":"%{if(fastly_info.h2.is_push, \"true\", \"false\")}V","h2_stream_id":"%{fastly_info.h2.stream_id}V","request_accept_content":"%{Accept}i","request_accept_language":"%{Accept-Language}i","request_accept_encoding":"%{Accept-Encoding}i","request_accept_charset":"%{Accept-Charset}i","request_connection":"%{Connection}i","request_dnt":"%{DNT}i","request_forwarded":"%{Forwarded}i","request_via":"%{Via}i","request_cache_control":"%{Cache-Control}i","request_x_requested_with":"%{X-Requested-With}i","request_x_att_device_id":"%{X-ATT-Device-Id}i","content_type":"%{Content-Type}o","is_cacheable":"%{if(fastly_info.state~\"^(HIT|MISS)$\", \"true\", \"false\")}V","response_age":"%{Age}o","response_cache_control":"%{Cache-Control}o","response_expires":"%{Expires}o","response_last_modified":"%{Last-Modified}o","response_tsv":"%{TSV}o","server_datacenter":"%{server.datacenter}V","req_header_size":"%{req.header_bytes_read}V","resp_header_size":"%{resp.header_bytes_written}V","socket_cwnd":"%{client.socket.cwnd}V","socket_nexthop":"%{client.socket.nexthop}V","socket_tcpi_rcv_mss":"%{client.socket.tcpi_rcv_mss}V","socket_tcpi_snd_mss":"%{client.socket.tcpi_snd_mss}V","socket_tcpi_rtt":"%{client.socket.tcpi_rtt}V","socket_tcpi_rttvar":"%{client.socket.tcpi_rttvar}V","socket_tcpi_rcv_rtt":"%{client.socket.tcpi_rcv_rtt}V","socket_tcpi_rcv_space":"%{client.socket.tcpi_rcv_space}V","socket_tcpi_last_data_sent":"%{client.socket.tcpi_last_data_sent}V","socket_tcpi_total_retrans":"%{client.socket.tcpi_total_retrans}V","socket_tcpi_delta_retrans":"%{client.socket.tcpi_delta_retrans}V","socket_ploss":"%{client.socket.ploss}V"}'
 */
LoggingDatadogResponse.prototype['format'] = '{"ddsource":"fastly","service":"%{req.service_id}V","date":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_start":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_end":"%{end:%Y-%m-%dT%H:%M:%S%Z}t","http":{"request_time_ms":"%D","method":"%m","url":"%{json.escape(req.url)}V","useragent":"%{User-Agent}i","referer":"%{Referer}i","protocol":"%H","request_x_forwarded_for":"%{X-Forwarded-For}i","status_code":"%s"},"network":{"client":{"ip":"%h","name":"%{client.as.name}V","number":"%{client.as.number}V","connection_speed":"%{client.geo.conn_speed}V"},"destination":{"ip":"%A"},"geoip":{"geo_city":"%{client.geo.city.utf8}V","geo_country_code":"%{client.geo.country_code}V","geo_continent_code":"%{client.geo.continent_code}V","geo_region":"%{client.geo.region}V"},"bytes_written":"%B","bytes_read":"%{req.body_bytes_read}V"},"host":"%{Fastly-Orig-Host}i","origin_host":"%v","is_ipv6":"%{if(req.is_ipv6, \"true\", \"false\")}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","tls_client_protocol":"%{json.escape(tls.client.protocol)}V","tls_client_servername":"%{json.escape(tls.client.servername)}V","tls_client_cipher":"%{json.escape(tls.client.cipher)}V","tls_client_cipher_sha":"%{json.escape(tls.client.ciphers_sha)}V","tls_client_tlsexts_sha":"%{json.escape(tls.client.tlsexts_sha)}V","is_h2":"%{if(fastly_info.is_h2, \"true\", \"false\")}V","is_h2_push":"%{if(fastly_info.h2.is_push, \"true\", \"false\")}V","h2_stream_id":"%{fastly_info.h2.stream_id}V","request_accept_content":"%{Accept}i","request_accept_language":"%{Accept-Language}i","request_accept_encoding":"%{Accept-Encoding}i","request_accept_charset":"%{Accept-Charset}i","request_connection":"%{Connection}i","request_dnt":"%{DNT}i","request_forwarded":"%{Forwarded}i","request_via":"%{Via}i","request_cache_control":"%{Cache-Control}i","request_x_requested_with":"%{X-Requested-With}i","request_x_att_device_id":"%{X-ATT-Device-Id}i","content_type":"%{Content-Type}o","is_cacheable":"%{if(fastly_info.state~\"^(HIT|MISS)$\", \"true\", \"false\")}V","response_age":"%{Age}o","response_cache_control":"%{Cache-Control}o","response_expires":"%{Expires}o","response_last_modified":"%{Last-Modified}o","response_tsv":"%{TSV}o","server_datacenter":"%{server.datacenter}V","req_header_size":"%{req.header_bytes_read}V","resp_header_size":"%{resp.header_bytes_written}V","socket_cwnd":"%{client.socket.cwnd}V","socket_nexthop":"%{client.socket.nexthop}V","socket_tcpi_rcv_mss":"%{client.socket.tcpi_rcv_mss}V","socket_tcpi_snd_mss":"%{client.socket.tcpi_snd_mss}V","socket_tcpi_rtt":"%{client.socket.tcpi_rtt}V","socket_tcpi_rttvar":"%{client.socket.tcpi_rttvar}V","socket_tcpi_rcv_rtt":"%{client.socket.tcpi_rcv_rtt}V","socket_tcpi_rcv_space":"%{client.socket.tcpi_rcv_space}V","socket_tcpi_last_data_sent":"%{client.socket.tcpi_last_data_sent}V","socket_tcpi_total_retrans":"%{client.socket.tcpi_total_retrans}V","socket_tcpi_delta_retrans":"%{client.socket.tcpi_delta_retrans}V","socket_ploss":"%{client.socket.ploss}V"}';

/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingDatadogResponse.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingDatadogResponse.prototype['log_processing_region'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingDatadogResponse.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingDatadogResponse.prototype['format_version'] = undefined;

/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingDatadogResponse.RegionEnum} region
 * @default 'US'
 */
LoggingDatadogResponse.prototype['region'] = undefined;

/**
 * The API key from your Datadog account. Required.
 * @member {String} token
 */
LoggingDatadogResponse.prototype['token'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingDatadogResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingDatadogResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingDatadogResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingDatadogResponse.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
LoggingDatadogResponse.prototype['version'] = undefined;


// Implement LoggingCommonResponse interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommonResponse.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommonResponse.PlacementEnum} placement
 */
LoggingCommonResponse.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommonResponse.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommonResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingCommonResponse.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingCommonResponse.prototype['log_processing_region'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommonResponse.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingCommonResponse.prototype['format_version'] = undefined;
// Implement LoggingDatadogAdditional interface:
/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingDatadogAdditional.RegionEnum} region
 * @default 'US'
 */
LoggingDatadogAdditional.prototype['region'] = undefined;
/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/). Must produce valid JSON that Datadog can ingest. 
 * @member {String} format
 * @default '{"ddsource":"fastly","service":"%{req.service_id}V","date":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_start":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_end":"%{end:%Y-%m-%dT%H:%M:%S%Z}t","http":{"request_time_ms":"%D","method":"%m","url":"%{json.escape(req.url)}V","useragent":"%{User-Agent}i","referer":"%{Referer}i","protocol":"%H","request_x_forwarded_for":"%{X-Forwarded-For}i","status_code":"%s"},"network":{"client":{"ip":"%h","name":"%{client.as.name}V","number":"%{client.as.number}V","connection_speed":"%{client.geo.conn_speed}V"},"destination":{"ip":"%A"},"geoip":{"geo_city":"%{client.geo.city.utf8}V","geo_country_code":"%{client.geo.country_code}V","geo_continent_code":"%{client.geo.continent_code}V","geo_region":"%{client.geo.region}V"},"bytes_written":"%B","bytes_read":"%{req.body_bytes_read}V"},"host":"%{Fastly-Orig-Host}i","origin_host":"%v","is_ipv6":"%{if(req.is_ipv6, \"true\", \"false\")}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","tls_client_protocol":"%{json.escape(tls.client.protocol)}V","tls_client_servername":"%{json.escape(tls.client.servername)}V","tls_client_cipher":"%{json.escape(tls.client.cipher)}V","tls_client_cipher_sha":"%{json.escape(tls.client.ciphers_sha)}V","tls_client_tlsexts_sha":"%{json.escape(tls.client.tlsexts_sha)}V","is_h2":"%{if(fastly_info.is_h2, \"true\", \"false\")}V","is_h2_push":"%{if(fastly_info.h2.is_push, \"true\", \"false\")}V","h2_stream_id":"%{fastly_info.h2.stream_id}V","request_accept_content":"%{Accept}i","request_accept_language":"%{Accept-Language}i","request_accept_encoding":"%{Accept-Encoding}i","request_accept_charset":"%{Accept-Charset}i","request_connection":"%{Connection}i","request_dnt":"%{DNT}i","request_forwarded":"%{Forwarded}i","request_via":"%{Via}i","request_cache_control":"%{Cache-Control}i","request_x_requested_with":"%{X-Requested-With}i","request_x_att_device_id":"%{X-ATT-Device-Id}i","content_type":"%{Content-Type}o","is_cacheable":"%{if(fastly_info.state~\"^(HIT|MISS)$\", \"true\", \"false\")}V","response_age":"%{Age}o","response_cache_control":"%{Cache-Control}o","response_expires":"%{Expires}o","response_last_modified":"%{Last-Modified}o","response_tsv":"%{TSV}o","server_datacenter":"%{server.datacenter}V","req_header_size":"%{req.header_bytes_read}V","resp_header_size":"%{resp.header_bytes_written}V","socket_cwnd":"%{client.socket.cwnd}V","socket_nexthop":"%{client.socket.nexthop}V","socket_tcpi_rcv_mss":"%{client.socket.tcpi_rcv_mss}V","socket_tcpi_snd_mss":"%{client.socket.tcpi_snd_mss}V","socket_tcpi_rtt":"%{client.socket.tcpi_rtt}V","socket_tcpi_rttvar":"%{client.socket.tcpi_rttvar}V","socket_tcpi_rcv_rtt":"%{client.socket.tcpi_rcv_rtt}V","socket_tcpi_rcv_space":"%{client.socket.tcpi_rcv_space}V","socket_tcpi_last_data_sent":"%{client.socket.tcpi_last_data_sent}V","socket_tcpi_total_retrans":"%{client.socket.tcpi_total_retrans}V","socket_tcpi_delta_retrans":"%{client.socket.tcpi_delta_retrans}V","socket_ploss":"%{client.socket.ploss}V"}'
 */
LoggingDatadogAdditional.prototype['format'] = '{"ddsource":"fastly","service":"%{req.service_id}V","date":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_start":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_end":"%{end:%Y-%m-%dT%H:%M:%S%Z}t","http":{"request_time_ms":"%D","method":"%m","url":"%{json.escape(req.url)}V","useragent":"%{User-Agent}i","referer":"%{Referer}i","protocol":"%H","request_x_forwarded_for":"%{X-Forwarded-For}i","status_code":"%s"},"network":{"client":{"ip":"%h","name":"%{client.as.name}V","number":"%{client.as.number}V","connection_speed":"%{client.geo.conn_speed}V"},"destination":{"ip":"%A"},"geoip":{"geo_city":"%{client.geo.city.utf8}V","geo_country_code":"%{client.geo.country_code}V","geo_continent_code":"%{client.geo.continent_code}V","geo_region":"%{client.geo.region}V"},"bytes_written":"%B","bytes_read":"%{req.body_bytes_read}V"},"host":"%{Fastly-Orig-Host}i","origin_host":"%v","is_ipv6":"%{if(req.is_ipv6, \"true\", \"false\")}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","tls_client_protocol":"%{json.escape(tls.client.protocol)}V","tls_client_servername":"%{json.escape(tls.client.servername)}V","tls_client_cipher":"%{json.escape(tls.client.cipher)}V","tls_client_cipher_sha":"%{json.escape(tls.client.ciphers_sha)}V","tls_client_tlsexts_sha":"%{json.escape(tls.client.tlsexts_sha)}V","is_h2":"%{if(fastly_info.is_h2, \"true\", \"false\")}V","is_h2_push":"%{if(fastly_info.h2.is_push, \"true\", \"false\")}V","h2_stream_id":"%{fastly_info.h2.stream_id}V","request_accept_content":"%{Accept}i","request_accept_language":"%{Accept-Language}i","request_accept_encoding":"%{Accept-Encoding}i","request_accept_charset":"%{Accept-Charset}i","request_connection":"%{Connection}i","request_dnt":"%{DNT}i","request_forwarded":"%{Forwarded}i","request_via":"%{Via}i","request_cache_control":"%{Cache-Control}i","request_x_requested_with":"%{X-Requested-With}i","request_x_att_device_id":"%{X-ATT-Device-Id}i","content_type":"%{Content-Type}o","is_cacheable":"%{if(fastly_info.state~\"^(HIT|MISS)$\", \"true\", \"false\")}V","response_age":"%{Age}o","response_cache_control":"%{Cache-Control}o","response_expires":"%{Expires}o","response_last_modified":"%{Last-Modified}o","response_tsv":"%{TSV}o","server_datacenter":"%{server.datacenter}V","req_header_size":"%{req.header_bytes_read}V","resp_header_size":"%{resp.header_bytes_written}V","socket_cwnd":"%{client.socket.cwnd}V","socket_nexthop":"%{client.socket.nexthop}V","socket_tcpi_rcv_mss":"%{client.socket.tcpi_rcv_mss}V","socket_tcpi_snd_mss":"%{client.socket.tcpi_snd_mss}V","socket_tcpi_rtt":"%{client.socket.tcpi_rtt}V","socket_tcpi_rttvar":"%{client.socket.tcpi_rttvar}V","socket_tcpi_rcv_rtt":"%{client.socket.tcpi_rcv_rtt}V","socket_tcpi_rcv_space":"%{client.socket.tcpi_rcv_space}V","socket_tcpi_last_data_sent":"%{client.socket.tcpi_last_data_sent}V","socket_tcpi_total_retrans":"%{client.socket.tcpi_total_retrans}V","socket_tcpi_delta_retrans":"%{client.socket.tcpi_delta_retrans}V","socket_ploss":"%{client.socket.ploss}V"}';
/**
 * The API key from your Datadog account. Required.
 * @member {String} token
 */
LoggingDatadogAdditional.prototype['token'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServiceIdAndVersionString interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersionString.prototype['service_id'] = undefined;
/**
 * @member {String} version
 */
ServiceIdAndVersionString.prototype['version'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingDatadogResponse['PlacementEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>log_processing_region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingDatadogResponse['LogProcessingRegionEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "eu"
     * @const
     */
    "eu": "eu",

    /**
     * value: "us"
     * @const
     */
    "us": "us"
};


/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {String}
 * @readonly
 */
LoggingDatadogResponse['FormatVersionEnum'] = {

    /**
     * value: "1"
     * @const
     */
    "v1": "1",

    /**
     * value: "2"
     * @const
     */
    "v2": "2"
};


/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingDatadogResponse['RegionEnum'] = {

    /**
     * value: "US"
     * @const
     */
    "US": "US",

    /**
     * value: "US3"
     * @const
     */
    "US3": "US3",

    /**
     * value: "US5"
     * @const
     */
    "US5": "US5",

    /**
     * value: "EU (legacy, same as EU1)"
     * @const
     */
    "EU (legacy, same as EU1)": "EU (legacy, same as EU1)",

    /**
     * value: "EU1"
     * @const
     */
    "EU1": "EU1",

    /**
     * value: "AP1"
     * @const
     */
    "AP1": "AP1"
};



export default LoggingDatadogResponse;

