/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LoggingCommon from './LoggingCommon';
import LoggingDatadogAllOf from './LoggingDatadogAllOf';

/**
 * The LoggingDatadog model module.
 * @module model/LoggingDatadog
 * @version 5.0.0
 */
class LoggingDatadog {
    /**
     * Constructs a new <code>LoggingDatadog</code>.
     * @alias module:model/LoggingDatadog
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingDatadogAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingDatadogAllOf.initialize(this);
        LoggingDatadog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingDatadog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDatadog} obj Optional instance to populate.
     * @return {module:model/LoggingDatadog} The populated <code>LoggingDatadog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingDatadog();
            LoggingCommon.constructFromObject(data, obj);
            LoggingDatadogAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'Number');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingDatadog.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingDatadog.PlacementEnum} placement
 */
LoggingDatadog.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingDatadog.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingDatadog.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingDatadog.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Datadog can ingest. 
 * @member {String} format
 * @default '{"ddsource":"fastly","service":"%{req.service_id}V","date":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_start":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_end":"%{end:%Y-%m-%dT%H:%M:%S%Z}t","http":{"request_time_ms":"%D","method":"%m","url":"%{json.escape(req.url)}V","useragent":"%{User-Agent}i","referer":"%{Referer}i","protocol":"%H","request_x_forwarded_for":"%{X-Forwarded-For}i","status_code":"%s"},"network":{"client":{"ip":"%h","name":"%{client.as.name}V","number":"%{client.as.number}V","connection_speed":"%{client.geo.conn_speed}V"},"destination":{"ip":"%A"},"geoip":{"geo_city":"%{client.geo.city.utf8}V","geo_country_code":"%{client.geo.country_code}V","geo_continent_code":"%{client.geo.continent_code}V","geo_region":"%{client.geo.region}V"},"bytes_written":"%B","bytes_read":"%{req.body_bytes_read}V"},"host":"%{Fastly-Orig-Host}i","origin_host":"%v","is_ipv6":"%{if(req.is_ipv6, \"true\", \"false\")}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","tls_client_protocol":"%{json.escape(tls.client.protocol)}V","tls_client_servername":"%{json.escape(tls.client.servername)}V","tls_client_cipher":"%{json.escape(tls.client.cipher)}V","tls_client_cipher_sha":"%{json.escape(tls.client.ciphers_sha)}V","tls_client_tlsexts_sha":"%{json.escape(tls.client.tlsexts_sha)}V","is_h2":"%{if(fastly_info.is_h2, \"true\", \"false\")}V","is_h2_push":"%{if(fastly_info.h2.is_push, \"true\", \"false\")}V","h2_stream_id":"%{fastly_info.h2.stream_id}V","request_accept_content":"%{Accept}i","request_accept_language":"%{Accept-Language}i","request_accept_encoding":"%{Accept-Encoding}i","request_accept_charset":"%{Accept-Charset}i","request_connection":"%{Connection}i","request_dnt":"%{DNT}i","request_forwarded":"%{Forwarded}i","request_via":"%{Via}i","request_cache_control":"%{Cache-Control}i","request_x_requested_with":"%{X-Requested-With}i","request_x_att_device_id":"%{X-ATT-Device-Id}i","content_type":"%{Content-Type}o","is_cacheable":"%{if(fastly_info.state~\"^(HIT|MISS)$\", \"true\", \"false\")}V","response_age":"%{Age}o","response_cache_control":"%{Cache-Control}o","response_expires":"%{Expires}o","response_last_modified":"%{Last-Modified}o","response_tsv":"%{TSV}o","server_datacenter":"%{server.datacenter}V","req_header_size":"%{req.header_bytes_read}V","resp_header_size":"%{resp.header_bytes_written}V","socket_cwnd":"%{client.socket.cwnd}V","socket_nexthop":"%{client.socket.nexthop}V","socket_tcpi_rcv_mss":"%{client.socket.tcpi_rcv_mss}V","socket_tcpi_snd_mss":"%{client.socket.tcpi_snd_mss}V","socket_tcpi_rtt":"%{client.socket.tcpi_rtt}V","socket_tcpi_rttvar":"%{client.socket.tcpi_rttvar}V","socket_tcpi_rcv_rtt":"%{client.socket.tcpi_rcv_rtt}V","socket_tcpi_rcv_space":"%{client.socket.tcpi_rcv_space}V","socket_tcpi_last_data_sent":"%{client.socket.tcpi_last_data_sent}V","socket_tcpi_total_retrans":"%{client.socket.tcpi_total_retrans}V","socket_tcpi_delta_retrans":"%{client.socket.tcpi_delta_retrans}V","socket_ploss":"%{client.socket.ploss}V"}'
 */
LoggingDatadog.prototype['format'] = '{"ddsource":"fastly","service":"%{req.service_id}V","date":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_start":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_end":"%{end:%Y-%m-%dT%H:%M:%S%Z}t","http":{"request_time_ms":"%D","method":"%m","url":"%{json.escape(req.url)}V","useragent":"%{User-Agent}i","referer":"%{Referer}i","protocol":"%H","request_x_forwarded_for":"%{X-Forwarded-For}i","status_code":"%s"},"network":{"client":{"ip":"%h","name":"%{client.as.name}V","number":"%{client.as.number}V","connection_speed":"%{client.geo.conn_speed}V"},"destination":{"ip":"%A"},"geoip":{"geo_city":"%{client.geo.city.utf8}V","geo_country_code":"%{client.geo.country_code}V","geo_continent_code":"%{client.geo.continent_code}V","geo_region":"%{client.geo.region}V"},"bytes_written":"%B","bytes_read":"%{req.body_bytes_read}V"},"host":"%{Fastly-Orig-Host}i","origin_host":"%v","is_ipv6":"%{if(req.is_ipv6, \"true\", \"false\")}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","tls_client_protocol":"%{json.escape(tls.client.protocol)}V","tls_client_servername":"%{json.escape(tls.client.servername)}V","tls_client_cipher":"%{json.escape(tls.client.cipher)}V","tls_client_cipher_sha":"%{json.escape(tls.client.ciphers_sha)}V","tls_client_tlsexts_sha":"%{json.escape(tls.client.tlsexts_sha)}V","is_h2":"%{if(fastly_info.is_h2, \"true\", \"false\")}V","is_h2_push":"%{if(fastly_info.h2.is_push, \"true\", \"false\")}V","h2_stream_id":"%{fastly_info.h2.stream_id}V","request_accept_content":"%{Accept}i","request_accept_language":"%{Accept-Language}i","request_accept_encoding":"%{Accept-Encoding}i","request_accept_charset":"%{Accept-Charset}i","request_connection":"%{Connection}i","request_dnt":"%{DNT}i","request_forwarded":"%{Forwarded}i","request_via":"%{Via}i","request_cache_control":"%{Cache-Control}i","request_x_requested_with":"%{X-Requested-With}i","request_x_att_device_id":"%{X-ATT-Device-Id}i","content_type":"%{Content-Type}o","is_cacheable":"%{if(fastly_info.state~\"^(HIT|MISS)$\", \"true\", \"false\")}V","response_age":"%{Age}o","response_cache_control":"%{Cache-Control}o","response_expires":"%{Expires}o","response_last_modified":"%{Last-Modified}o","response_tsv":"%{TSV}o","server_datacenter":"%{server.datacenter}V","req_header_size":"%{req.header_bytes_read}V","resp_header_size":"%{resp.header_bytes_written}V","socket_cwnd":"%{client.socket.cwnd}V","socket_nexthop":"%{client.socket.nexthop}V","socket_tcpi_rcv_mss":"%{client.socket.tcpi_rcv_mss}V","socket_tcpi_snd_mss":"%{client.socket.tcpi_snd_mss}V","socket_tcpi_rtt":"%{client.socket.tcpi_rtt}V","socket_tcpi_rttvar":"%{client.socket.tcpi_rttvar}V","socket_tcpi_rcv_rtt":"%{client.socket.tcpi_rcv_rtt}V","socket_tcpi_rcv_space":"%{client.socket.tcpi_rcv_space}V","socket_tcpi_last_data_sent":"%{client.socket.tcpi_last_data_sent}V","socket_tcpi_total_retrans":"%{client.socket.tcpi_total_retrans}V","socket_tcpi_delta_retrans":"%{client.socket.tcpi_delta_retrans}V","socket_ploss":"%{client.socket.ploss}V"}';

/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingDatadog.RegionEnum} region
 * @default 'US'
 */
LoggingDatadog.prototype['region'] = undefined;

/**
 * The API key from your Datadog account. Required.
 * @member {String} token
 */
LoggingDatadog.prototype['token'] = undefined;


// Implement LoggingCommon interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommon.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommon.PlacementEnum} placement
 */
LoggingCommon.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommon.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingCommon.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommon.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommon.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
// Implement LoggingDatadogAllOf interface:
/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingDatadogAllOf.RegionEnum} region
 * @default 'US'
 */
LoggingDatadogAllOf.prototype['region'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Datadog can ingest. 
 * @member {String} format
 * @default '{"ddsource":"fastly","service":"%{req.service_id}V","date":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_start":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_end":"%{end:%Y-%m-%dT%H:%M:%S%Z}t","http":{"request_time_ms":"%D","method":"%m","url":"%{json.escape(req.url)}V","useragent":"%{User-Agent}i","referer":"%{Referer}i","protocol":"%H","request_x_forwarded_for":"%{X-Forwarded-For}i","status_code":"%s"},"network":{"client":{"ip":"%h","name":"%{client.as.name}V","number":"%{client.as.number}V","connection_speed":"%{client.geo.conn_speed}V"},"destination":{"ip":"%A"},"geoip":{"geo_city":"%{client.geo.city.utf8}V","geo_country_code":"%{client.geo.country_code}V","geo_continent_code":"%{client.geo.continent_code}V","geo_region":"%{client.geo.region}V"},"bytes_written":"%B","bytes_read":"%{req.body_bytes_read}V"},"host":"%{Fastly-Orig-Host}i","origin_host":"%v","is_ipv6":"%{if(req.is_ipv6, \"true\", \"false\")}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","tls_client_protocol":"%{json.escape(tls.client.protocol)}V","tls_client_servername":"%{json.escape(tls.client.servername)}V","tls_client_cipher":"%{json.escape(tls.client.cipher)}V","tls_client_cipher_sha":"%{json.escape(tls.client.ciphers_sha)}V","tls_client_tlsexts_sha":"%{json.escape(tls.client.tlsexts_sha)}V","is_h2":"%{if(fastly_info.is_h2, \"true\", \"false\")}V","is_h2_push":"%{if(fastly_info.h2.is_push, \"true\", \"false\")}V","h2_stream_id":"%{fastly_info.h2.stream_id}V","request_accept_content":"%{Accept}i","request_accept_language":"%{Accept-Language}i","request_accept_encoding":"%{Accept-Encoding}i","request_accept_charset":"%{Accept-Charset}i","request_connection":"%{Connection}i","request_dnt":"%{DNT}i","request_forwarded":"%{Forwarded}i","request_via":"%{Via}i","request_cache_control":"%{Cache-Control}i","request_x_requested_with":"%{X-Requested-With}i","request_x_att_device_id":"%{X-ATT-Device-Id}i","content_type":"%{Content-Type}o","is_cacheable":"%{if(fastly_info.state~\"^(HIT|MISS)$\", \"true\", \"false\")}V","response_age":"%{Age}o","response_cache_control":"%{Cache-Control}o","response_expires":"%{Expires}o","response_last_modified":"%{Last-Modified}o","response_tsv":"%{TSV}o","server_datacenter":"%{server.datacenter}V","req_header_size":"%{req.header_bytes_read}V","resp_header_size":"%{resp.header_bytes_written}V","socket_cwnd":"%{client.socket.cwnd}V","socket_nexthop":"%{client.socket.nexthop}V","socket_tcpi_rcv_mss":"%{client.socket.tcpi_rcv_mss}V","socket_tcpi_snd_mss":"%{client.socket.tcpi_snd_mss}V","socket_tcpi_rtt":"%{client.socket.tcpi_rtt}V","socket_tcpi_rttvar":"%{client.socket.tcpi_rttvar}V","socket_tcpi_rcv_rtt":"%{client.socket.tcpi_rcv_rtt}V","socket_tcpi_rcv_space":"%{client.socket.tcpi_rcv_space}V","socket_tcpi_last_data_sent":"%{client.socket.tcpi_last_data_sent}V","socket_tcpi_total_retrans":"%{client.socket.tcpi_total_retrans}V","socket_tcpi_delta_retrans":"%{client.socket.tcpi_delta_retrans}V","socket_ploss":"%{client.socket.ploss}V"}'
 */
LoggingDatadogAllOf.prototype['format'] = '{"ddsource":"fastly","service":"%{req.service_id}V","date":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_start":"%{begin:%Y-%m-%dT%H:%M:%S%Z}t","time_end":"%{end:%Y-%m-%dT%H:%M:%S%Z}t","http":{"request_time_ms":"%D","method":"%m","url":"%{json.escape(req.url)}V","useragent":"%{User-Agent}i","referer":"%{Referer}i","protocol":"%H","request_x_forwarded_for":"%{X-Forwarded-For}i","status_code":"%s"},"network":{"client":{"ip":"%h","name":"%{client.as.name}V","number":"%{client.as.number}V","connection_speed":"%{client.geo.conn_speed}V"},"destination":{"ip":"%A"},"geoip":{"geo_city":"%{client.geo.city.utf8}V","geo_country_code":"%{client.geo.country_code}V","geo_continent_code":"%{client.geo.continent_code}V","geo_region":"%{client.geo.region}V"},"bytes_written":"%B","bytes_read":"%{req.body_bytes_read}V"},"host":"%{Fastly-Orig-Host}i","origin_host":"%v","is_ipv6":"%{if(req.is_ipv6, \"true\", \"false\")}V","is_tls":"%{if(req.is_ssl, \"true\", \"false\")}V","tls_client_protocol":"%{json.escape(tls.client.protocol)}V","tls_client_servername":"%{json.escape(tls.client.servername)}V","tls_client_cipher":"%{json.escape(tls.client.cipher)}V","tls_client_cipher_sha":"%{json.escape(tls.client.ciphers_sha)}V","tls_client_tlsexts_sha":"%{json.escape(tls.client.tlsexts_sha)}V","is_h2":"%{if(fastly_info.is_h2, \"true\", \"false\")}V","is_h2_push":"%{if(fastly_info.h2.is_push, \"true\", \"false\")}V","h2_stream_id":"%{fastly_info.h2.stream_id}V","request_accept_content":"%{Accept}i","request_accept_language":"%{Accept-Language}i","request_accept_encoding":"%{Accept-Encoding}i","request_accept_charset":"%{Accept-Charset}i","request_connection":"%{Connection}i","request_dnt":"%{DNT}i","request_forwarded":"%{Forwarded}i","request_via":"%{Via}i","request_cache_control":"%{Cache-Control}i","request_x_requested_with":"%{X-Requested-With}i","request_x_att_device_id":"%{X-ATT-Device-Id}i","content_type":"%{Content-Type}o","is_cacheable":"%{if(fastly_info.state~\"^(HIT|MISS)$\", \"true\", \"false\")}V","response_age":"%{Age}o","response_cache_control":"%{Cache-Control}o","response_expires":"%{Expires}o","response_last_modified":"%{Last-Modified}o","response_tsv":"%{TSV}o","server_datacenter":"%{server.datacenter}V","req_header_size":"%{req.header_bytes_read}V","resp_header_size":"%{resp.header_bytes_written}V","socket_cwnd":"%{client.socket.cwnd}V","socket_nexthop":"%{client.socket.nexthop}V","socket_tcpi_rcv_mss":"%{client.socket.tcpi_rcv_mss}V","socket_tcpi_snd_mss":"%{client.socket.tcpi_snd_mss}V","socket_tcpi_rtt":"%{client.socket.tcpi_rtt}V","socket_tcpi_rttvar":"%{client.socket.tcpi_rttvar}V","socket_tcpi_rcv_rtt":"%{client.socket.tcpi_rcv_rtt}V","socket_tcpi_rcv_space":"%{client.socket.tcpi_rcv_space}V","socket_tcpi_last_data_sent":"%{client.socket.tcpi_last_data_sent}V","socket_tcpi_total_retrans":"%{client.socket.tcpi_total_retrans}V","socket_tcpi_delta_retrans":"%{client.socket.tcpi_delta_retrans}V","socket_ploss":"%{client.socket.ploss}V"}';
/**
 * The API key from your Datadog account. Required.
 * @member {String} token
 */
LoggingDatadogAllOf.prototype['token'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingDatadog['PlacementEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "waf_debug"
     * @const
     */
    "waf_debug": "waf_debug",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {Number}
 * @readonly
 */
LoggingDatadog['FormatVersionEnum'] = {

    /**
     * value: 1
     * @const
     */
    "v1": 1,

    /**
     * value: 2
     * @const
     */
    "v2": 2
};


/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingDatadog['RegionEnum'] = {

    /**
     * value: "US"
     * @const
     */
    "US": "US",

    /**
     * value: "EU"
     * @const
     */
    "EU": "EU"
};



export default LoggingDatadog;

